import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './src/studio/schemas';

const config = defineConfig({
  name: 'default',
  title: 'Keplux Development',

  basePath: '/studio',
  projectId: 'odwzr8ji',
  dataset: 'production',

  plugins: [
    deskTool(),
    codeInput(),
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
