// Data source for all packages and states
// Replace dummy images/data as needed. All components import from this file only.

export interface OutboundCountry {
  code: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

export interface InboundState {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bgImage?: string;
  gradient?: string;
}

export interface Package {
  id: string;
  title: string;
  duration: string;
  summary: string;
  quickItinerary: string[];
  detailedItinerary: {
    day: string;
    title: string;
    details: string[];
    image: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  hotels: {
    destination: string;
    categories: { [key: string]: string[] };
  }[];
  childPolicy: string[];
  transport: { pax: string; description: string }[];
  pricing: {
    season: string;
    categories: {
      category: string;
      twoPax: string;
      fourToSixPax: string;
      eightToTenPax: string;
      extraPerson: string;
    }[];
  }[];
  supplementalAttractions: {
    id: string;
    name: string;
    subtitle: string;
    location: string;
    people: string;
    cost: string;
    rating: number;
    featured: boolean;
    img: string;
  }[];
  specialOffers: string[];
}

export const travelPackages: Package[] = [
  {
    id: 'kerala',
    title: 'Charm of Kerala and Border Beauties',
    duration: '06 Nights / 07 Days',
    summary: 'Experience Kerala’s scenic beauty with curated tours across Munnar, Thekkady, Kumarakom & Cochin.',
    quickItinerary: [
      'Day 01 – Arrival at Cochin',
      'Day 02 – Munnar sightseeing',
      'Day 03 – Thekkady wildlife safari',
      'Day 04 – Houseboat cruise',
      'Day 05 – Kumarakom visit',
      'Day 06 – Alleppey backwaters',
      'Day 07 – Departure from Cochin'
    ],
    detailedItinerary: [
      {
        day: 'Day 01',
        title: 'Arrival at Cochin',
        details: ['Pickup at airport', 'Drive to hotel', 'Evening city walk'],
        image: 'assets/images/a.jpg'
      },
      {
        day: 'Day 02',
        title: 'Munnar sightseeing',
        details: ['Tea gardens visit', 'Eravikulam National Park', 'Photo points'],
        image: 'assets/images/b.jpg'
      },
      {
        day: 'Day 03',
        title: 'Thekkady wildlife safari',
        details: ['Periyar sanctuary boat ride', 'Spice plantation tour', 'Kalaripayattu show'],
        image: 'assets/images/c.jpg'
      },
      {
        day: 'Day 04',
        title: 'Houseboat cruise',
        details: ['Board Alleppey houseboat', 'Traditional lunch', 'Sunset on backwaters'],
        image: 'assets/images/d.jpg'
      },
      {
        day: 'Day 05',
        title: 'Kumarakom visit',
        details: ['Bird sanctuary', 'Canoe ride', 'Lakeside relaxation'],
        image: 'assets/images/e.jpg'
      },
      {
        day: 'Day 06',
        title: 'Alleppey backwaters',
        details: ['Village walk', 'Backwater shikara', 'Cultural interactions'],
        image: 'assets/images/f.jpg'
      },
      {
        day: 'Day 07',
        title: 'Departure from Cochin',
        details: ['Checkout', 'Transfer to airport', 'Goodbye Kerala'],
        image: 'assets/images/g.jpg'
      }
    ],
    inclusions: ['Twin-sharing accommodation', 'Breakfast & dinner (as per itinerary)', 'Local English-speaking driver', 'All transfers & taxes'],
    exclusions: ['International/Domestic flights', 'Visa & passport fees', 'Personal expenses & beverages'],
    highlights: ['Backwaters cruise', 'Tea gardens of Munnar', 'Periyar wildlife', 'Houseboat experience'],
    hotels: [
      {
        destination: 'Munnar',
        categories: {
          '3-Star': ['Hotel A', 'Hotel B'],
          '4-Star': ['Resort C', 'Resort D'],
          '5-Star': ['Hotel Luxury X']
        }
      },
      {
        destination: 'Thekkady',
        categories: {
          '3-Star': ['Woods Inn', 'Green Leaf'],
          '4-Star': ['Periyar Retreat'],
          '5-Star': ['Royal Periyar']
        }
      },
      {
        destination: 'Cochin',
        categories: {
          '3-Star': ['City Comfort'],
          '4-Star': ['Harbor View'],
          '5-Star': ['Grand Cochin']
        }
      }
    ],
    childPolicy: ['Child below 5: Free', 'Child above 5: Extra bed & charges apply'],
    transport: [
      { pax: '2 Pax', description: 'A/C Sedan (Etios / Dzire)' },
      { pax: '4–6 Pax', description: 'A/C Innova or similar' }
    ],
    pricing: [
      {
        season: 'High Season (Oct–May)',
        categories: [
          { category: '3-Star', twoPax: '₹37,510', fourToSixPax: '₹35,630', eightToTenPax: '₹33,840', extraPerson: '₹9,370' },
          { category: '4-Star', twoPax: '₹44,990', fourToSixPax: '₹42,200', eightToTenPax: '₹39,450', extraPerson: '₹12,200' },
          { category: '5-Star', twoPax: '₹62,300', fourToSixPax: '₹58,900', eightToTenPax: '₹55,400', extraPerson: '₹21,400' }
        ]
      },
      {
        season: 'Low Season (Jun–Sep)',
        categories: [
          { category: '3-Star', twoPax: '₹31,200', fourToSixPax: '₹29,850', eightToTenPax: '₹28,500', extraPerson: '₹8,100' },
          { category: '4-Star', twoPax: '₹36,800', fourToSixPax: '₹34,900', eightToTenPax: '₹32,900', extraPerson: '₹10,500' },
          { category: '5-Star', twoPax: '₹52,400', fourToSixPax: '₹49,900', eightToTenPax: '₹47,600', extraPerson: '₹18,700' }
        ]
      }
    ],
    supplementalAttractions: [
      {
        id: 'supp-1',
        name: 'Half-Day Cookery Demo',
        subtitle: 'Traditional home cooking with meal',
        location: 'Cochin',
        people: 'Per Person',
        cost: '₹2000',
        rating: 4.5,
        featured: true,
        img: 'https://source.unsplash.com/400x300/?cooking,kerala'
      },
      {
        id: 'supp-2',
        name: 'Kathakali Performance',
        subtitle: 'Classical dance show',
        location: 'Cochin',
        people: 'Per Person',
        cost: '₹1200',
        rating: 4.7,
        featured: false,
        img: 'https://source.unsplash.com/400x300/?kathakali,kerala'
      }
    ],
    specialOffers: ['Honeymoon offer: cake, flower bed, candlelight dinner (terms apply)']
  }
];


export const inboundPackages = [
  {
    id: 'kerala',
    name: 'Kerala',
    gradient: 'from-green-400 to-green-600',
    tagline: "God's Own Country",
    description: 'Backwaters, Tea Gardens, Ayurveda',
    bgImage: 'assets/images/l.jpeg'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    gradient: 'from-blue-400 to-blue-600',
    tagline: 'One State Many Worlds',
    description: 'Ancient Temples, Coffee Estates, Beaches',
    bgImage: 'assets/images/m.jpeg'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    gradient: 'from-orange-400 to-orange-600',
    tagline: 'Land of Temples',
    description: 'Dravidian Architecture, Hill Stations',
    bgImage: 'assets/images/k.jpg'
  },
  {
    id: 'goa',
    name: 'Goa',
    gradient: 'from-yellow-400 to-yellow-600',
    tagline: 'Pearl of the Orient',
    description: 'Beaches, Nightlife, Portuguese Heritage',
  },
  {
    id: 'north-india',
    name: 'North India',
    gradient: 'from-red-400 to-red-600',
    tagline: 'Himalayan Paradise',
    description: 'Mountains, Temples, Heritage Sites',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    gradient: 'from-purple-400 to-purple-600',
    tagline: 'Land of Kings',
    description: 'Palaces, Forts, Desert Safaris',
  }
];
