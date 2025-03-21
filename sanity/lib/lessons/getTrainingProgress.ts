import { defineQuery } from 'groq';
import { sanityFetch } from '../live';
import { Module } from '@/sanity.types';
import { calculateTrainingProgress } from '@/lib/trainingProgress';
import { getUserByClerkId } from '@/sanity/lib/users/users';

export async function getTrainingProgress(clerkId: string, trainingId: string) {
  // First get the student's Sanity ID
  const student = await getUserByClerkId(clerkId);

  if (!student?._id) {
    throw new Error('Student not found');
  }

  const progressQuery = defineQuery(`{
    "completedLessons": *[_type == "lessonCompletion" && student._ref == $studentId && training._ref == $trainingId] {
      ...,
      "lesson": lesson->{...},
      "module": module->{...}
    },
    "training": *[_type == "training" && _id == $trainingId][0] {
      ...,
      "modules": modules[]-> {
        ...,
        "lessons": lessons[]-> {...}
      }
    }
  }`);

  const result = await sanityFetch({
    query: progressQuery,
    params: { studentId: student._id, trainingId },
  });

  const { completedLessons = [], training } = result.data;

  // Calculate overall training progress
  const trainingProgress = calculateTrainingProgress(
    (training?.modules as unknown as Module[]) || null,
    completedLessons,
  );

  return {
    completedLessons,
    trainingProgress,
  };
}
