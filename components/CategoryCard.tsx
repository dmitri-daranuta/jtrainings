'use client';

import Link from 'next/link';
import { GetCategoriesQueryResult } from '@/sanity.types';
import { PawPrint } from 'lucide-react';
import * as SanityIcons from '@sanity/icons';
import * as LucideIcons from 'lucide-react';
import 'devicon/devicon.min.css';
import React from 'react';

interface CategoryCardProps {
  category: GetCategoriesQueryResult[number];
  href: string;
}

export function CategoryCard({ category, href }: CategoryCardProps) {
  const renderIcon = () => {
    const icon = category.icon;
    if (!icon?.name || !icon?.library) return <PawPrint size={100} />;

    switch (icon.library) {
      case 'sanity': {
        // @ts-ignore
        const Icon = SanityIcons[icon.name];
        return Icon ? (
          <Icon fontSize={100} color={icon?.color || undefined} />
        ) : (
          <PawPrint size={100} />
        );
      }
      case 'lucide': {
        // @ts-ignore
        const Icon = LucideIcons[icon.name];
        return Icon ? (
          <Icon size={100} color={icon?.color || undefined} />
        ) : (
          <PawPrint size={100} />
        );
      }
      case 'devicon': {
        return (
          <span
            className={`${icon.name}${icon?.colored ? ' colored' : ''}`}
            style={{
              fontSize: '100px',
              color: icon?.colored ? undefined : icon?.color || undefined,
            }}
          />
        );
      }
      default:
        return <PawPrint size={100} />;
    }
  };

  return (
    <Link
      href={href}
      className="bg-card p-6 border rounded-lg shadow-sm hover:bg-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-4px]"
    >
      <div>
        <div className="relative h-52 w-full">
          <div className="h-full w-full flex items-center justify-center">
            {renderIcon()}
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
