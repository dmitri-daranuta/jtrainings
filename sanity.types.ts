/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Youtube = {
  _type: 'youtube';
  url?: string;
};

export type Post = {
  _id: string;
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  description?: string;
  category: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'category';
  };
  content?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?:
          | 'normal'
          | 'h1'
          | 'h2'
          | 'h3'
          | 'h4'
          | 'h5'
          | 'h6'
          | 'blockquote';
        listItem?: 'bullet' | 'number';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | ({
        _key: string;
      } & Code)
    | ({
        _key: string;
      } & Youtube)
  >;
};

export type LessonCompletion = {
  _id: string;
  _type: 'lessonCompletion';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  student: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'student';
  };
  lesson: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'lesson';
  };
  module: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'module';
  };
  training: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'training';
  };
  completedAt: string;
};

export type Module = {
  _id: string;
  _type: 'module';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  lessons?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'lesson';
  }>;
};

export type Lesson = {
  _id: string;
  _type: 'lesson';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  description?: string;
  content?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?:
          | 'normal'
          | 'h1'
          | 'h2'
          | 'h3'
          | 'h4'
          | 'h5'
          | 'h6'
          | 'blockquote';
        listItem?: 'bullet' | 'number';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | ({
        _key: string;
      } & Code)
    | ({
        _key: string;
      } & Youtube)
  >;
};

export type Enrollment = {
  _id: string;
  _type: 'enrollment';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  student: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'student';
  };
  training: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'training';
  };
  enrolledAt?: string;
};

export type Training = {
  _id: string;
  _type: 'training';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  category: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'category';
  };
  modules?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'module';
  }>;
  instructor?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'instructor';
  };
};

export type Instructor = {
  _id: string;
  _type: 'instructor';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  bio?: string;
  photo?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Student = {
  _id: string;
  _type: 'student';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  firstName?: string;
  lastName?: string;
  email: string;
  clerkId: string;
  imageUrl?: string;
};

export type Category = {
  _id: string;
  _type: 'category';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  slug: Slug;
  description?: string;
};

export type Slug = {
  _type: 'slug';
  current: string;
  source?: string;
};

export type Code = {
  _type: 'code';
  language?: string;
  filename?: string;
  code?: string;
  highlightedLines?: Array<number>;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Youtube
  | Post
  | LessonCompletion
  | Module
  | Lesson
  | Enrollment
  | Training
  | Instructor
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Student
  | Category
  | Slug
  | Code;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/lessons/getLessonById.ts
// Variable: getLessonByIdQuery
// Query: *[_type == "lesson" && _id == $id][0] {    ...,    "module": module->{      ...,      "training": training->{...}    }  }
export type GetLessonByIdQueryResult = {
  _id: string;
  _type: 'lesson';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  description?: string;
  content?: Array<
    | ({
        _key: string;
      } & Code)
    | ({
        _key: string;
      } & Youtube)
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?:
          | 'blockquote'
          | 'h1'
          | 'h2'
          | 'h3'
          | 'h4'
          | 'h5'
          | 'h6'
          | 'normal';
        listItem?: 'bullet' | 'number';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
  >;
  module: null;
} | null;

// Source: sanity/lib/lessons/getLessonCompletionStatus.ts
// Variable: completionStatusQuery
// Query: *[_type == "lessonCompletion" && student._ref == $studentId && lesson._ref == $lessonId][0] {    ...  }
export type CompletionStatusQueryResult = {
  _id: string;
  _type: 'lessonCompletion';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  student: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'student';
  };
  lesson: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'lesson';
  };
  module: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'module';
  };
  training: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'training';
  };
  completedAt: string;
} | null;

