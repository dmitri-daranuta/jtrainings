import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PostCard } from '@/components/PostCard';
import { Divider } from '@/components/Divider';
import CategoryHero from '@/components/CategoryHero';
import getPostsByCategory from '@/sanity/lib/posts/getPostByCategory';
import getCategoryBySlug from '@/sanity/lib/categories/getCategoryBySlug';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  return {
    title: `${category?.name} | JTrainings`,
    description: category?.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const posts = await getPostsByCategory(slug);

  if (!posts) {
    notFound();
  }

  const category_name = posts[0]?.category?.name || '';
  const category_description = posts[0]?.category?.description || '';

  return (
    <div className="min-h-screen bg-background">
      <CategoryHero title={category_name} description={category_description} />
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
