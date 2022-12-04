import { codeInput } from '@sanity/code-input';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './src/studio/schemas';

const config = defineConfig({
  name: 'default',
  title: 'Keplux Development',

  basePath: '/studio',
  projectId: 'odwzr8ji',
  dataset: 'production',

  plugins: [deskTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});

export default config;
