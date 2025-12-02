'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Library, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
  GetTrainingByIdQueryResult,
  GetCompletionsQueryResult,
  Module,
} from '@/sanity.types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { calculateTrainingProgress } from '@/lib/trainingProgress';
import { useSidebar } from '@/components/providers/SidebarProvider';
import { SidebarContent } from './SidebarContent';

interface SidebarProps {
  training: GetTrainingByIdQueryResult;
  completedLessons?: GetCompletionsQueryResult['completedLessons'];
}

export function Sidebar({ training, completedLessons = [] }: SidebarProps) {
  const pathname = usePathname();
  const { isOpen, toggle, close } = useSidebar();

  const getInitialOpenModules = () => {
    if (!pathname || !training?.modules) {
      return [];
    }

    const currentModuleId = training.modules.find((module) =>
      module.lessons?.some(
        (lesson) =>
          pathname ===
          `/dashboard/training/${training._id}/lesson/${lesson._id}`,
      ),
    )?._id;

    // Return an array containing only the current module ID, or an empty array.
    return currentModuleId ? [currentModuleId] : [];
  };

  // This runs ONLY on the initial render (client-side for Next.js router data).
  const [openModules, setOpenModules] = useState<string[]>(
    getInitialOpenModules,
  );

  if (!training) {
    return null;
  }

  const progress = calculateTrainingProgress(
    training.modules as unknown as Module[],
    completedLessons,
  );

  return (
    <>
      {/* Thin Mobile Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 flex flex-col items-center w-[60px] border-r bg-background lg:hidden py-4 gap-y-4">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/" prefetch={false}>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Library className="h-5 w-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Training Library</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={toggle}
                variant="ghost"
                size="icon"
                className="h-10 w-10"
              >
                <ChevronRight
                  className={cn(
                    'h-5 w-5 transition-transform',
                    isOpen && 'rotate-180',
                  )}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Toggle Sidebar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </aside>

      {/* Main Sidebar - Desktop & Mobile */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 bg-background transition-all duration-300 ease-in-out',
          'lg:z-50 lg:block lg:w-96 lg:border-r',
          isOpen
            ? 'w-[calc(100%-60px)] translate-x-[60px] lg:translate-x-0 lg:w-96'
            : 'translate-x-[-100%] lg:translate-x-0',
        )}
      >
        <div className="h-full">
          <SidebarContent
            training={training}
            completedLessons={completedLessons}
            openModules={openModules}
            setOpenModules={setOpenModules}
            progress={progress}
            pathname={pathname}
            close={close}
          />
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={close}
        />
      )}
    </>
  );
}
