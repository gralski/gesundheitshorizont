import type { Locale } from './ui';

export function normalizeLocale(locale?: string): Locale {
  if (locale?.toLowerCase().startsWith('fr')) return 'fr';
  return 'de';
}

export function getHtmlLang(locale: Locale): string {
  return locale === 'fr' ? 'fr' : 'de';
}

export function getDateLocale(locale: Locale): string {
  return locale === 'fr' ? 'fr-FR' : 'de-DE';
}

export function getOgLocale(locale: Locale): string {
  return locale === 'fr' ? 'fr_FR' : 'de_DE';
}

export function localePrefix(locale: Locale): string {
  return locale === 'fr' ? '/fr' : '';
}

export function withLocalePath(locale: Locale, path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const prefix = localePrefix(locale);
  return `${prefix}${normalizedPath}`;
}
