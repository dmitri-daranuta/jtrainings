import { defineQuery } from "groq";
import { sanityFetch } from "../live";

export async function getEnrolledTrainings(clerkId: string) {
  const getEnrolledTrainingsQuery =
    defineQuery(`*[_type == "student" && clerkId == $clerkId][0] {
    "enrolledTrainings": *[_type == "enrollment" && student._ref == ^._id] {
      ...,
      "training": training-> {
        ...,
        "slug": slug.current,
        "category": category->{...},
        "instructor": instructor->{...}
      }
    }
  }`);

  const result = await sanityFetch({
    query: getEnrolledTrainingsQuery,
    params: { clerkId },
  });

  return result?.data?.enrolledTrainings || [];
}