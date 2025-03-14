import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import RenderBodyContent from '@/components/RenderBodyContent';
import PostHero from '@/components/PostHero';
import PostSidebar from '@/components/PostSidebar';
import { urlFor } from '@/sanity/lib/image';
import getPostBySlug from '@/sanity/lib/posts/getPostBySlug';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  { params }: PostPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const postImage = post?.image ? urlFor(post.image).url() : '';
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${post?.title} | JTrainings`,
    description: post?.description,
    // TODO: Replace author with data from API.
    authors: [{ name: 'John Wick', url: 'john-wick@john.wick' }],
    openGraph: {
      images: [postImage, ...previousImages],
    },
  };
}

export default async function ArticlePage({ params }: PostPageProps) {
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
          <PostSidebar post={post} />
        </div>
      </div>
    </div>
  );
}
