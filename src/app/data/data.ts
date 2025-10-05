export interface Feature {
  iconBg: string;
  iconColor: string;
  iconPath: string;
  innerIcon?: string;
  title: string;
  description: string;
  image: string;
}

export const features: Feature[] = [
  {
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    iconPath:
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    innerIcon: 'M15 11a3 3 0 11-6 0 3 3 0z',
    title: 'Tour with Life Elements',
    description:
      'Explore India’s hidden gems and global landmarks curated for memorable experiences.',
    image: 'assets/images/a.jpg',
  },
  {
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    iconPath:
      'M4 17l6-6 4 4 8-8M21 12v8a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h11',
    title: 'Choose your Wheels for Comfort & Ease',
    description:
      'Enjoy comfortable rides with our fleet of premium vehicles and experienced drivers.',
    image: 'assets/images/a.jpg',
  },
  {
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    iconPath:
      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Delight in our Culinary Offerings',
    description:
      'Delight in authentic local cuisines and curated dining experiences across destinations.',
    image: 'assets/images/b.jpg',
  },
  {
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    iconPath:
      'M18 13v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6M12 3v10m0 0l3-3m-3 3l-3-3',
    title: 'Enjoy Experiential Adventures',
    description:
      'From mountain treks to backwater cruises — your journey will be full of adventures.',
    image: 'assets/images/c.jpg',
  },
  {
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    iconPath:
      'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z',
    title: 'Pack your packet with more options ',
    description:
      'Stay in handpicked hotels and resorts blending luxury, comfort, and local culture.',
    image: 'assets/images/d.jpg',
  },
  {
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    iconPath:
      'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
    title: 'Get the Best for your Budget',
    description:
      'Enjoy exclusive offers, value-for-money packages, and transparent pricing.',
    image: 'assets/images/e.jpg',
  },
];

export const Services = [
  {
    icon: 'pi pi-building',
    title: 'Relax in Our Choice of Hotels',
    desc: 'Stay in carefully selected hotels across Kerala — combining comfort, style, and authentic local charm for a memorable experience.',
    img: 'assets/images/a.jpg'
  },
  {
    icon: 'pi pi-car',
    title: 'Ride in Comfort & Style',
    desc: 'Travel in modern, air-conditioned vehicles driven by experienced chauffeurs for a smooth and safe journey.',
    img: 'assets/images/b.jpg'
  },
  {
    icon: 'pi pi-sparkles',
    title: 'Enjoy One-of-a-Kind Experiences',
    desc: 'Discover unique attractions and curated add-on adventures — from serene backwater cruises to cultural heritage tours.',
    img: 'assets/images/c.jpg'
  },
  {
    icon: 'pi pi-headphones',
    title: 'Dedicated Assistance',
    desc: 'Our expert team is available around the clock to ensure a seamless and stress-free travel experience.',
    img: 'assets/images/d.jpg'
  },
];


export const testimonialList = [
  {
    name: 'Anjali Nair',
    location: 'Kerala, India',
    message:
      'The trip was perfectly organized, and the houseboat experience in Alleppey was unforgettable!',
    avatar: 'assets/images/f.jpg',
  },
  {
    name: 'Rahul Sharma',
    location: 'Delhi, India',
    message:
      'A wonderful mix of culture and nature — Munnar’s tea gardens were the highlight for me.',
    avatar: 'https://media.istockphoto.com/id/2006436002/video/happy-confident-and-portrait-of-indian-man-in-office-with-creative-professional-at-tech.jpg?s=640x640&k=20&c=vcKAWd0sGJpV3xR0AK1RCM7zTEpFUcBhQEXbNvN1M78=',
  },
  {
    name: 'Sophia Williams',
    location: 'London, UK',
    message:
      'Best travel experience ever! Kerala felt like paradise with such smooth arrangements.',
    avatar: 'assets/testimonials/sophia.jpg',
  },
];
