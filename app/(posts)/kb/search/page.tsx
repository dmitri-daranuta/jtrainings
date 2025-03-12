import { Search } from 'lucide-react';
import { searchPosts } from '@/sanity/lib/posts/searchPosts';
import { PostCard } from '@/components/PostCard';
import KnowledgeBaseHero from '@/components/KnowledgeBaseHero';
import { Divider } from '@/components/Divider';

export default async function KBSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const term = (await searchParams).s ?? '';
  const type = (await searchParams).t ?? '';
  const decodedTerm = decodeURIComponent(term);
  const decodedType = decodeURIComponent(type);
  const posts = await searchPosts(decodedTerm, decodedType);

  return (
    <div className="min-h-screen bg-background">
      <KnowledgeBaseHero />
      <Divider />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Search className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Search Results</h1>
            <p className="text-muted-foreground">
              Found {posts.length} result{posts.length === 1 ? '' : 's'} for
              &quot;{decodedTerm}&quot;
            </p>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">No posts found</h2>
            <p className="text-muted-foreground mb-8">
              Try searching with different keywords or type
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                href={`/kb/${post.type}/${post.slug}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
