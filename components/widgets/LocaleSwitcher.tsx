import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, pathname, query, asPath, locale } = router;

  const languages = {
    en: {
      title: "EN",
    },
    // ru: {
    //   title: "РУС",
    // },
    // ps: {
    //   title: "پشتو",
    // },
    fa: {
      title: "فارسی",
    },
  };

  return (
    <>
      {locales
        ?.filter((l) => l !== locale) // Filter out the current locale
        .map((locale) => {
          return (
            <Wrapper key={"locale-" + locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a>{languages[locale as keyof typeof languages].title}</a>
              </Link>
            </Wrapper>
          );
        })}
    </>
  );
}

const Wrapper = styled.div`
  text-transform: uppercase;

  & a {
    color: red;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 3px 0 2px;
  }
`;
