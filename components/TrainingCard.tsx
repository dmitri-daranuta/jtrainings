'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';
import { Loader } from '@/components/ui/loader';
import { TrainingProgress } from '@/components/TrainingProgress';
import { GetTrainingsQueryResult } from '@/sanity.types';

interface TrainingCardProps {
  training: GetTrainingsQueryResult[number];
  progress?: number;
  href: string;
}

export function TrainingCard({ training, progress, href }: TrainingCardProps) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group hover:no-underline flex"
    >
      <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-4px] border border-border flex flex-col flex-1">
        <div className="relative h-52 w-full overflow-hidden">
          {training.image ? (
            <Image
              src={urlFor(training.image).url() || ''}
              alt={training.title || 'Training Image'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-muted">
              <Loader size="lg" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-sm font-medium px-3 py-1 bg-black/50 text-white rounded-full backdrop-blur-sm">
              {training.category?.name || 'Uncategorized'}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {training.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
            {training.description}
          </p>
          <div className="space-y-4 mt-auto">
            {training.instructor && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {training.instructor.photo ? (
                    <div className="relative h-8 w-8 mr-2">
                      <Image
                        src={urlFor(training.instructor.photo).url() || ''}
                        alt={training.instructor.name || 'Instructor'}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-8 w-8 mr-2 rounded-full bg-muted flex items-center justify-center">
                      <Loader size="sm" />
                    </div>
                  )}
                  <span className="text-sm text-muted-foreground">
                    by {training.instructor.name}
                  </span>
                </div>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
            {typeof progress === 'number' && (
              <TrainingProgress
                progress={progress}
                variant="default"
                size="sm"
                label="Training Progress"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
