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

const components = {
  types: {
    code: (props) => {
      const {language, code} = props.value
      return (
        <>
          <pre>
            <code className={`language-${language}`} data-prismjs-copy="Copy">{code}</code>
          </pre>
        </>
      )
    }
  }
}

export default function RenderBodyContent({lesson}: { lesson: Lesson }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <PortableText value={lesson.content} components={components}/>
    </>
  )
}