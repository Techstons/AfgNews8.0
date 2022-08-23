import { Article } from "@components/types";
import Image from "next/image";

type CloudinaryImageProps = Pick<Partial<Article>, "featuredImage" | "title">;

const CloudinaryImage = ({
  featuredImage,
  title,
  priority,
}: CloudinaryImageProps & { priority?: boolean }) => {
  return (
    <Image
      src={`q_auto/f_auto/${featuredImage?.id}` ?? "cld-sample"}
      className="image"
      alt={title}
      layout="responsive"
      width={1980}
      height={1020}
      quality={20}
      blurDataURL={`w_9/${featuredImage?.id}`}
      objectFit="cover"
      priority={priority}
    />
  );
};

export default CloudinaryImage;
