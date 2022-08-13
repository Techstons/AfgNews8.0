import { Article } from "@components/types";
import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";

type CloudinaryImageProps = Pick<Partial<Article>, "featuredImage" | "title">;

const CloudinaryImage = ({ featuredImage, title }: CloudinaryImageProps) => {
  const url = buildUrl(featuredImage?.id ?? "cld-sample", {
    cloud: {
      cloudName: "domgv4rvm",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });

  return (
    <Image
      src={url}
      className="image"
      alt={title}
      layout="responsive"
      width={featuredImage?.width ?? 1980}
      height={featuredImage?.height ?? 1020}
      quality={20}
      objectFit="cover"
    />
  );
};

export default CloudinaryImage;
