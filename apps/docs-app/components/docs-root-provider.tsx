'use client';

import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import SearchDialog from '@/components/search';
import { i18n } from '@/lib/i18n';
import { config } from '@config';
import {
  applyThemeToDocument,
  getStoredThemeState,
} from '@libs/ui/themes';

type Props = {
  lang: string;
  children: ReactNode;
};

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: 'English',
    },
    'zh-CN': {
      displayName: 'Chinese',
      search: 'Search docs',
    },
  },
});

/**
 * Custom RootProvider wrapper that preserves theme classes on HTML element
 * when switching locales. Uses soft navigation to avoid full page refresh.
 */
export function DocsRootProvider({ lang, children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const localeSetRef = useRef<Set<string>>(new Set());
  const i18nConfig = useMemo(() => provider(lang), [lang]);

  // Build locale set for checking
  useMemo(() => {
    if (i18nConfig.locales) {
      localeSetRef.current = new Set(i18nConfig.locales.map((item) => item.locale));
    }
  }, [i18nConfig.locales]);

  // Custom locale change handler that preserves theme classes
  const onLocaleChange = useCallback(
    (nextLocale: string) => {
      if (!nextLocale || nextLocale === i18nConfig.locale) return;

      const segments = pathname.split('/').filter(Boolean);
      const localeSet = localeSetRef.current;

      if (segments.length === 0) {
        segments.unshift(nextLocale);
      } else if (localeSet.has(segments[0])) {
        segments[0] = nextLocale;
      } else {
        segments.unshift(nextLocale);
      }

      const href = `/${segments.join('/')}`;
      
      // Use soft navigation to preserve existing HTML classes (fonts/theme)
      router.push(href);
    },
    [i18nConfig.locale, pathname, router]
  );

  // Re-apply theme classes after client navigation to preserve theme
  useEffect(() => {
    const storageKey = config.app.theme.storageKey;
    const defaultTheme = config.app.theme.defaultTheme;
    const defaultColorScheme = config.app.theme.defaultColorScheme;
    const stored = getStoredThemeState(storageKey);
    const themeState = stored || { theme: defaultTheme, colorScheme: defaultColorScheme };
    
    // Re-apply theme classes to ensure they persist
    applyThemeToDocument(themeState.theme, themeState.colorScheme);
  }, [i18nConfig.locale]);

  // Merge custom onLocaleChange with the i18n config
  const i18nWithHandler = useMemo(() => ({
    ...i18nConfig,
    onLocaleChange,
  }), [i18nConfig, onLocaleChange]);

  return (
    <RootProvider
      search={{ SearchDialog }}
      i18n={i18nWithHandler}
    >
      {children}
    </RootProvider>
  );
}
