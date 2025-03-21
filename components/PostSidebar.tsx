import { Divider } from '@/components/Divider';
import SocialShareButtons from '@/components/SocialShareButtons';
import { GetPostBySlugQueryResult } from '@/sanity.types';
import Image from 'next/image';

export default function PostSidebar({
  post,
}: {
  post: GetPostBySlugQueryResult;
}) {
  const author = `${post?.author?.firstName} ${post?.author?.lastName}`;

  return (
    <div>
      <div className="bg-card rounded-lg p-6 sticky top-16 border border-border">
        <div>
          <p>
            Created at:{' '}
            <span className="text-muted-foreground">{post?._createdAt}</span>
          </p>
        </div>
        {post?.author && (
          <div>
            <Divider />
            <div className="flex items-center gap-3 mb-4">
              {post.author.imageUrl && (
                <div className="relative h-12 w-12">
                  <Image
                    src={post.author.imageUrl || ''}
                    alt={author || 'Training Instructor'}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <div className="font-medium">{author}</div>
                <div className="text-sm text-muted-foreground">Author</div>
              </div>
            </div>
          </div>
        )}

        <Divider />
        <SocialShareButtons title={post?.title || ''} />
      </div>
    </div>
  );
}
