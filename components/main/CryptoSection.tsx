import { CryptoCard } from "@components/news";
import { ISection } from "@components/types";
import styled from "@emotion/styled";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

const CryptoSection = ({ slug, title, articles }: ISection) => {
  return (
    <SectionWrapper>
      <SectionHeader slug={slug} title={title} />
      <CryptoLayout>
        {/* {articles?.slice(0, 3).map((item) => {
          return <CryptoCard card={item} key={item.slug} />;
        })} */}
        {!!articles?.[0] && (
          <>
            <CryptoCard card={articles[0]} />
            <CryptoCard card={articles[0]} />
            <CryptoCard card={articles[0]} />
          </>
        )}
      </CryptoLayout>
    </SectionWrapper>
  );
};

export default CryptoSection;

const CryptoLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
