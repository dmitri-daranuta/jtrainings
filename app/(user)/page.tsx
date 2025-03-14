import { Metadata } from 'next';
import { getTrainings } from '@/sanity/lib/trainings/getTrainings';
import Hero from '@/components/Hero';
import { TrainingCard } from '@/components/TrainingCard';
import { DividerWithText } from '@/components/DividerWithText';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Hands-On Trainings – Learn, Practice, and Master New Skills',
  description:
    'Boost your expertise with our hands-on trainings. Learn from structured courses, follow practical exercises, and gain real-world skills to advance your career.',
};

export default async function Home() {
  const trainings = await getTrainings();

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Trainings Grid */}
      <div className="container mx-auto px-4">
        <DividerWithText text="Featured Trainings" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {trainings.map((training) => (
            <TrainingCard
              key={training._id}
              training={training}
              href={`/training/${training.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
