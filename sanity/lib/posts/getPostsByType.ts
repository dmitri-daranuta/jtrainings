import { sanityFetch } from '../live';
import { defineQuery } from 'groq';

export default async function getPostsByType(type: string) {
  const getPostsByTypeQuery = defineQuery(`*[_type == "post" && type == $type] {
      ...,
      "slug": slug.current,
      "category": category->{...},
      "author": author->{...}
    }`);

  const posts = await sanityFetch({
    query: getPostsByTypeQuery,
    params: { type },
  });

  return posts.data;
}
