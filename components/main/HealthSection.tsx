import { HealthCard } from "@components/news";
import { ISection } from "@components/types";
import styled from "@emotion/styled";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

const HealthSection = ({ slug, title, articles }: ISection) => {
  return (
    <SectionWrapper>
      <SectionHeader slug={slug} title={title} />
      <HealthLayout>
        {/* {articles?.slice(0, 4).map((item) => {
          return <HealthCard card={item} key={item.slug} />;
        })} */}

        {!!articles?.[0] && (
          <>
            <HealthCard card={articles[0]} />
            <HealthCard card={articles[0]} />
            <HealthCard card={articles[0]} />
            <HealthCard card={articles[0]} />
          </>
        )}
      </HealthLayout>
    </SectionWrapper>
  );
};

export default HealthSection;

const HealthLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
