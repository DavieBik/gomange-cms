import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import restaurant from './schemas/restaurant'
import collection from './schemas/collection'
import article from './schemas/article'

export default defineConfig({
  name: 'default',
  title: 'GoMange CMS',
  projectId: 'v0ejlvd9',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: [restaurant, collection, article],
  },
})
