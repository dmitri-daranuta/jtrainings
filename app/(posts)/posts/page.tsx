import { PostCard } from '@/components/PostCard';
import { getPosts } from '@/sanity/lib/posts/getPosts';
import { DividerWithText } from '@/components/DividerWithText';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-background">
      {/* Posts Grid */}
      <div className="container mx-auto px-4">
        <DividerWithText text="Posts" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              href={`/${post.type}/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
