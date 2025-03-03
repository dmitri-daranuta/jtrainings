import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import EnrollButton from '@/components/EnrollButton';
import getTrainingBySlug from '@/sanity/lib/trainings/getTrainingBySlug';
import { isEnrolledInTraining } from '@/sanity/lib/student/isEnrolledInTraining';
import { auth } from '@clerk/nextjs/server';

interface TrainingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TrainingPage({ params }: TrainingPageProps) {
  const { slug } = await params;
  const training = await getTrainingBySlug(slug);
  const { userId } = await auth();

  const isEnrolled =
    userId && training?._id
      ? await isEnrolledInTraining(userId, training._id)
      : false;

  if (!training) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold">Training not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        {training.image && (
          <Image
            src={urlFor(training.image).url() || ''}
            alt={training.title || 'Training Title'}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/60" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-12">
          <Link
            href="/"
            prefetch={false}
            className="text-white mb-8 flex items-center hover:text-primary transition-colors w-fit"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Trainings
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                  {training.category?.name || 'Uncategorized'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {training.title}
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                {training.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-lg p-6 mb-8 border border-border">
              <h2 className="text-2xl font-bold mb-4">Training Content</h2>
              <div className="space-y-4">
                {training.modules?.map((module, index) => (
                  <div
                    key={module._id}
                    className="border border-border rounded-lg"
                  >
                    <div className="p-4 border-b border-border">
                      <h3 className="font-medium">
                        Module {index + 1}: {module.title}
                      </h3>
                    </div>
                    <div className="divide-y divide-border">
                      {module.lessons?.map((lesson, lessonIndex) => (
                        <div
                          key={lesson._id}
                          className="p-4 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                              {lessonIndex + 1}
                            </div>
                            <div className="flex items-center gap-3 text-foreground">
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">
                                {lesson.title}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-card rounded-lg p-6 sticky top-4 border border-border">
              <EnrollButton trainingId={training._id} isEnrolled={isEnrolled} />
              {training.instructor && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Instructor</h2>
                  <div className="flex items-center gap-3 mb-4">
                    {training.instructor.photo && (
                      <div className="relative h-12 w-12">
                        <Image
                          src={urlFor(training.instructor.photo).url() || ''}
                          alt={
                            training.instructor.name || 'Training Instructor'
                          }
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-medium">
                        {training.instructor.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Instructor
                      </div>
                    </div>
                  </div>
                  {training.instructor.bio && (
                    <p className="text-muted-foreground">
                      {training.instructor.bio}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
