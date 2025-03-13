import { PostCard } from '@/components/PostCard';
import { Divider } from '@/components/Divider';
import getPostsByCategory from '@/sanity/lib/posts/getPostByCategory';
import CategoryHero from '@/components/CategoryHero';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const posts = await getPostsByCategory(slug);

  if (!posts) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <CategoryHero
        title={posts[0].category.name}
        description={posts[0].category.description}
      />

      {/* Posts Grid */}
      <div className="container mx-auto px-4">
        <Divider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              href={`/kb/${post.type}/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
