import { defineQuery } from 'groq';
import { sanityFetch } from '../live';

export async function getLessonById(id: string) {
  const getLessonByIdQuery =
    defineQuery(`*[_type == "lesson" && _id == $id][0] {
    ...,
    "module": module->{
      ...,
      "training": training->{...}
    }
  }`);

  const result = await sanityFetch({
    query: getLessonByIdQuery,
    params: { id },
  });

  return result.data;
}
