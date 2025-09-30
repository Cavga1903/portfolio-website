import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['tr', 'en', 'de'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as 'tr' | 'en' | 'de')) notFound();

  return {
    locale: locale as 'tr' | 'en' | 'de',
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
