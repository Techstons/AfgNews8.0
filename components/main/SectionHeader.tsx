import styled from "@emotion/styled";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface ISectionHeader {
  title: string;
  slug: string;
}

const SectionHeader = ({ title, slug }: ISectionHeader) => {
  const { t } = useTranslation();

  return (
    <Header>
      <h2>{title}</h2>
      <Link href={slug}>
        <a>
          <HeaderLink>{t("home:view_more")}</HeaderLink>
        </a>
      </Link>
    </Header>
  );
};

export default SectionHeader;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--primary-light);
  margin-bottom: 1rem;
  text-transform: uppercase;

  h2 {
    font-size: 1rem;
  }
`;

const HeaderLink = styled.span`
  font-size: 0.75rem;
  color: var(--primary-light);
  cursor: pointer;
`;
