import { defineField, defineType } from 'sanity';
import IconPicker from '@/sanity/components/IconPicker';

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'object',
      fields: [
        { name: 'library', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'color', type: 'string' },
        { name: 'colored', type: 'boolean' },
      ],
      components: { input: IconPicker },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
