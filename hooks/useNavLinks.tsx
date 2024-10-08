import { useTranslation } from 'next-i18next';
import { ReturnValue } from './article/get-articles-ctx';

export type NavLinks = {
  default: keyof ReturnValue;
  title: string;
  slug: string;
};

type UseNavLinksProps = {
  isCategory?: boolean | undefined;
};

const useNavLinks = (props: UseNavLinksProps) => {
  const { isCategory } = props || {};
  const { t } = useTranslation();

  const navLinks: NavLinks[] = [
    {
      default: 'Home',
      title: t('common:home'),
      slug: '/',
    },
    {
      default: 'Afg',
      title: isCategory ? t('common:afg') : 'AFG',
      slug: '/afg',
    },
    {
      default: 'World',
      title: t('common:world'),
      slug: '/world',
    },
    {
      default: 'Business',
      title: t('common:business'),
      slug: '/business',
    },
    {
      default: 'Tech',
      title: t('common:tech'),
      slug: '/tech-and-science',
    },
    {
      default: 'Crypto',
      title: t('common:crypto'),
      slug: '/crypto',
    },
    {
      default: 'Health',
      title: t('common:health'),
      slug: '/health',
    },
    {
      default: 'Sports',
      title: t('common:sports'),
      slug: '/sports',
    },
  ];

  return navLinks;
};

export default useNavLinks;
