import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import getTrainingById from '@/sanity/lib/trainings/getTrainingById';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { getTrainingProgress } from '@/sanity/lib/lessons/getTrainingProgress';
import { checkTrainingAccess } from '@/lib/auth';

interface TrainingLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    trainingId: string;
  }>;
}

export default async function TrainingLayout({
  children,
  params,
}: TrainingLayoutProps) {
  const user = await currentUser();
  const { trainingId } = await params;

  if (!user?.id) {
    return redirect('/');
  }

  const authResult = await checkTrainingAccess(user?.id || null, trainingId);
  if (!authResult.isAuthorized || !user?.id) {
    return redirect(authResult.redirect!);
  }

  const [training, progress] = await Promise.all([
    getTrainingById(trainingId),
    getTrainingProgress(user.id, trainingId),
  ]);

  if (!training) {
    return redirect('/my-trainings');
  }

  return (
    <div className="h-full">
      <Sidebar
        training={training}
        completedLessons={progress.completedLessons}
      />
      <main className="h-full lg:pt-[64px] pl-20 lg:pl-96">{children}</main>
    </div>
  );
}
