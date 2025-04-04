import groq from 'groq';
import { client } from '../adminClient';
import { sanityFetch } from '../live';
import { getUserByClerkId } from '@/sanity/lib/users/users';

export async function completeLessonById({
  lessonId,
  clerkId,
}: {
  lessonId: string;
  clerkId: string;
}) {
  try {
    // Get Sanity student ID from Clerk ID
    const student = await getUserByClerkId(clerkId);

    if (!student?._id) {
      throw new Error('Student not found');
    }

    const studentId = student._id;

    // Check if lesson is already completed
    const existingCompletion = await sanityFetch({
      query: groq`*[_type == "lessonCompletion" && student._ref == $studentId && lesson._ref == $lessonId][0]`,
      params: { studentId, lessonId },
    });

    if (existingCompletion.data) {
      return existingCompletion.data;
    }

    // Fetch lesson details to get module and training
    const lesson = await sanityFetch({
      query: groq`*[_type == "lesson" && _id == $lessonId][0]{
        _id,
        "module": *[_type == "module" && references(^._id)][0]{
          _id,
          "training": *[_type == "training" && references(^._id)][0]._id
        }
      }`,
      params: { lessonId },
    });

    if (!lesson?.data?.module?._id || !lesson?.data?.module?.training) {
      throw new Error('Could not find module or training for lesson');
    }

    // Create new completion record
    const completion = await client.create({
      _type: 'lessonCompletion',
      student: {
        _type: 'reference',
        _ref: studentId,
      },
      lesson: {
        _type: 'reference',
        _ref: lessonId,
      },
      module: {
        _type: 'reference',
        _ref: lesson.data.module._id,
      },
      training: {
        _type: 'reference',
        _ref: lesson.data.module.training,
      },
      completedAt: new Date().toISOString(),
    });

    return completion;
  } catch (error) {
    console.error('Error completing lesson:', error);
    throw error;
  }
}
