import { sanityFetch } from "../live";
import { defineQuery } from "groq";

async function getTrainingById(id: string) {
  const getTrainingByIdQuery =
    defineQuery(`*[_type == "training" && _id == $id][0] {
      ...,  // Spread all course fields
      "category": category->{...},  // Expand the category reference, including all its fields
      "instructor": instructor->{...},  // Expand the instructor reference, including all its fields
      "modules": modules[]-> {  // Expand the array of module references
        ...,  // Include all module fields
        "lessons": lessons[]-> {...}  // For each module, expand its array of lesson references
      }
    }`);

  const training = await sanityFetch({
    query: getTrainingByIdQuery,
    params: { id },
  });

  // Return just the data portion of the response
  return training.data;
}

export default getTrainingById;