import { BlocksFeature, LinkFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload/types'
import { ALL_BLOCKS } from '.'

export const RichText: Block = {
  slug: 'RichText',
  interfaceName: 'RichTextBlock',
  labels: {
    plural: 'RichTexts',
    singular: 'RichText',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      localized: true,
      // editor: lexicalEditor({
      //   features: ({ defaultFeatures }) => [
      //     ...defaultFeatures,
      //     // ! Need to comment the line below for recreating cms types
      //     // BlocksFeature({ blocks: ALL_BLOCKS }),
      //     LinkFeature({
      //       enabledCollections: ['pages', 'categories', 'newsPages', 'productPages'],
      //     }),
      //   ],
      // }),
    },
  ],
  imageURL: '/previews/rich-text.png',
  imageAltText: 'RichText Preview',
}
