import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from "@astrojs/markdoc";
import starlightLinksValidator from 'starlight-links-validator';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlightLinksValidator(), starlight({
    title: 'Rezepte',
    locales: {
      root: {
        label: 'Deutsch',
        lang: 'de-DE'
      }
    },
    customCss: [
      './src/tailwind.css',
    ],
    sidebar: [{
      label: 'Rezepte',
      autogenerate: {
        directory: 'recipes'
      }
    }, {
      label: 'Anleitungen',
      autogenerate: {
        directory: 'guides'
      }
    }],
    components: {
      MarkdownContent: './src/components/recipe.astro'
    }
  }), markdoc({
    allowHTML: true
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })]
});