import getPostBySlug from '@/sanity/lib/posts/getPostBySlug';
import RenderBodyContent from '@/components/RenderBodyContent';
import { notFound } from 'next/navigation';
import PostHero from '@/components/PostHero';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TutorialPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post?.type !== 'article') {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PostHero post={post} />

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-card p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
              <div className="space-y-4">
                {/* Content */}
                {post.content && (
                  <div>
                    <div className="prose prose-blue dark:prose-invert max-w-none">
                      <RenderBodyContent content={post.content} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div>
            <div className="bg-card rounded-lg p-6 sticky top-4 border border-border">
              Created at: {post._createdAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
