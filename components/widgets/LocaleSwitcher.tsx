import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, pathname, query, asPath } = router;

  const languages = {
    en: {
      title: "English",
    },
    ru: {
      title: "Русский",
    },
    ps: {
      title: "پښتو",
    },
    fa: {
      title: "فارسی",
    },
  };

  return (
    <>
      {locales?.map((locale) => {
        return (
          <span key={"locale-" + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              <a>{languages[locale as keyof typeof languages].title}</a>
            </Link>
          </span>
        );
      })}
    </>
  );
}
