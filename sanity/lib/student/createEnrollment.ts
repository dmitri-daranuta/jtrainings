import { client } from '../adminClient';

interface CreateEnrollmentParams {
  studentId: string;
  trainingId: string;
}

export async function createEnrollment({
  studentId,
  trainingId,
}: CreateEnrollmentParams) {
  return client.create({
    _type: 'enrollment',
    student: {
      _type: 'reference',
      _ref: studentId,
    },
    training: {
      _type: 'reference',
      _ref: trainingId,
    },
    enrolledAt: new Date().toISOString(),
  });
}
