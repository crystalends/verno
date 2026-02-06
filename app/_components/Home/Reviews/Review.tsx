import Image, { ImageProps } from "next/image";

type TReviewProps = {
  user: {
    name: string;
    endContent: React.ReactNode;
    imageProps?: Omit<
      ImageProps,
      "width" | "height" | "alt" | "className" | "src"
    > & { src?: string };
  };
  value: string;
  endContent?: React.ReactNode;
};

export default function Review({ user, value, endContent }: TReviewProps) {
  const src = user.imageProps?.src ?? "/user.webp";

  return (
    <div className="bg-[#F3EAE3] min-w-[340px] rounded-[10px] flex flex-col gap-5 p-5">
      <div className="flex items-center gap-1.25">
        <Image
          src={src}
          className="object-cover size-10.25 rounded-full"
          alt={user.name}
          width={49}
          height={49}
          {...user.imageProps}
        />
        <div className="flex flex-col gap-2.5">
          <h5>{user.name}</h5>
          {user.endContent}
        </div>
      </div>
      <div>
        <p className="font-circe font-light line-clamp-5 overflow-hidden text-ellipsis leading-5">
          {value}
        </p>
        {endContent}
      </div>
    </div>
  );
}
