import { type SchemaTypeDefinition } from 'sanity'
import { studentType } from '@/sanity/schemaTypes/studentType';
import { trainingType } from '@/sanity/schemaTypes/trainingType';
import { categoryType } from '@/sanity/schemaTypes/categoryType';
import { moduleType } from '@/sanity/schemaTypes/moduleType';
import { instructorType } from '@/sanity/schemaTypes/instructorType';
import { lessonType } from '@/sanity/schemaTypes/lessonType';
import { enrollmentType } from '@/sanity/schemaTypes/enrollmentType';
import { lessonCompletionType } from '@/sanity/schemaTypes/lessonCompletionType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    enrollmentType,
    instructorType,
    lessonCompletionType,
    lessonType,
    moduleType,
    studentType,
    trainingType
  ],
}
