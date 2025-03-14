import { Divider } from '@/components/Divider';
import SocialShareButtons from '@/components/SocialShareButtons';
import { GetPostBySlugQueryResult } from '@/sanity.types';

export default function PostSidebar({
  post,
}: {
  post: GetPostBySlugQueryResult;
}) {
  return (
    <div>
      <div className="bg-card rounded-lg p-6 sticky top-16 border border-border">
        Created at: {post?._createdAt}
        <Divider />
        <SocialShareButtons title={post?.title || ''} />
      </div>
    </div>
  );
}
