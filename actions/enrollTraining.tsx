'use server';

import getTrainingById from '@/sanity/lib/trainings/getTrainingById';
import { createEnrollment } from '@/sanity/lib/student/createEnrollment';
import { getUserByClerkId } from '@/sanity/lib/users/users';

export async function enrollTraining(trainingId: string, userId: string) {
  try {
    // Query training details from Sanity.
    const training = await getTrainingById(trainingId);
    const user = await getUserByClerkId(userId);

    if (!training) {
      throw new Error('Training not found');
    }

    if (!user) {
      throw new Error('User not found');
    }

    await createEnrollment({
      studentId: user._id,
      trainingId: training._id,
    });

    return { url: `/training/${training.slug?.current}` };
  } catch (error) {
    console.error('Error in enrollTraining:', error);
    throw new Error('Failed to enroll training.');
  }
}
