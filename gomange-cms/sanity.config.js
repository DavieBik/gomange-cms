import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// ✅ This now correctly points to your real schema folder
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'GoMange CMS',

  projectId: 'v0ejlvd9',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
