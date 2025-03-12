import Hero from '@/components/Hero';
import { getTrainings } from '@/sanity/lib/trainings/getTrainings';
import { TrainingCard } from '@/components/TrainingCard';
import { DividerWithText } from '@/components/DividerWithText';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

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
