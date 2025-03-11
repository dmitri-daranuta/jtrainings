import KnowledgeBaseHero from '@/components/KnowledgeBaseHero';
import { getCategories } from '@/sanity/lib/categories/getCategories';
import { CategoryCard } from '@/components/CategoryCard';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export default async function KnowledgeBasePage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-background">
      <KnowledgeBaseHero />

      {/* Trainings Grid */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
          <span className="text-sm font-medium text-muted-foreground">
            Categories
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              href={`/kb/${category.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
