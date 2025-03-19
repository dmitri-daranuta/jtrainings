import { type SchemaTypeDefinition } from 'sanity';
import { categoryType } from './categoryType';
import { enrollmentType } from './enrollmentType';
import { instructorType } from './instructorType';
import { lessonCompletionType } from './lessonCompletionType';
import { lessonType } from './lessonType';
import { moduleType } from './moduleType';
import { postType } from './postType';
import { studentType } from './studentType';
import { trainingType } from './trainingType';
import { youtubeType } from './youtubeType';
import { userType } from './userType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    enrollmentType,
    instructorType,
    lessonCompletionType,
    lessonType,
    moduleType,
    postType,
    studentType,
    trainingType,
    youtubeType,
    userType,
  ],
};
