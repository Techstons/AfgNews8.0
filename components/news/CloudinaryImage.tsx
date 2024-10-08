import { Article } from '@components/types';
import styled from '@emotion/styled';
import Image from 'next/image';

interface IImage {
  width?: string;
  height?: string;
  layout?: 'fixed' | 'fill' | 'raw' | 'intrinsic' | 'responsive' | undefined;
  className?: string;
}

type CloudinaryImageProps = Pick<Partial<Article>, 'featuredImage' | 'title'> &
  IImage;

const CloudinaryImage = ({
  featuredImage,
  title,
  priority,
  width = '1980',
  height = '1020',
  layout = 'responsive',
  className,
}: CloudinaryImageProps & { priority?: boolean }) => {
  return (
    <Wrapper
      width={width === '1980' ? 'auto' : width}
      height={height === '1020' ? 'auto' : height}
      className={className}>
      <Image
        src={`q_auto/f_auto/${featuredImage?.id}` ?? 'cld-sample'}
        className="image"
        alt={title}
        layout={layout}
        width={width}
        height={height}
        quality={20}
        placeholder="blur"
        blurDataURL={`w_8,q_1/${featuredImage?.id}`}
        objectFit="cover"
        priority={priority}
      />
    </Wrapper>
  );
};

export default CloudinaryImage;

const Wrapper = styled.div<IImage>`
  position: relative;
  border-radius: 0.35rem;
  overflow: hidden;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
