'use server';

import getTrainingById from '@/sanity/lib/trainings/getTrainingById';
import { createStudentIfNotExists } from '@/sanity/lib/student/createStudentIfNotExists';
import { clerkClient } from '@clerk/nextjs/server';
import { createEnrollment } from '@/sanity/lib/student/createEnrollment';

export async function enrollTraining(trainingId: string, userId: string) {
  try {
    // Query training details from Sanity.
    const training = await getTrainingById(trainingId);
    const clerkUser = await (await clerkClient()).users.getUser(userId);
    const { emailAddresses, firstName, lastName, imageUrl } = clerkUser;
    const email = emailAddresses[0]?.emailAddress;

    if (!emailAddresses || !email) {
      throw new Error('User details not found');
    }

    if (!training) {
      throw new Error('Training not found');
    }

    // Create a user in sanity if it doesn't exist.
    const user = await createStudentIfNotExists({
      clerkId: userId,
      email: email || '',
      firstName: firstName || email,
      lastName: lastName || '',
      imageUrl: imageUrl || '',
    });

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
