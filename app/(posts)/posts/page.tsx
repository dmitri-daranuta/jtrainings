import { PostCard } from '@/components/PostCard';
import { getPosts } from '@/sanity/lib/posts/getPosts';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-background">
      {/* Posts Grid */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
          <span className="text-sm font-medium text-muted-foreground">
            Posts
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} href={`/post/${post.slug}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
