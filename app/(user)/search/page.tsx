import { Search } from 'lucide-react';
import { searchTrainings } from '@/sanity/lib/trainings/searchTrainings';
import { TrainingCard } from '@/components/TrainingCard';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const term = (await searchParams).query ?? '';
  const decodedTerm = decodeURIComponent(term);
  const trainings = await searchTrainings(decodedTerm);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Search className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Search Results</h1>
          <p className="text-muted-foreground">
            Found {trainings.length} result{trainings.length === 1 ? '' : 's'}{' '}
            for &quot;{decodedTerm}&quot;
          </p>
        </div>
      </div>

      {trainings.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No trainings found</h2>
          <p className="text-muted-foreground mb-8">
            Try searching with different keywords
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training) => (
            <TrainingCard
              key={training._id}
              training={training}
              href={`/training/${training.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
