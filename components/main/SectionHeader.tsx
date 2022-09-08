import { CategoryLabel } from "@components/news";
import styled from "@emotion/styled";
import Link from "next/link";

interface ISectionHeader {
  title: string;
  slug: string;
}

const SectionHeader = ({ title, slug }: ISectionHeader) => {
  return (
    <Header>
      <Link href={slug}>
        <a>
          <CategoryLabel label={title === "Afghanistan" ? "AFG" : title} />
        </a>
      </Link>
    </Header>
  );
};

export default SectionHeader;

const Header = styled.div`
  border-bottom: 1px solid var(--text-color-alt);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;

  a {
    display: block;
    max-width: max-content;
  }

  h2 {
    font-size: 1.15rem;
  }
`;
