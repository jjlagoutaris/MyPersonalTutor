export default {
  name: 'navbarInfo',
  title: 'Navbar Info',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Header Title',
      type: 'string',
      description: 'The title text that appears in the navbar offcanvas header',
    //   validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Logo Image',
      type: 'image',
      description: 'Logo displayed in the navbar',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'header',
      media: 'image',
    },
  },
};
