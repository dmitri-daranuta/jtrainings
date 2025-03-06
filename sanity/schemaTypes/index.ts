import { type SchemaTypeDefinition } from 'sanity';
import { categoryType } from './categoryType';
import { enrollmentType } from './enrollmentType';
import { instructorType } from './instructorType';
import { lessonCompletionType } from './lessonCompletionType';
import { lessonType } from './lessonType';
import { moduleType } from './moduleType';
import { studentType } from './studentType';
import { trainingType } from './trainingType';
import { youtubeType } from './youtubeType';
import { blogType } from './blogType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogType,
    categoryType,
    enrollmentType,
    instructorType,
    lessonCompletionType,
    lessonType,
    moduleType,
    studentType,
    trainingType,
    youtubeType,
  ],
};
