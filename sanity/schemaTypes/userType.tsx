import Image from 'next/image';
import { defineField, defineType } from 'sanity';

export const userType = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clerkId',
      title: 'Clerk User ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageUrl',
      title: 'Profile Image URL',
      type: 'url',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          { title: 'Authenticated', value: 'authenticated' },
          { title: 'Creator', value: 'creator' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      imageUrl: 'imageUrl',
      role: 'role',
    },
    prepare({ firstName, lastName, imageUrl, role }) {
      return {
        title: `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`,
        subtitle: role,
        media: (
          <Image
            src={imageUrl}
            alt={`${firstName} ${lastName}`}
            width={100}
            height={100}
          />
        ),
      };
    },
  },
});
