'use client';

import Link from 'next/link';
import { GetCategoriesQueryResult } from '@/sanity.types';
import { PawPrint } from 'lucide-react';

interface CategoryCardProps {
  category: GetCategoriesQueryResult[number];
  href: string;
}

export function CategoryCard({ category, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="bg-card p-6 border rounded-lg shadow-sm hover:bg-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-4px]"
    >
      <div>
        <div className="relative h-52 w-full">
          <div className="h-full w-full flex items-center justify-center">
            <PawPrint size={100} />
          </div>
        </div>

        <h5 className="text-center mb-2 text-2xl font-bold">{category.name}</h5>
        <p className="text-muted-foreground font-normal">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
