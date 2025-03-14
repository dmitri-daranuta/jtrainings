'use client';

import Link from 'next/link';

export default function SocialShareButtons({ title }: { title: string }) {
  const url = window.location.href;

  return (
    <div className="sharing-buttons flex flex-wrap justify-center">
      <Link
        className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-full text-white border-gray-600 bg-gray-600 hover:bg-gray-700 hover:border-gray-700"
        target="_blank"
        rel="noopener"
        href={`https://facebook.com/sharer/sharer.php?u=${url}`}
        aria-label="Share on Facebook"
      >
        <svg
          aria-hidden="true"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4"
        >
          <title>Share on Facebook</title>
          <path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z"></path>
        </svg>
      </Link>
      <Link
        className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-full text-white border-gray-600 bg-gray-600 hover:bg-gray-700 hover:border-gray-700"
        target="_blank"
        rel="noopener"
        href={`https://twitter.com/intent/tweet?url=${url}&amp;text=${title}`}
        aria-label="Share on Twitter"
      >
        <svg
          aria-hidden="true"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4"
        >
          <title>Share on Twitter</title>
          <path d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z"></path>
        </svg>
      </Link>
      <Link
        className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-full text-white border-gray-600 bg-gray-600 hover:bg-gray-700 hover:border-gray-700"
        target="_blank"
        rel="noopener"
        href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;title=${title}&amp;summary=${title}&amp;source=${url}`}
        aria-label="Share on Linkedin"
        draggable="false"
      >
        <svg
          aria-hidden="true"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4"
        >
          <title>Share on Linkedin</title>
          <path d="M136 183v283H42V183h94zm6-88c1 27-20 49-53 49-32 0-52-22-52-49 0-28 21-49 53-49s52 21 52 49zm333 208v163h-94V314c0-38-13-64-47-64-26 0-42 18-49 35-2 6-3 14-3 23v158h-94V183h94v41c12-20 34-48 85-48 62 0 108 41 108 127z"></path>
        </svg>
      </Link>
      <Link
        className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-full text-white border-gray-600 bg-gray-600 hover:bg-gray-700 hover:border-gray-700"
        target="_blank"
        rel="noopener"
        href={`https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=${title}&amp;caption=${title}&amp;content=${url}&amp;canonicalUrl=${url}&amp;shareSource=tumblr_share_button`}
        aria-label="Share on Tumblr"
        draggable="false"
      >
        <svg
          aria-hidden="true"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4"
        >
          <title>Share on Tumblr</title>
          <path d="M406 480c-14 15-50 32-98 32-120 0-147-89-147-141V227h-47c-6 0-10-4-10-10v-68c0-7 4-13 11-16 62-21 82-76 85-117 0-11 6-16 16-16h71c5 0 10 4 10 10v115h83c5 0 10 5 10 10v82c0 5-5 10-10 10h-84v133c0 34 24 54 68 36 5-2 9-3 13-2 3 1 6 3 7 8l22 64c2 5 4 10 0 14z"></path>
        </svg>
      </Link>
      <Link
        className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-full text-white border-gray-600 bg-gray-600 hover:bg-gray-700 hover:border-gray-700"
        target="_blank"
        rel="noopener"
        href={`https://pinterest.com/pin/create/button/?url=${url}&amp;media=${url}&amp;description=${title}`}
        aria-label="Share on Pinterest"
        draggable="false"
      >
        <svg
          aria-hidden="true"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4"
        >
          <title>Share on Pinterest</title>
          <path d="M268 6C165 6 64 75 64 186c0 70 40 110 64 110 9 0 15-28 15-35 0-10-24-30-24-68 0-81 62-138 141-138 68 0 118 39 118 110 0 53-21 153-90 153-25 0-46-18-46-44 0-38 26-74 26-113 0-67-94-55-94 25 0 17 2 36 10 51-14 60-42 148-42 209 0 19 3 38 4 57 4 3 2 3 7 1 51-69 49-82 72-173 12 24 44 36 69 36 106 0 154-103 154-196C448 71 362 6 268 6z"></path>
        </svg>
      </Link>
      <Link
        className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-full text-white border-gray-600 bg-gray-600 hover:bg-gray-700 hover:border-gray-700"
        target="_blank"
        rel="noopener"
        href={`https://reddit.com/submit/?url=${url}&amp;resubmit=true&amp;title=${title}`}
        aria-label="Share on Reddit"
        draggable="false"
      >
        <svg
          aria-hidden="true"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4"
        >
          <title>Share on Reddit</title>
          <path d="M440 204c-15 0-28 6-38 15-35-24-83-40-137-42l28-125 88 20c0 22 18 39 39 39 22 0 40-18 40-39s-17-40-40-40c-15 0-28 9-35 22l-97-22c-5-1-10 3-11 7l-31 138c-53 2-100 18-136 43a53 53 0 0 0-38-16c-56 0-74 74-23 100l-3 24c0 84 95 152 210 152 117 0 211-68 211-152 0-8-1-17-3-25 50-25 32-99-24-99zM129 309a40 40 0 1 1 80 0 40 40 0 0 1-80 0zm215 93c-37 37-139 37-176 0-4-3-4-9 0-13s10-4 13 0c28 28 120 29 149 0 4-4 10-4 14 0s4 10 0 13zm-1-54c-22 0-39-17-39-39a39 39 0 1 1 39 39z"></path>
        </svg>
      </Link>
    </div>
  );
}
