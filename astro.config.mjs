import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from "@astrojs/markdoc";
import starlightLinksValidator from 'starlight-links-validator';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://recipes.nordgedanken.dev',
  integrations: [starlightLinksValidator(), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  }), starlight({
    title: 'Rezepte',
    defaultLocale: 'de-de',
    locales: {
      'de-de': {
        label: 'Deutsch',
        lang: 'de-DE'
      },
      en: {
        label: 'English'
      }
    },
    customCss: [
      './src/tailwind.css',
    ],
    sidebar: [{
      label: 'Rezepte',
      translations: {
        'en': 'Recipes',
      },
      autogenerate: {
        directory: 'recipes'
      }
    }, {
      label: 'Anleitungen',
      translations: {
        'en': 'Guides',
      },
      autogenerate: {
        directory: 'guides'
      }
    }],
    components: {
      MarkdownContent: './src/components/recipe.astro'
    }
  }), markdoc()]
});