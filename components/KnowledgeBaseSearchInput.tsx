'use client';

import Form from 'next/form';
import { ChevronDownIcon, Search } from 'lucide-react';
import { TYPES } from '@/sanity/schemaTypes/postType';

export default function KnowledgeBaseSearchInput() {
  return (
    <Form action="/kb/search" className="w-full p-14">
      <div
        className="flex rounded-full items-center h-14 bg-secondary outline-1 outline-offset-1 outline
        has-[input:focus-within]:outline-2
        has-[input:focus-within]:-outline-offset-2
        has-[select:focus-within]:outline-2
        has-[select:focus-within]:-outline-offset-2"
      >
        <div className="grid shrink-0 grid-cols-1">
          <select
            name="t"
            aria-label="Type"
            className="col-start-1 row-start-1 w-full h-14 appearance-none rounded-l-full py-1.5 pr-7 pl-3 text-base text-center border-0 text-gray-900 focus:bg-neutral-200 focus:outline-none placeholder:text-gray-400 sm:text-sm/6"
          >
            <option value="all">All</option>
            {TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.title}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-900 sm:size-4"
          />
        </div>
        <input
          name="s"
          type="text"
          placeholder="Search..."
          className="rounded-r-full h-14 block min-w-0 grow py-1.5 pr-3 pl-1 text-base bg-secondary placeholder:text-gray-400 focus:outline-none focus:ring-primary sm:text-sm/6"
        />
        <Search
          size={30}
          className="col-start-1 row-start-1 self-center text-muted-foreground pr-2.5"
        />
      </div>
    </Form>
  );
}
