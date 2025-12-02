'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Library, PlayCircle, X, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  GetTrainingByIdQueryResult,
  GetCompletionsQueryResult,
} from '@/sanity.types';
import DarkModeToggle from '../DarkModeToggle';
import { TrainingProgress } from '@/components/TrainingProgress';

interface SidebarContentProps {
  training: NonNullable<GetTrainingByIdQueryResult>;
  completedLessons: GetCompletionsQueryResult['completedLessons'];
  openModules: string[];
  setOpenModules: (value: string[]) => void;
  progress: number;
  pathname: string | null;
  close: () => void;
}

export const SidebarContent = ({
  training,
  completedLessons,
  openModules,
  setOpenModules,
  progress,
  pathname,
  close,
}: SidebarContentProps) => (
  <div className="h-full flex flex-col">
    <div className="p-4 lg:p-6 border-b flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <Link
          href="/my-trainings"
          className="flex items-center gap-x-2 text-sm hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <div className="flex items-center gap-x-2">
            <Library className="h-4 w-4" />
            <span>Training Library</span>
          </div>
        </Link>
        <div className="space-x-2">
          <DarkModeToggle />

          <Button
            onClick={close}
            variant="ghost"
            className="lg:hidden -mr-2"
            size="icon"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-semibold text-2xl">{training.title}</h1>
        <TrainingProgress
          progress={progress}
          variant="success"
          label="Training Progress"
        />
      </div>
    </div>
    <ScrollArea className="flex-1">
      <div className="p-2 lg:p-4">
        <Accordion
          type="multiple"
          className="w-full space-y-4"
          value={openModules}
          onValueChange={setOpenModules}
        >
          {training.modules?.map((module, moduleIndex) => (
            <AccordionItem
              key={module._id}
              value={module._id}
              className={cn(
                'border-none',
                moduleIndex % 2 === 0 ? 'bg-muted/30' : 'bg-background',
              )}
            >
              <AccordionTrigger className="px-2 py-2 hover:no-underline transition-colors">
                <div className="flex items-center gap-x-2 lg:gap-x-4 w-full">
                  <span className="text-sm font-medium text-muted-foreground min-w-[28px]">
                    {String(moduleIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-y-1 text-left flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {module.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {module.lessons?.length || 0} lessons
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <div className="flex flex-col space-y-1">
                  {module.lessons?.map((lesson, lessonIndex) => {
                    const isActive =
                      pathname ===
                      `/dashboard/training/${training._id}/lesson/${lesson._id}`;
                    const isCompleted = completedLessons.some(
                      (completion) => completion.lesson?._id === lesson._id,
                    );

                    return (
                      <Link
                        key={lesson._id}
                        prefetch={false}
                        href={`/dashboard/training/${training._id}/lesson/${lesson._id}`}
                        onClick={close}
                        className={cn(
                          'flex items-center pl-8 lg:pl-10 pr-2 lg:pr-4 py-2 gap-x-2 lg:gap-x-4 group hover:bg-muted/50 transition-colors relative',
                          isActive && 'bg-muted',
                          isCompleted && 'text-muted-foreground',
                        )}
                      >
                        <span className="text-xs font-medium text-muted-foreground min-w-[28px]">
                          {String(lessonIndex + 1).padStart(2, '0')}
                        </span>
                        {isCompleted ? (
                          <Check className="h-4 w-4 shrink-0 text-green-500" />
                        ) : (
                          <PlayCircle
                            className={cn(
                              'h-4 w-4 shrink-0',
                              isActive
                                ? 'text-primary'
                                : 'text-muted-foreground group-hover:text-primary/80',
                            )}
                          />
                        )}
                        <span
                          className={cn(
                            'text-sm line-clamp-2 min-w-0',
                            isCompleted &&
                              'text-muted-foreground line-through decoration-green-500/50',
                          )}
                        >
                          {lesson.title}
                        </span>
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-8 bg-primary" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollArea>
  </div>
);
