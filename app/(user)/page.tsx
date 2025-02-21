import Hero from '@/components/Hero';
import { getTrainings } from '@/sanity/lib/trainings/getTrainings';
import { TrainingCard } from '@/components/TrainingCard';

export default async function Home() {
  const trainings = await getTrainings();

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Trainings Grid */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
          <span className="text-sm font-medium text-muted-foreground">
            Featured Trainings
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
        </div>

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
