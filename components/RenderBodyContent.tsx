'use client';

import { useEffect, useRef } from 'react';
import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';
import Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';

interface CodeProps {
  value: {
    language: string;
    code: string;
  };
}

interface YouTubeProps {
  value: {
    url: string;
  };
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [language, code]);

  return (
    <pre>
      <code
        ref={codeRef}
        className={`language-${language}`}
        data-prismjs-copy="Copy"
      >
        {code}
      </code>
    </pre>
  );
}

const ClientOnlyCodeBlock = dynamic(() => Promise.resolve(CodeBlock), {
  ssr: false,
});

const components = {
  types: {
    code: (props: CodeProps) => {
      const { language, code } = props.value;
      return <ClientOnlyCodeBlock language={language} code={code} />;
    },
    youtube: (props: YouTubeProps) => {
      const { url } = props.value;
      return (
        <ReactPlayer
          src={url}
          style={{
            width: '100%',
            height: 'auto',
            aspectRatio: '16/9',
          }}
        />
      );
    },
  },
};

export default function RenderBodyContent({
  content,
}: {
  content: TypedObject[];
}) {
  if (!content) {
    return null;
  }

  return <PortableText value={content} components={components} />;
}
