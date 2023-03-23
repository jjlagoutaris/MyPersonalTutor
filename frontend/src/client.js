import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'mhpj9g44',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skHBeb54u5m9zqb2P8EuhHBG7CcVuNLADqJFIewoIVTavT5ml8805B0TKGrKcT73zp3t4nPP3vXxTac1nO4wYR7ZgA47qaDbPke4YQYwfzSVkkiBJ3FNF13lEbScaRryxpyfRQTGZztHYsEkNRpo0Zf6H6nVmy3m5EX5jB1pv2TNJrWz9wse',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);