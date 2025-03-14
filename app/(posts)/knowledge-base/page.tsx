import { Metadata } from 'next';
import KnowledgeBaseHero from '@/components/KnowledgeBaseHero';
import { CategoryCard } from '@/components/CategoryCard';
import { Divider } from '@/components/Divider';
import { getCategories } from '@/sanity/lib/categories/getCategories';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Expert Tutorials, Guides & Trainings – Learn, Build, and Grow',
  description:
    'Explore expert-written tutorials, in-depth guides, and structured trainings to enhance your skills. Learn step-by-step, stay updated, and master new technologies with our comprehensive resources.',
};

export default async function KnowledgeBasePage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-background">
      <KnowledgeBaseHero />

      {/* Trainings Grid */}
      <div className="container mx-auto px-4">
        <Divider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              href={`/kb/category/${category.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
