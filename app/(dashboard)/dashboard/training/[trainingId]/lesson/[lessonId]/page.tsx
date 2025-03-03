import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { getLessonById } from '@/sanity/lib/lessons/getLessonById';
import { LessonCompleteButton } from '@/components/LessonCompleteButton';
import RenderBodyContent from '@/components/RenderBodyContent';

interface LessonPageProps {
  params: Promise<{
    trainingId: string;
    lessonId: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const user = await currentUser();
  const { trainingId, lessonId } = await params;

  const lesson = await getLessonById(lessonId);

  if (!lesson) {
    return redirect(`/dashboard/training/${trainingId}`);
  }

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto pt-12 pb-20 px-4">
          <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>

          {lesson.description && (
            <p className="text-muted-foreground mb-8">{lesson.description}</p>
          )}

          <div className="space-y-8">
            {/* Lesson Content */}
            {lesson.content && (
              <div>
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <RenderBodyContent lesson={lesson} />
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <LessonCompleteButton lessonId={lesson._id} clerkId={user!.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
