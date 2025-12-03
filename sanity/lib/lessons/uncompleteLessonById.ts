import { client } from '../adminClient';
import { getUserByClerkId } from '@/sanity/lib/users/users';

interface UncompleteLessonParams {
  lessonId: string;
  clerkId: string;
}

export async function uncompleteLessonById({
  lessonId,
  clerkId,
}: UncompleteLessonParams) {
  // Get Sanity student ID from Clerk ID
  const student = await getUserByClerkId(clerkId);

  if (!student?._id) {
    throw new Error('Student not found');
  }

  // Find and delete the lesson completion record
  await client.delete({
    query: `*[_type == "lessonCompletion" && student._ref == $studentId && lesson._ref == $lessonId][0]`,
    params: { studentId: student._id, lessonId },
  });
}
