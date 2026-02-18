"use client";

import { CSSProperties, useEffect, useRef } from "react";

export type YandexCoordinates = [number, number];
export type YandexBounds = [YandexCoordinates, YandexCoordinates];

export type YandexPlacemark = {
  id?: string | number;
  coordinates: YandexCoordinates;
  properties?: Record<string, unknown>;
  options?: Record<string, unknown>;
  onClick?: (event: unknown) => void;
};

export type YandexMapProps = {
  apiKey?: string;
  lang?: string;
  className?: string;
  style?: CSSProperties;
  center?: YandexCoordinates;
  zoom?: number;
  bounds?: YandexBounds;
  boundsOptions?: Record<string, unknown>;
  controls?: string[];
  behaviors?: string[];
  interactive?: boolean;
  mapOptions?: Record<string, unknown>;
  markers?: YandexPlacemark[];
  onMapReady?: (map: unknown, ymaps: unknown) => void;
  onError?: (error: Error) => void;
};

type YMapsWindow = Window & {
  ymaps?: {
    ready: (cb: () => void) => void;
    Map: new (el: HTMLElement, state: Record<string, unknown>) => {
      destroy: () => void;
      setCenter: (center: YandexCoordinates, zoom?: number) => void;
      setZoom: (zoom: number) => void;
      setBounds: (bounds: YandexBounds, options?: Record<string, unknown>) => void;
      geoObjects: {
        add: (obj: unknown) => void;
        remove: (obj: unknown) => void;
      };
      behaviors?: {
        disable: (name: string | string[]) => void;
        enable: (name: string | string[]) => void;
      };
    };
    GeoObjectCollection: new () => {
      add: (obj: unknown) => void;
    };
    Placemark: new (
      coordinates: YandexCoordinates,
      properties?: Record<string, unknown>,
      options?: Record<string, unknown>
    ) => {
      events: {
        add: (name: string, handler: (event: unknown) => void) => void;
      };
    };
  };
  __yandexMapsPromise?: Promise<YMapsWindow["ymaps"]>;
};

type YandexMapInstance = InstanceType<NonNullable<YMapsWindow["ymaps"]>["Map"]>;

const DEFAULT_LANG = "ru_RU";
const DEFAULT_STYLE: CSSProperties = { minHeight: 320 };

function buildScriptUrl(apiKey?: string, lang?: string) {
  const params = new URLSearchParams();
  if (apiKey) params.set("apikey", apiKey);
  params.set("lang", lang || DEFAULT_LANG);
  return `https://api-maps.yandex.ru/2.1/?${params.toString()}`;
}

function loadYandexMaps(apiKey?: string, lang?: string) {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Yandex Maps can only load in the browser."));
  }

  const win = window as YMapsWindow;
  if (win.ymaps) return Promise.resolve(win.ymaps);
  if (win.__yandexMapsPromise) return win.__yandexMapsPromise;

  win.__yandexMapsPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.dataset.ymaps = "true";
    script.src = buildScriptUrl(apiKey, lang);
    script.onload = () => resolve(win.ymaps);
    script.onerror = () =>
      reject(new Error("Failed to load Yandex Maps script."));
    document.head.appendChild(script);
  });

  return win.__yandexMapsPromise;
}

export default function YandexMap({
  apiKey,
  lang,
  className,
  style,
  center = [55.751244, 37.618423],
  zoom = 10,
  bounds,
  boundsOptions,
  controls,
  behaviors,
  interactive = true,
  mapOptions,
  markers,
  onMapReady,
  onError,
}: YandexMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<YandexMapInstance | null>(null);
  const ymapsRef = useRef<NonNullable<YMapsWindow["ymaps"]> | null>(null);
  const markersRef = useRef<unknown>(null);
  const centerRef = useRef(center);
  const zoomRef = useRef(zoom);
  const boundsRef = useRef(bounds);
  const boundsOptionsRef = useRef(boundsOptions);

  useEffect(() => {
    centerRef.current = center;
  }, [center]);

  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  useEffect(() => {
    boundsRef.current = bounds;
    boundsOptionsRef.current = boundsOptions;
  }, [bounds, boundsOptions]);

  useEffect(() => {
    let cancelled = false;

    loadYandexMaps(apiKey, lang)
      .then((ymaps) => {
        if (cancelled || !ymaps) return;
        ymapsRef.current = ymaps;
        ymaps.ready(() => {
          if (cancelled || !containerRef.current) return;

          const mapState: Record<string, unknown> = {
            center: centerRef.current,
            zoom: zoomRef.current,
            ...mapOptions,
          };

          if (controls) mapState.controls = controls;
          if (behaviors) mapState.behaviors = behaviors;

          mapRef.current = new ymaps.Map(containerRef.current, mapState);

          if (!interactive && mapRef.current.behaviors) {
            mapRef.current.behaviors.disable("all");
          }

          if (boundsRef.current) {
            mapRef.current.setBounds(boundsRef.current, {
              checkZoomRange: true,
              ...boundsOptionsRef.current,
            });
          }

          if (markers?.length) {
            const collection = new ymaps.GeoObjectCollection();
            markers.forEach((marker) => {
              const placemark = new ymaps.Placemark(
                marker.coordinates,
                marker.properties,
                marker.options
              );
              if (marker.onClick) {
                placemark.events.add("click", marker.onClick);
              }
              collection.add(placemark);
            });
            mapRef.current?.geoObjects.add(collection);
            markersRef.current = collection;
          }

          onMapReady?.(mapRef.current, ymaps);
        });
      })
      .catch((error) => {
        if (!cancelled) onError?.(error as Error);
      });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
      markersRef.current = null;
    };
  }, [
    apiKey,
    lang,
    controls,
    behaviors,
    interactive,
    mapOptions,
    onMapReady,
    onError,
  ]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (interactive === false && map.behaviors) {
      map.behaviors.disable("all");
    }

    if (center) {
      map.setCenter(center, zoom);
    } else if (typeof zoom === "number") {
      map.setZoom(zoom);
    }

    if (bounds) {
      map.setBounds(bounds, {
        checkZoomRange: true,
        ...boundsOptions,
      });
    }
  }, [center, zoom, bounds, boundsOptions, interactive]);

  useEffect(() => {
    const map = mapRef.current;
    const ymaps = ymapsRef.current;
    if (!map || !ymaps) return;

    if (markersRef.current) {
      map.geoObjects.remove(markersRef.current);
      markersRef.current = null;
    }

    if (markers?.length) {
      const collection = new ymaps.GeoObjectCollection();
      markers.forEach((marker) => {
        const placemark = new ymaps.Placemark(
          marker.coordinates,
          marker.properties,
          marker.options
        );
        if (marker.onClick) placemark.events.add("click", marker.onClick);
        collection.add(placemark);
      });
      map.geoObjects.add(collection);
      markersRef.current = collection;
    }
  }, [markers]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ ...DEFAULT_STYLE, ...style }}
    />
  );
}
