export type TMediaFile =
  | {
      url: string;
      alt: string;
      type: "image";
      previewUrl?: never;
    }
  | {
      url: string;
      alt?: never;
      type: "video";
      previewUrl: string;
    };
