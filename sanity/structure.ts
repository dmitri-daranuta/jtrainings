import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Admin Dashboard')
    .items([
      S.listItem()
        .title('Trainings')
        .child(
          S.documentTypeList('training')
            .title('Trainings')
            .child((trainingId) =>
              S.list()
                .title('Training Options')
                .items([
                  // Options to edit training content
                  S.listItem()
                    .title('Edit Training Content')
                    .child(
                      S.document()
                        .schemaType('training')
                        .documentId(trainingId),
                    ),
                  S.listItem()
                    .title('View Students')
                    .child(
                      S.documentList()
                        .title('Training Enrollments')
                        .apiVersion('v2025-02-18')
                        .filter(
                          '_type == "enrollment" && training._ref == $trainingId',
                        )
                        .params({ trainingId }),
                    ),
                ]),
            ),
        ),

      S.divider(),

      // Users
      S.listItem()
        .title('User Management')
        .child(
          S.list()
            .title('Select a Type of User')
            .items([
              // Instructors with options
              S.listItem()
                .title('Instructors')
                .schemaType('instructor')
                .child(
                  S.documentTypeList('instructor')
                    .title('Instructors')
                    .child((instructorId) =>
                      S.list()
                        .title('Instructor Options')
                        .items([
                          // Option to edit instructor details
                          S.listItem()
                            .title('Edit Instructor Details')
                            .child(
                              S.document()
                                .schemaType('instructor')
                                .documentId(instructorId),
                            ),
                          // Option to view instructor's trainings
                          S.listItem()
                            .title('View Trainings')
                            .child(
                              S.documentList()
                                .title("Instructor's Trainings")
                                .apiVersion('v2025-02-18')
                                .filter(
                                  '_type == "training" && instructor._ref == $instructorId',
                                )
                                .params({ instructorId }),
                            ),
                        ]),
                    ),
                ),
              // Students with options
              S.listItem()
                .title('Students')
                .schemaType('student')
                .child(
                  S.documentTypeList('student')
                    .title('Students')
                    .child((studentId) =>
                      S.list()
                        .title('Student Options')
                        .items([
                          // Option to edit student details
                          S.listItem()
                            .title('Edit Student Details')
                            .child(
                              S.document()
                                .schemaType('student')
                                .documentId(studentId),
                            ),
                          // Option to view enrollments
                          S.listItem()
                            .title('View Enrollments')
                            .child(
                              S.documentList()
                                .title('Student Enrollments')
                                .apiVersion('v2025-02-18')
                                .filter(
                                  '_type == "enrollment" && student._ref == $studentId',
                                )
                                .params({ studentId }),
                            ),
                          // Option to view completed lessons
                          S.listItem()
                            .title('View Completed Lessons')
                            .child(
                              S.documentList()
                                .title('Completed Lessons')
                                .apiVersion('v2025-02-18')
                                .schemaType('lessonCompletion')
                                .filter(
                                  '_type == "lessonCompletion" && student._ref == $studentId',
                                )
                                .params({ studentId })
                                .defaultOrdering([
                                  { field: 'completedAt', direction: 'desc' },
                                ]),
                            ),
                        ]),
                    ),
                ),
            ]),
        ),

      S.divider(),

      // System Management
      S.listItem()
        .title('System Management')
        .child(
          S.list()
            .title('System Management')
            .items([S.documentTypeListItem('category').title('Categories')]),
        ),
    ]);
