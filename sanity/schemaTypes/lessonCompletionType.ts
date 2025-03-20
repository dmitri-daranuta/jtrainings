import { defineField, defineType } from 'sanity';

export const lessonCompletionType = defineType({
  name: 'lessonCompletion',
  title: 'Lesson Completion',
  type: 'document',
  fields: [
    defineField({
      name: 'student',
      title: 'Student',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lesson',
      title: 'Lesson',
      type: 'reference',
      to: [{ type: 'lesson' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'module',
      title: 'Module',
      type: 'reference',
      to: [{ type: 'module' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'training',
      title: 'Training',
      type: 'reference',
      to: [{ type: 'training' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'completedAt',
      title: 'Completed At',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      trainingTitle: 'training.title',
      lessonTitle: 'lesson.title',
      completedAt: 'completedAt',
      trainingImage: 'training.image.asset',
    },
    prepare({ trainingTitle, lessonTitle, completedAt, trainingImage }) {
      return {
        title: `${trainingTitle || 'Training'}: "${lessonTitle || 'Lesson'}"`,
        subtitle: completedAt ? new Date(completedAt).toLocaleDateString() : '',
        media: trainingImage,
      };
    },
  },
});
