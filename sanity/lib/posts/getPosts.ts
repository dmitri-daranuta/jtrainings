import { sanityFetch } from '../live';
import { defineQuery } from 'groq';

export async function getPosts() {
  const getPostsQuery = defineQuery(`*[_type == "post"] {
    ...,
    "slug": slug.current,
    "category": category->{...},
    "author": author->{...}
  }`);

  const posts = await sanityFetch({ query: getPostsQuery });

  return posts.data;
}
