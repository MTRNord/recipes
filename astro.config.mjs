import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from "@astrojs/markdoc";
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlightLinksValidator(),
    starlight({
      title: 'Rezepte',
      sidebar: [{
        label: 'Rezepte',
        autogenerate: {
          directory: 'recipes'
        },
      }, {
        label: 'Anleitungen',
        autogenerate: {
          directory: 'guides'
        },
      }
      ]
    }),
    markdoc({ allowHTML: true })
  ]
});