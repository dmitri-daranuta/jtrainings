import getTrainingById from "@/sanity/lib/trainings/getTrainingById";
import { redirect } from "next/navigation";

interface TrainingPageProps {
  params: Promise<{
    trainingId: string;
  }>;
}

export default async function TrainingPage({ params }: TrainingPageProps) {
  const { trainingId } = await params;
  const training = await getTrainingById(trainingId);

  if (!training) {
    return redirect("/");
  }

  // Redirect to the first lesson of the first module if available
  if (training.modules?.[0]?.lessons?.[0]?._id) {
    return redirect(
      `/dashboard/training/${trainingId}/lesson/${training.modules[0].lessons[0]._id}`
    );
  }

  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Welcome to {training.title}</h2>
        <p className="text-muted-foreground">
          This training has no content yet. Please check back later.
        </p>
      </div>
    </div>
  );
}