import { isEnrolledInTraining } from "@/sanity/lib/student/isEnrolledInTraining";
import { getStudentByClerkId } from "@/sanity/lib/student/getStudentByClerkId";
import getTrainingById from '@/sanity/lib/trainings/getTrainingById';

interface AuthResult {
  isAuthorized: boolean;
  redirect?: string;
  studentId?: string;
}

export async function checkTrainingAccess(
  clerkId: string | null,
  trainingId: string
): Promise<AuthResult> {
  if (!clerkId) {
    return {
      isAuthorized: false,
      redirect: "/",
    };
  }

  const student = await getStudentByClerkId(clerkId);
  if (!student?.data?._id) {
    return {
      isAuthorized: false,
      redirect: "/",
    };
  }

  const isEnrolled = await isEnrolledInTraining(clerkId, trainingId);
  const training = await getTrainingById(trainingId);
  if (!isEnrolled) {
    return {
      isAuthorized: false,
      redirect: `/training/${training?.slug?.current}`,
    };
  }

  return {
    isAuthorized: true,
    studentId: student.data._id,
  };
}