import { defineField, defineType } from 'sanity';
import { VideoIcon } from 'lucide-react';
import ReactPlayer from 'react-player/youtube';

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

      return <ReactPlayer url={title.toString()} />
    }
  },
  fields: [
    defineField({
      name: 'url',
      title: 'YouTube Video URL',
      type: 'url',
    })
  ],
  preview: {
    select: {
      url: 'url',
    },
    prepare: ({ url }) => {
      return {
        title: url,
      }
    },
  },
})