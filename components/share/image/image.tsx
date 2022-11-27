import Image from "next/image";
import ImageLoader from "../../../utils/image-loader";
type GetType<T> = T extends (arg: infer P) => void ? P : string;

export default function CustomImage(props: GetType<typeof Image>) {
  const { src, width, height, alt } = props;

  return (
    <Image
      {...props}
      width={width}
      height={height}
      loader={ImageLoader}
      alt={alt}
      src={src}
    ></Image>
  );
}
