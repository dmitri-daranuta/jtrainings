import { GetPostBySlugQueryResult } from '@/sanity.types';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PostHero({ post }: { post: GetPostBySlugQueryResult }) {
  return (
    <div className="relative h-[60vh] w-full">
      {post?.image && (
        <Image
          src={urlFor(post.image).url() || ''}
          alt={post.title || 'Post Title'}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black/60" />
      <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-12">
        <Link
          href="/knowledge-base"
          prefetch={false}
          className="text-white mb-8 flex items-center hover:text-primary transition-colors w-fit"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Knowledge Base
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="capitalize px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                {post?.type || 'Uncategorized'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post?.title}
            </h1>
            <p className="text-lg text-white/90">{post?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
