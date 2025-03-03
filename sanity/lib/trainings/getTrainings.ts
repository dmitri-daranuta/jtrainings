import { sanityFetch } from '../live';
import { defineQuery } from 'groq';

export async function getTrainings() {
  const getTrainingsQuery = defineQuery(`*[_type == "training"] {
    ...,
    "slug": slug.current,
    "category": category->{...},
    "instructor": instructor->{...}
  }`);

  const trainings = await sanityFetch({ query: getTrainingsQuery });
  return trainings.data;
}
