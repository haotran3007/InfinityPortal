const themeImageBase = 'https://demos.creative-tim.com/astro-ecommerce/images';

const themeImage = (path: string): string => `${themeImageBase}/${path.replace(/^\//, '')}`;

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface PromoBlock {
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  backgroundImage: string;
  minHeight: string;
  borderRadius?: string;
}

export interface CategoryCard {
  collection: string;
  title: string;
  image: string;
}

export interface ProductFeatureBlock {
  title: string;
  intro: string;
  descriptionTitle: string;
  description: string;
  details: string[];
  images: ImageAsset[];
}

export interface TestimonialCard {
  name: string;
  rating: number;
  avatar: string;
  text: string;
}

export interface MembersBlock {
  title: string;
  description: string;
  actionLabel: string;
  backgroundImage: string;
  testimonialsTitle: string;
  testimonialsIntro: string;
  testimonials: TestimonialCard[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface IndexLandingData {
  brand: string;
  navLinks: NavLink[];
  hero: PromoBlock;
  categories: CategoryCard[];
  starterPack: PromoBlock;
  productFeature: ProductFeatureBlock;
  members: MembersBlock;
  footerLinks: FooterLink[];
}

export const indexLandingData: IndexLandingData = {
  brand: 'Astro Ecommerce',
  navLinks: [
    {
      label: 'All Components',
      href: 'https://demos.creative-tim.com/astro-ecommerce/',
    },
    {
      label: 'Pages',
      href: '#',
      children: [
        {
          label: 'Landing Page',
          href: '/',
        },
        {
          label: 'Product Page',
          href: 'https://demos.creative-tim.com/astro-ecommerce/product/',
        },
        {
          label: 'Shopping Cart',
          href: 'https://demos.creative-tim.com/astro-ecommerce/shopping-cart/',
        },
      ],
    },
    {
      label: 'Documentation',
      href: 'https://www.creative-tim.com/learning-lab/astro/overview/astro-ecommerce',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/creativetimofficial/astro-ecommerce',
    },
  ],
  hero: {
    title: 'Collection is here',
    description:
      'The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.',
    actionLabel: 'Explore New Collection',
    actionHref: '#categories',
    backgroundImage: themeImage('/bg2.jpg'),
    minHeight: '90vh',
  },
  categories: [
    {
      collection: 'Pre-fall',
      title: 'Silk Dresses',
      image: themeImage('/category1.jpg'),
    },
    {
      collection: 'Designers',
      title: 'Suits',
      image: themeImage('/category2.jpg'),
    },
    {
      collection: 'Summer',
      title: 'Festival',
      image: themeImage('/category3.jpg'),
    },
    {
      collection: 'Sale',
      title: 'Showroom',
      image: themeImage('/category4.jpg'),
    },
  ],
  starterPack: {
    title: 'Basic Starter Pack',
    description:
      'The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.',
    actionLabel: 'Explore New Collection',
    actionHref: '#features',
    backgroundImage: themeImage('/bg2.jpg'),
    minHeight: '50vh',
    borderRadius: '1rem',
  },
  productFeature: {
    title: 'Product Features',
    intro:
      "Society has put up so many boundaries, so many limitations on what's right and wrong that it's almost impossible",
    descriptionTitle: 'Product Description',
    description:
      "Society has put up so many boundaries, so many limitations on what's right and wrong that it's almost impossible to get a pure thought out. It's like a little kid, a little boy, looking at colors, and no one told him what colors are good, before somebody tells you you should not like pink because that is for girls.",
    details: [
      'Oil is a primary source of energy for various sectors, including transportation, industries, and residential use.',
      'Oil is highly versatile and used in the production of a wide range of products. It serves as a raw material for manufacturing plastics.',
      'Oil is a crucial source of petrochemicals, which are used in the production of plastics.',
    ],
    images: [
      {
        src: themeImage('/product7.jpg'),
        alt: 'first_image',
      },
      {
        src: themeImage('/product8.jpg'),
        alt: 'third_image',
      },
      {
        src: themeImage('/product9.jpg'),
        alt: 'fourth_image',
      },
    ],
  },
  members: {
    title: 'Exclusive Discounts for Members',
    description:
      'The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.',
    actionLabel: 'Get your code',
    backgroundImage:
      'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=2676&q=80',
    testimonialsTitle: "Our customer's opinion",
    testimonialsIntro:
      "Society has put up so many boundaries, so many limitations on what's right and wrong that it's almost impossible to get a pure thought out.",
    testimonials: [
      {
        name: 'Alexa Liras',
        rating: 4,
        avatar:
          'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1760&q=80',
        text:
          'We are not always in the position that we want to be at. We are constantly growing. We are constantly making mistakes. We are constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment.',
      },
      {
        name: 'Laurent Perrier',
        rating: 5,
        avatar:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
        text:
          "There is nothing I really wanted to do in life that I was not able to get good at. That is my skill. I am not really specifically talented at anything except for the ability to learn. That is what I do. That is what I am here for. Do not be afraid to be wrong because you cannot learn anything from a compliment.",
      },
      {
        name: 'Michael Levi',
        rating: 4,
        avatar:
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80',
        text:
          "It really matters and then like it really does not matter. What matters is the people who are sparked by it. And the people who are offended by it, it does not matter. Because it is about motivating the doers. Because I am here to follow my dreams and inspire other people to follow their dreams.",
      },
    ],
  },
  footerLinks: [
    {
      label: 'Creative Tim',
      href: 'https://www.creative-tim.com',
    },
    {
      label: 'About Us',
      href: 'https://www.creative-tim.com/presentation',
    },
    {
      label: 'Blog',
      href: 'https://www.creative-tim.com/blog',
    },
    {
      label: 'License',
      href: 'https://www.creative-tim.com/license',
    },
  ],
};
