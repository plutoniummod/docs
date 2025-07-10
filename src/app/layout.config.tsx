import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          Plutonium Docs
        </>
      ),
      url: `/${locale}`,
    },
    links: [
      {
        text: 'Home',
        url: 'https://plutonium.pw',
        type: 'main'
      },
      {
        text: 'Forum',
        url: 'https://forum.plutonium.pw',
        type: 'main'
      },
    ],
    githubUrl: 'https://github.com/plutoniummod/docs',
  };
};