// Source: sanity/lib/lessons/getLessonCompletions.ts
// Variable: getCompletionsQuery
// Query: {    "completedLessons": *[_type == "lessonCompletion" && student._ref == $studentId && training._ref == $trainingId] {      ...,      "lesson": lesson->{...},      "module": module->{...}    },    "training": *[_type == "training" && _id == $trainingId][0] {      ...,      "modules": modules[]-> {        ...,        "lessons": lessons[]-> {...}      }    }  }
export type GetCompletionsQueryResult = {
  completedLessons: Array<{
    _id: string;
    _type: 'lessonCompletion';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    student: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'student';
    };
    lesson: {
      _id: string;
      _type: 'lesson';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title: string;
      slug: Slug;
      description?: string;
      content?: Array<
        | ({
            _key: string;
          } & Code)
        | ({
            _key: string;
          } & Youtube)
        | {
            children?: Array<{
              marks?: Array<string>;
              text?: string;
              _type: 'span';
              _key: string;
            }>;
            style?:
              | 'blockquote'
              | 'h1'
              | 'h2'
              | 'h3'
              | 'h4'
              | 'h5'
              | 'h6'
              | 'normal';
            listItem?: 'bullet' | 'number';
            markDefs?: Array<{
              href?: string;
              _type: 'link';
              _key: string;
            }>;
            level?: number;
            _type: 'block';
            _key: string;
          }
      >;
    };
    module: {
      _id: string;
      _type: 'module';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title: string;
      lessons?: Array<{
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: 'lesson';
      }>;
    };
    training: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'training';
    };
    completedAt: string;
  }>;
  training: {
    _id: string;
    _type: 'training';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title: string;
    slug: Slug;
    description?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    };
    category: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'category';
    };
    modules: Array<{
      _id: string;
      _type: 'module';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title: string;
      lessons: Array<{
        _id: string;
        _type: 'lesson';
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
        title: string;
        slug: Slug;
        description?: string;
        content?: Array<
          | ({
              _key: string;
            } & Code)
          | ({
              _key: string;
            } & Youtube)
          | {
              children?: Array<{
                marks?: Array<string>;
                text?: string;
                _type: 'span';
                _key: string;
              }>;
              style?:
                | 'blockquote'
                | 'h1'
                | 'h2'
                | 'h3'
                | 'h4'
                | 'h5'
                | 'h6'
                | 'normal';
              listItem?: 'bullet' | 'number';
              markDefs?: Array<{
                href?: string;
                _type: 'link';
                _key: string;
              }>;
              level?: number;
              _type: 'block';
              _key: string;
            }
        >;
      }> | null;
    }> | null;
    instructor?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'instructor';
    };
  } | null;
};

// Source: sanity/lib/lessons/getTrainingProgress.ts
// Variable: progressQuery
// Query: {    "completedLessons": *[_type == "lessonCompletion" && student._ref == $studentId && training._ref == $trainingId] {      ...,      "lesson": lesson->{...},      "module": module->{...}    },    "training": *[_type == "training" && _id == $trainingId][0] {      ...,      "modules": modules[]-> {        ...,        "lessons": lessons[]-> {...}      }    }  }
export type ProgressQueryResult = {
  completedLessons: Array<{
    _id: string;
    _type: 'lessonCompletion';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    student: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'student';
    };
    lesson: {
      _id: string;
      _type: 'lesson';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title: string;
      slug: Slug;
      description?: string;
      content?: Array<
        | ({
            _key: string;
          } & Code)
        | ({
            _key: string;
          } & Youtube)
        | {
            children?: Array<{
              marks?: Array<string>;
              text?: string;
              _type: 'span';
              _key: string;
            }>;
            style?:
              | 'blockquote'
              | 'h1'
              | 'h2'
              | 'h3'
              | 'h4'
              | 'h5'
              | 'h6'
              | 'normal';
            listItem?: 'bullet' | 'number';
            markDefs?: Array<{
              href?: string;
              _type: 'link';
              _key: string;
            }>;
            level?: number;
            _type: 'block';
            _key: string;
          }
      >;
    };
    module: {
      _id: string;
      _type: 'module';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title: string;
      lessons?: Array<{
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: 'lesson';
      }>;
    };
    training: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'training';
    };
    completedAt: string;
  }>;
  training: {
    _id: string;
    _type: 'training';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title: string;
    slug: Slug;
    description?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    };
    category: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'category';
    };
    modules: Array<{
      _id: string;
      _type: 'module';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title: string;
      lessons: Array<{
        _id: string;
        _type: 'lesson';
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
        title: string;
        slug: Slug;
        description?: string;
        content?: Array<
          | ({
              _key: string;
            } & Code)
          | ({
              _key: string;
            } & Youtube)
          | {
              children?: Array<{
                marks?: Array<string>;
                text?: string;
                _type: 'span';
                _key: string;
              }>;
              style?:
                | 'blockquote'
                | 'h1'
                | 'h2'
                | 'h3'
                | 'h4'
                | 'h5'
                | 'h6'
                | 'normal';
              listItem?: 'bullet' | 'number';
              markDefs?: Array<{
                href?: string;
                _type: 'link';
                _key: string;
              }>;
              level?: number;
              _type: 'block';
              _key: string;
            }
        >;
      }> | null;
    }> | null;
    instructor?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'instructor';
    };
  } | null;
};

