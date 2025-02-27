'use client';

import { useEffect } from "react";
import { PortableText } from '@portabletext/react';
import Prism from "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import { Lesson } from '@/sanity.types';
import ReactPlayer from 'react-player/youtube';

interface CodeProps {
  value: {
    language: string;
    code: string;
  };
}

interface YouTubeProps {
  value: {
    url: string
  }
}

const components = {
  types: {
    code: (props: CodeProps) => {
      const {language, code} = props.value
      return (
        <>
          <pre>
            <code className={`language-${language}`} data-prismjs-copy="Copy">{code}</code>
          </pre>
        </>
      )
    },
    youtube: (props: YouTubeProps) => {
      const {url} = props.value
      return <ReactPlayer url={url} />
    },
  }
}

export default function RenderBodyContent({lesson}: { lesson: Lesson }) {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (!lesson.content) {
    return null;
  }

  return (
    <>
      <PortableText value={lesson.content} components={components}/>
    </>
  )
}