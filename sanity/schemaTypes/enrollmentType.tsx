import Image from "next/image";
import { defineField, defineType } from "sanity";

export const enrollmentType = defineType({
  name: "enrollment",
  title: "Enrollment",
  type: "document",
  fields: [
    defineField({
      name: "student",
      title: "Student",
      type: "reference",
      to: [{ type: "student" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "training",
      title: "Training",
      type: "reference",
      to: [{ type: "training" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "enrolledAt",
      title: "Enrolled At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      trainingTitle: "training.title",
      trainingImage: "training.image.asset",
      strainingCategory: "training.category.name",
      studentFirstName: "student.firstName",
      studentLastName: "student.lastName",
      studentImage: "student.imageUrl",
    },
    prepare({ trainingTitle, trainingImage, strainingCategory, studentFirstName, studentLastName, studentImage }) {
      const isTrainingContentView = parent.location.pathname.includes('trainingContent');
      return {
        title: !isTrainingContentView ? trainingTitle : `${studentFirstName} ${studentLastName}`,
        subtitle: isTrainingContentView ? trainingTitle : strainingCategory,
        media: !isTrainingContentView ? trainingImage : (
          <Image
            src={studentImage}
            alt={`${studentFirstName} ${studentLastName}`}
            width={100}
            height={100}
          />
        ),
      };
    },
  },
});