import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './src/studio/schemas';

const config = defineConfig({
  name: 'default',
  title: '',

  basePath: '/studio',
  projectId: '',
  dataset: '',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});

export default config;
