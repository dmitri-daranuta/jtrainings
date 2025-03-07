import { sanityFetch } from '../live';
import { defineQuery } from 'groq';

export default async function getPostBySlug(slug: string) {
  const getPostBySlugQuery =
    defineQuery(`*[_type == "post" && slug.current == $slug][0] {
      ...,
      "category": category->{...},
    }`);

  const post = await sanityFetch({
    query: getPostBySlugQuery,
    params: { slug },
  });

  return post.data;
}
