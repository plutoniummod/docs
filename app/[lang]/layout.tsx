import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import SearchDialog from '@/components/search';
import { Inter } from 'next/font/google';
import { de, es, fr } from './translations';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

const locales = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: 'German',
    locale: 'de',
  },
  {
    name: 'Spanish',
    locale: 'es',
  },
  {
    name: 'French',
    locale: 'fr',
  },
];

export default async function Layout({ params, children }: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: { de, es, fr }[lang]
          }}
          search={{
            SearchDialog,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
