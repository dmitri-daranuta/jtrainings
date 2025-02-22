import { defineQuery } from "groq";
import { sanityFetch } from "../live";

export async function getLessonCompletions(
  studentId: string,
  trainingId: string
) {
  const getCompletionsQuery = defineQuery(`{
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
    query: getCompletionsQuery,
    params: { studentId, trainingId },
  });

  const { training, completedLessons } = result.data;

  // Calculate module progress
  const moduleProgress = training?.modules?.map((module) => {
    const totalLessons = module.lessons?.length || 0;
    const completedInModule = completedLessons.filter(
      (completion) => completion.module?._id === module._id
    ).length;

    return {
      moduleId: module._id,
      title: module.title,
      progress: totalLessons > 0 ? (completedInModule / totalLessons) * 100 : 0,
      completedLessons: completedInModule,
      totalLessons,
    };
  });

  // Calculate overall training progress
  const totalLessons =
    training?.modules?.reduce(
      (acc, module) => acc + (module?.lessons?.length || 0),
      0
    ) || 0;

  const totalCompleted = completedLessons?.length || 0;
  const trainingProgress =
    totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0;

  return {
    completedLessons: completedLessons || [],
    moduleProgress: moduleProgress || [],
    trainingProgress,
  };
}