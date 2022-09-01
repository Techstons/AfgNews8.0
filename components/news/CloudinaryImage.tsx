import { Article } from "@components/types";
import Image from "next/image";

interface IImage {
  width?: string;
  height?: string;
}

type CloudinaryImageProps = Pick<Partial<Article>, "featuredImage" | "title"> &
  IImage;

const CloudinaryImage = ({
  featuredImage,
  title,
  priority,
  width = "1980",
  height = "1080",
}: CloudinaryImageProps & { priority?: boolean }) => {
  return (
    <Image
      src={`q_auto/f_auto/${featuredImage?.id}` ?? "cld-sample"}
      className="image"
      alt={title}
      layout="responsive"
      width={width}
      height={height}
      quality={20}
      placeholder="blur"
      blurDataURL={`w_8,q_1/${featuredImage?.id}`}
      objectFit="cover"
      priority={priority}
    />
  );
};

export default CloudinaryImage;
