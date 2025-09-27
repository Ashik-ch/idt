
export interface Feature {
  iconBg: string;
  iconColor: string;
  iconPath: string;
  innerIcon?: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath:
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    innerIcon: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Curated Destinations',
    description: 'Handpicked locations and experiences for unforgettable memories.'
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    iconPath:
      'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
    title: 'Best Prices',
    description: 'Competitive rates and exclusive deals for every budget.'
  },
  {
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconPath:
      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Safe Travel',
    description: 'Your safety and comfort are our top priorities.'
  },
  {
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    iconPath:
      'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z',
    title: '24/7 Support',
    description: 'Round-the-clock assistance for worry-free travel.'
  }
];


export const Services = [
  {
    icon: 'pi pi-home',
    title: 'Luxury Stays',
    desc: 'Experience stylish condos with all the comforts of home.',
  },
  {
    icon: 'pi pi-shop',
    title: 'Gourmet Dining',
    desc: 'Savor local delicacies and world-class café culture.',
  },
  {
    icon: 'pi pi-envelope',
    title: 'Seamless Connectivity',
    desc: 'Stay linked with easy access to transport and networks.',
  },
  {
    icon: 'pi pi-phone',
    title: 'Dedicated Assistance',
    desc: 'Friendly experts available whenever you need guidance.',
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