// Source: sanity/lib/student/getEnrolledTrainings.ts
// Variable: getEnrolledTrainingsQuery
// Query: *[_type == "student" && clerkId == $clerkId][0] {    "enrolledTrainings": *[_type == "enrollment" && student._ref == ^._id] {      ...,      "training": training-> {        ...,        "slug": slug.current,        "category": category->{...},        "instructor": instructor->{...}      }    }  }
export type GetEnrolledTrainingsQueryResult = {
  enrolledTrainings: Array<{
    _id: string;
    _type: 'enrollment';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    student: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'student';
    };
    training: {
      _id: string;
      _type: 'training';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title: string;
      slug: string;
      description?: string;
      image?: {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: 'image';
      };
      category: {
        _id: string;
        _type: 'category';
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
        name: string;
        slug: Slug;
        description?: string;
      };
      modules?: Array<{
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: 'module';
      }>;
      instructor: {
        _id: string;
        _type: 'instructor';
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
        name: string;
        bio?: string;
        photo?: {
          asset?: {
            _ref: string;
            _type: 'reference';
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: 'image';
        };
      } | null;
    };
    enrolledAt?: string;
  }>;
} | null;

// Source: sanity/lib/student/getStudentByClerkId.ts
// Variable: getStudentByClerkIdQuery
// Query: *[_type == "student" && clerkId == $clerkId][0]
export type GetStudentByClerkIdQueryResult = {
  _id: string;
  _type: 'student';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  firstName?: string;
  lastName?: string;
  email: string;
  clerkId: string;
  imageUrl?: string;
} | null;

// Source: sanity/lib/student/isEnrolledInTraining.ts
// Variable: studentQuery
// Query: *[_type == "student" && clerkId == $clerkId][0]._id
export type StudentQueryResult = string | null;
// Variable: enrollmentQuery
// Query: *[_type == "enrollment" && student._ref == $studentId && training._ref == $trainingId][0]
export type EnrollmentQueryResult = {
  _id: string;
  _type: 'enrollment';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  student: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'student';
  };
  training: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'training';
  };
  enrolledAt?: string;
} | null;

// Source: sanity/lib/trainings/getTrainingById.ts
// Variable: getTrainingByIdQuery
// Query: *[_type == "training" && _id == $id][0] {      ...,  // Spread all training fields      "category": category->{...},  // Expand the category reference, including all its fields      "instructor": instructor->{...},  // Expand the instructor reference, including all its fields      "modules": modules[]-> {  // Expand the array of module references        ...,  // Include all module fields        "lessons": lessons[]-> {...}  // For each module, expand its array of lesson references      }    }
export type GetTrainingByIdQueryResult = {
  _id: string;
  _type: 'training';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  category: {
    _id: string;
    _type: 'category';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    slug: Slug;
    description?: string;
  };
  modules: Array<{
    _id: string;
    _type: 'module';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title: string;
    lessons: Array<{
      _id: string;
      _type: 'lesson';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title: string;
      slug: Slug;
      description?: string;
      content?: Array<
        | ({
            _key: string;
          } & Code)
        | ({
            _key: string;
          } & Youtube)
        | {
            children?: Array<{
              marks?: Array<string>;
              text?: string;
              _type: 'span';
              _key: string;
            }>;
            style?:
              | 'blockquote'
              | 'h1'
              | 'h2'
              | 'h3'
              | 'h4'
              | 'h5'
              | 'h6'
              | 'normal';
            listItem?: 'bullet' | 'number';
            markDefs?: Array<{
              href?: string;
              _type: 'link';
              _key: string;
            }>;
            level?: number;
            _type: 'block';
            _key: string;
          }
      >;
    }> | null;
  }> | null;
  instructor: {
    _id: string;
    _type: 'instructor';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    bio?: string;
    photo?: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    };
  } | null;
} | null;

// Source: sanity/lib/trainings/getTrainingBySlug.ts
// Variable: getTrainingBySlugQuery
// Query: *[_type == "training" && slug.current == $slug][0] {      ...,      "category": category->{...},      "instructor": instructor->{...},      "modules": modules[]-> {        ...,        "lessons": lessons[]-> {...}      }    }
export type GetTrainingBySlugQueryResult = {
  _id: string;
  _type: 'training';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  category: {
    _id: string;
    _type: 'category';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    slug: Slug;
    description?: string;
  };
  modules: Array<{
    _id: string;
    _type: 'module';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title: string;
    lessons: Array<{
      _id: string;
      _type: 'lesson';
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title: string;
      slug: Slug;
      description?: string;
      content?: Array<
        | ({
            _key: string;
          } & Code)
        | ({
            _key: string;
          } & Youtube)
        | {
            children?: Array<{
              marks?: Array<string>;
              text?: string;
              _type: 'span';
              _key: string;
            }>;
            style?:
              | 'blockquote'
              | 'h1'
              | 'h2'
              | 'h3'
              | 'h4'
              | 'h5'
              | 'h6'
              | 'normal';
            listItem?: 'bullet' | 'number';
            markDefs?: Array<{
              href?: string;
              _type: 'link';
              _key: string;
            }>;
            level?: number;
            _type: 'block';
            _key: string;
          }
      >;
    }> | null;
  }> | null;
  instructor: {
    _id: string;
    _type: 'instructor';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    bio?: string;
    photo?: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    };
  } | null;
} | null;

