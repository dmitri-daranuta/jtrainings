import { sanityFetch } from "../live";
import { defineQuery } from "groq";

export default async function getTrainingBySlug(slug: string) {
  const getTrainingBySlugQuery =
    defineQuery(`*[_type == "training" && slug.current == $slug][0] {
      ...,
      "category": category->{...},
      "instructor": instructor->{...},
      "modules": modules[]-> {
        ...,
        "lessons": lessons[]-> {...}
      }
    }`);

  const training = await sanityFetch({
    query: getTrainingBySlugQuery,
    params: { slug },
  });

  return training.data;
}
