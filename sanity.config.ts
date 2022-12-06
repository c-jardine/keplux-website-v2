import { codeInput } from '@sanity/code-input';
import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {
  BlogPostsViewerStructure,
  BlogStructure,
} from './src/studio/deskStructure';
import { schemaTypes } from './src/studio/schemas';

const config = defineConfig({
  name: 'default',
  title: 'Keplux Development',

  basePath: '/studio',
  projectId: 'odwzr8ji',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) => {
        return S.list()
          .title('Content')
          .items([BlogStructure(S), S.divider(), BlogPostsViewerStructure(S)]);
      },
    }),
    codeInput(),
    colorInput(),
    visionTool({
      // Note: These are both optional
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'some-dataset',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});

export default config;
