import { defineField, defineType } from 'sanity';
import { VideoIcon } from 'lucide-react';
import ReactPlayer from 'react-player';

export const youtubeType = defineType({
  name: 'youtube',
  title: 'YouTube Embed',
  type: 'object',
  icon: VideoIcon,
  components: {
    preview: (props) => {
      const { title } = props;

      if (!title) {
        return null;
      }

      return (
        <ReactPlayer
          src={title.toString()}
          style={{
            width: '100%',
            height: 'auto',
            aspectRatio: '16/9',
          }}
        />
      );
    },
  },
  fields: [
    defineField({
      name: 'url',
      title: 'YouTube Video URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
    prepare: ({ url }) => {
      return {
        title: url,
      };
    },
  },
});
