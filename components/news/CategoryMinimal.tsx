import { Article } from '@components/types';
import styled from '@emotion/styled';
import useFormattedDate from '@hooks/useFormattedDate';

interface ICategoryMinimal extends Pick<Article, 'category' | 'createdAt'> {
  className?: string;
}

const CategoryMinimal = ({
  className,
  createdAt,
  category,
}: ICategoryMinimal) => {
  const articleDate = useFormattedDate(
    !!createdAt ? new Date(createdAt) : new Date(),
    'distance'
  );
  return (
    <Wrapper className={className}>
      {category} &nbsp; / &nbsp; {articleDate} ago
    </Wrapper>
  );
};

export default CategoryMinimal;

const Wrapper = styled.p`
  display: inline-flex;
  align-items: center;
  font-size: 0.6rem;

  &::before {
    content: ' ';
    display: inline-block;
    margin-right: 0.5rem;
    border-left: 2px solid var(--primary-color);
    margin-left: 3px;
    height: 0.65rem;
    padding: 0;
    width: 0;
  }
`;
