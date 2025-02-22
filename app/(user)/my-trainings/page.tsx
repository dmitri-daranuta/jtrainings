import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getEnrolledTrainings } from "@/sanity/lib/student/getEnrolledTrainings";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { getTrainingProgress } from "@/sanity/lib/lessons/getTrainingProgress";
import { TrainingCard } from "@/components/TrainingCard";

export default async function MyTrainingsPage() {
  const user = await currentUser();

  if (!user?.id) {
    return redirect("/");
  }

  const enrolledTrainings = await getEnrolledTrainings(user.id);

  // Get progress for each enrolled training.
  const trainingsWithProgress = await Promise.all(
    enrolledTrainings.map(async ({ training }) => {
      if (!training) return null;
      const progress = await getTrainingProgress(user.id, training._id);
      return {
        training,
        progress: progress.trainingProgress,
      };
    })
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <GraduationCap className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">My Trainings</h1>
      </div>

      {enrolledTrainings.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No trainings yet</h2>
          <p className="text-muted-foreground mb-8">
            You haven&apos;t enrolled in any trainings yet. Browse our trainings
            to get started!
          </p>
          <Link
            href="/"
            prefetch={false}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Browse trainings
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingsWithProgress.map((item) => {
            if (!item || !item.training) return null;

            return (
              <TrainingCard
                key={item.training._id}
                training={item.training}
                progress={item.progress}
                href={`/dashboard/training/${item.training._id}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}