// Source: sanity/lib/trainings/getTrainings.ts
// Variable: getTrainingsQuery
// Query: *[_type == "training"] {    ...,    "slug": slug.current,    "category": category->{...},    "instructor": instructor->{...}  }
export type GetTrainingsQueryResult = Array<{
  _id: string;
  _type: 'training';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  category: {
    _id: string;
    _type: 'category';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    slug: Slug;
    description?: string;
  };
  modules?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'module';
  }>;
  instructor: {
    _id: string;
    _type: 'instructor';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    bio?: string;
    photo?: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    };
  } | null;
}>;

// Source: sanity/lib/trainings/searchTrainings.ts
// Variable: searchQuery
// Query: *[_type == "training" && (    title match $term + "*" ||    description match $term + "*" ||    category->name match $term + "*"  )] {    ...,    "slug": slug.current,    "category": category->{...},    "instructor": instructor->{...}  }
export type SearchQueryResult = Array<{
  _id: string;
  _type: 'training';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  category: {
    _id: string;
    _type: 'category';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    slug: Slug;
    description?: string;
  };
  modules?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'module';
  }>;
  instructor: {
    _id: string;
    _type: 'instructor';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    bio?: string;
    photo?: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    };
  } | null;
}>;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    '*[_type == "lesson" && _id == $id][0] {\n    ...,\n    "module": module->{\n      ...,\n      "training": training->{...}\n    }\n  }': GetLessonByIdQueryResult;
    '*[_type == "lessonCompletion" && student._ref == $studentId && lesson._ref == $lessonId][0] {\n    ...\n  }': CompletionStatusQueryResult;
    '{\n    "completedLessons": *[_type == "lessonCompletion" && student._ref == $studentId && training._ref == $trainingId] {\n      ...,\n      "lesson": lesson->{...},\n      "module": module->{...}\n    },\n    "training": *[_type == "training" && _id == $trainingId][0] {\n      ...,\n      "modules": modules[]-> {\n        ...,\n        "lessons": lessons[]-> {...}\n      }\n    }\n  }':
      | GetCompletionsQueryResult
      | ProgressQueryResult;
    '*[_type == "student" && clerkId == $clerkId][0] {\n    "enrolledTrainings": *[_type == "enrollment" && student._ref == ^._id] {\n      ...,\n      "training": training-> {\n        ...,\n        "slug": slug.current,\n        "category": category->{...},\n        "instructor": instructor->{...}\n      }\n    }\n  }': GetEnrolledTrainingsQueryResult;
    '*[_type == "student" && clerkId == $clerkId][0]': GetStudentByClerkIdQueryResult;
    '*[_type == "student" && clerkId == $clerkId][0]._id': StudentQueryResult;
    '*[_type == "enrollment" && student._ref == $studentId && training._ref == $trainingId][0]': EnrollmentQueryResult;
    '*[_type == "training" && _id == $id][0] {\n      ...,  // Spread all training fields\n      "category": category->{...},  // Expand the category reference, including all its fields\n      "instructor": instructor->{...},  // Expand the instructor reference, including all its fields\n      "modules": modules[]-> {  // Expand the array of module references\n        ...,  // Include all module fields\n        "lessons": lessons[]-> {...}  // For each module, expand its array of lesson references\n      }\n    }': GetTrainingByIdQueryResult;
    '*[_type == "training" && slug.current == $slug][0] {\n      ...,\n      "category": category->{...},\n      "instructor": instructor->{...},\n      "modules": modules[]-> {\n        ...,\n        "lessons": lessons[]-> {...}\n      }\n    }': GetTrainingBySlugQueryResult;
    '*[_type == "training"] {\n    ...,\n    "slug": slug.current,\n    "category": category->{...},\n    "instructor": instructor->{...}\n  }': GetTrainingsQueryResult;
    '*[_type == "training" && (\n    title match $term + "*" ||\n    description match $term + "*" ||\n    category->name match $term + "*"\n  )] {\n    ...,\n    "slug": slug.current,\n    "category": category->{...},\n    "instructor": instructor->{...}\n  }': SearchQueryResult;
  }
}
