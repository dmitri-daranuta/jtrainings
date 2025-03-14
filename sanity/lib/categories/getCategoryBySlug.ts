import { sanityFetch } from '../live';
import { defineQuery } from 'groq';

export default async function getCategoryBySlug(slug: string) {
  const getCategoryBySlugQuery = defineQuery(
    `*[_type == "category" && slug.current == $slug][0]`,
  );

  const category = await sanityFetch({
    query: getCategoryBySlugQuery,
    params: { slug },
  });

  return category.data;
}
