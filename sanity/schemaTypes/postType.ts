import { defineField, defineType } from 'sanity';
import { SelectorFieldInput } from '@/sanity/schemaTypes/components/SelectorFieldInput';
import { BlockContentIcon } from '@sanity/icons';
import { PresentationIcon, RocketIcon } from 'lucide-react';

export const TYPES = [
  {
    title: 'Article',
    value: 'article',
    description:
      'A general piece of content that provides information, insights, or news on a specific topic.',
    icon: BlockContentIcon,
  },
  {
    title: 'Tutorial',
    value: 'tutorial',
    description:
      'A step-by-step instructional guide designed to help users learn or complete a specific task.',
    icon: PresentationIcon,
  },
  {
    title: 'Guide',
    value: 'guide',
    description:
      'A comprehensive resource that explains a topic in detail, often covering multiple aspects and best practices.',
    icon: RocketIcon,
  },
];

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: TYPES.map(({ title, value }) => ({ title, value })),
        layout: 'radio',
      },
      components: { input: SelectorFieldInput },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'code',
          name: 'code',
          title: 'Code',
          options: {
            languageAlternatives: [
              { title: '', value: '' },
              { title: 'JavaScript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'React JSX', value: 'jsx' },
              { title: 'React TSX', value: 'tsx' },
              { title: 'JSON', value: 'json' },
              { title: 'Bash', value: 'bash' },
            ],
            withFilename: false,
          },
        },
        {
          type: 'youtube',
          title: 'Video',
        },
      ],
    }),
    defineField({
      name: 'author',
      title: 'Authored by',
      description: 'The username of the content author.',
      type: 'reference',
      to: [{ type: 'user' }],
    }),
  ],
});
