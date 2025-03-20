import { type SchemaTypeDefinition } from 'sanity';
import { categoryType } from './categoryType';
import { enrollmentType } from './enrollmentType';
import { lessonCompletionType } from './lessonCompletionType';
import { lessonType } from './lessonType';
import { moduleType } from './moduleType';
import { postType } from './postType';
import { trainingType } from './trainingType';
import { youtubeType } from './youtubeType';
import { userType } from './userType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    enrollmentType,
    lessonCompletionType,
    lessonType,
    moduleType,
    postType,
    trainingType,
    youtubeType,
    userType,
  ],
};
