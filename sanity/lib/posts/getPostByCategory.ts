import { sanityFetch } from '../live';
import { defineQuery } from 'groq';

export default async function getPostsByCategory(term: string) {
  const getPostsByCategoryQuery =
    defineQuery(`*[_type == "post" && category->slug.current == $term] {
      ...,
      "slug": slug.current,
      "category": category->{...}
    }`);

  const posts = await sanityFetch({
    query: getPostsByCategoryQuery,
    params: { term },
  });

  return posts.data;
}
