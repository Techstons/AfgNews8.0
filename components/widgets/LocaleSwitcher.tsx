import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale, pathname, query, asPath } = router;

  const languages = {
    "en-US": {
      title: "English",
    },
    "ru-RU": {
      title: "Русский",
    },
    "ps-AR": {
      title: "پښتو",
    },
    "fa-IR": {
      title: "فارسی",
    },
  };

  return (
    <>
      {locales?.map((locale) => {
        console.log(locale);
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
