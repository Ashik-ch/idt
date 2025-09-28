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
    image: string;
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
      'Day 01 – Arrival at Coimbatore',
      'Day 02 – Explore Ooty',
      'Day 03 – Proceed to Munnar',
      'Day 04 – Explore Munnar',
      'Day 05 – Proceed to Thekkady',
      'Day 06 – Enjoy Kumarakom Houseboat',
      'Day 07 – Departure from Cochin',
    ],
    detailedItinerary: [
      {
        day: '01',
        title: "Arrival at Coimbatore",
        details: [
          'Arrival at Coimbatore Airport',
          'Drive to Ooty (3h10m)',
          'Hotel check-in & relax',
          'Evening visit Botanical Garden & Boating',
        ],
        image: 'https://img1.wsimg.com/isteam/ip/dd7bf207-c00c-4b95-a0a3-ff510508d271/houseboat.jpeg'
      },
      {
        day: '02',
        title: "Explore Ooty",
        details: [
          'Breakfast at hotel',
          'Ooty sightseeing: Rose Garden, Avvamore Palace, Govt. Museum',
          'Toy train ride to Coonoor',
          'Return & overnight stay at hotel',
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6krGBzaTpFvGKQfz9MpuOef1sSRMcQzCrOQ&s"
      },
      {
        day: '03',
        title: "Proceed to Munnar",
        details: [
          'Drive to Munnar hill station',
          'Visit Tea Gardens & Tea Museum en route',
          'Check into hotel, relax & spice shopping',
        ],
        image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        day: '04',
        title: "Explore Munnar",
        details: [
          'Breakfast at hotel',
          'Visit Eravikulam National Park',
          'Explore Mattupetty Dam, Echo Point, Kundala Lake, Top Station',
          'Overnight stay at resort',
        ],
        image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        day: '05',
        title: "Proceed to Thekkady",
        details: [
          'Drive to Thekkady (3h / 150km)',
          'Check-in at hotel & relax',
          'Elephant Ride, Jungle Safari',
          'Evening Kalaripayattu show',
        ],
        image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        day: '06',
        title: "Enjoy Kumarakom Houseboat",
        details: [
          'Drive to Kumarakom backwaters',
          'Check-in to houseboat by noon',
          'Cruise with lunch & dinner onboard',
          'Anchored overnight stay',
        ],
        image: "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        day: '07',
        title: "Departure from Cochin",
        details: [
          'Breakfast & check out from houseboat',
          'Transfer to Cochin Airport for departure',
        ],
        image: "https://img1.wsimg.com/isteam/ip/dd7bf207-c00c-4b95-a0a3-ff510508d271/houseboat.jpeg"
      },
    ],
    inclusions: [
      'Local English-speaking driver',
      'Twin/double accommodation with daily breakfast + dinner',
      'Entry fees, taxes, tolls, guides at selected locations',
      'Meals as per itinerary',
      'Transport',
    ],
    exclusions: [
      'International/domestic flights & airport taxes',
      'Passport & visa fees',
      'Personal expenses (laundry, calls, beverages, etc.)',
      'Single room supplement',
      'Bottled/mineral water during meals',
      'Peak season or special event surcharges',
    ],
    highlights: [
      'Botanical Garden, Rose Garden, Avvamore Palace, Govt. Museum, Toy Train',
      'Munnar Hill Station, Tea Gardens, Tea Museum, Spice Shopping',
      'Eravikulam National Park, Mattupetty Dam, Echo Point, Kundala Lake, Top Station',
      'Elephant Ride, Jungle Safari, Kalaripayattu',
      'Full-day cruise & overnight in houseboat',
    ],

    hotels: [
      {
        destination: 'Ooty (2N)',
        image: 'assets/images/a.jpg',
        categories: {
          '3-Star': ['Nahar Nilgiris Resort', 'Treebo Windsor Heights Resort'],
          '4-Star': ['Garden Manor Resort', 'Fortune Retreats', 'The Monarch'],
          '5-Star Deluxe': ['Gem Park Ooty', 'Sterling Fernhill Ooty'],
          '5-Star Luxury': ['Taj Savoy Hotel', 'Taj Gateway Coonoor'],
        },
      },
      {
        destination: 'Munnar (2N)',
        image: 'assets/images/b.jpg',
        categories: {
          '3-Star': ['West Wood Resort', 'Eastend Hotel'],
          '4-Star': ['Rivulet Resort', 'Elephant Passage Resort'],
          '5-Star Deluxe': ['Blanket Hotel', 'Spice Tree Resort'],
          '5-Star Luxury': ['Chandys Windy Woods', 'Grand Cliff Resort'],
        },
      },
      {
        destination: 'Thekkady (1N)',
        image: 'assets/images/c.jpg',
        categories: {
          '3-Star': ['Abad Green Forest', 'Pepper Vine Resort'],
          '4-Star': ['Mountain Courtyard Resort', 'Forest Canopy Resort'],
          '5-Star Deluxe': ['Poetree Resort', 'Elephant Court'],
          '5-Star Luxury': ['Spice Village Resort', 'Lake Palace Resort'],
        },
      },
      {
        destination: 'Kumarakom Houseboat (1N)',
        image: 'assets/images/d.jpg',
        categories: {
          'Standard': ['A/C', 'Standard Houseboat'],
          'Deluxe': ['A/C Deluxe Houseboat', ' (Silver Flag)'],
          'Premium': ['A/C Premium Houseboat', ' (Golden Flag)'],
          'Luxury': ['Full-time A/C', 'Luxury Houseboat (Platinum)'],
        },
      },
    ],
    childPolicy: [
      'Below 5 years : Free of cost',
      'Above 5 years : Extra person charge with extra bed',
    ],
    transport: [
      { pax: '2 Pax', description: 'A/C Sedan car (Toyota Etios/Swift Dzire)' },
      { pax: '4–6 Pax', description: 'A/C Toyota Innova Crysta' },
      { pax: '6–10 Pax', description: 'A/C 12-Seater Force Traveller' },
      { pax: '10–14 Pax', description: 'A/C 17-Seater Force Traveller' },
      { pax: '15–25 Pax', description: 'A/C Mini Luxury Bus' },
      { pax: '25+ Pax', description: 'A/C Luxury Bus' },
    ],
    pricing: [
      {
        season: 'High Season (Oct 1 – Dec 19 & Jan 10 – May 31)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: '₹37,510', fourToSixPax: '₹35,630', eightToTenPax: '₹33,840', extraPerson: '₹9,370', },
          { category: '4-Star Deluxe Resort', twoPax: '₹43,840', fourToSixPax: '₹41,640', eightToTenPax: '₹39,550', extraPerson: '₹10,960', },
          { category: '5-Star Deluxe Resort', twoPax: '₹56,780', fourToSixPax: '₹53,940', eightToTenPax: '₹51,240', extraPerson: '₹14,190', },
          { category: '5-Star Luxury Resort', twoPax: '₹1,09,390', fourToSixPax: '₹1,03,920', eightToTenPax: '₹98,720', extraPerson: '₹27,340', },
        ],
      },
      {
        season: 'Off Season (Jun 1 – Sep 30)',
        categories: [
          { category: '3-Star Deluxe Resort', twoPax: '₹30,000', fourToSixPax: '₹28,500', eightToTenPax: '₹27,070', extraPerson: '₹7,490', },
          { category: '4-Star Deluxe Resort', twoPax: '₹35,070', fourToSixPax: '₹33,310', eightToTenPax: '₹31,640', extraPerson: '₹8,760', },
          { category: '5-Star Deluxe Resort', twoPax: '₹45,420', fourToSixPax: '₹43,150', eightToTenPax: '₹40,990', extraPerson: '₹11,350', },
          { category: '5-Star Luxury Resort', twoPax: '₹87,510', fourToSixPax: '₹83,130', eightToTenPax: '₹78,970', extraPerson: '₹21,870', },
        ],
      },
    ],

    supplementalAttractions: [
      {
        id: '1',
        name: 'Cookery Demonstration Tour',
        subtitle: 'Traditional home experience with lunch or dinner',
        location: 'Cochin',
        people: "1",
        cost: '2000 (Non-Veg)',
        rating: 4.5,
        featured: true,
        img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Black-Bean-Chicken-with-Rice_EXPS_TOHAS22_47046_GNS_03_23_6b-a.jpg?w=700"
      },
      {
        id: '2',
        name: 'Kalarippayattu Programme',
        subtitle: 'Half-day martial arts demonstration',
        location: 'Cochin/Thekkady',
        people: "5 Min",
        cost: '1000 pp',
        rating: 4.2,
        featured: false,
        img: "https://storage.karmagroup.com/assets/karmagroup.com/blog/2018/03/KALARIPAYATTU-940x671.jpg"
      },
      {
        id: '3',
        name: 'Kolukumalai Tea Factory Visit',
        subtitle: 'Visit the highest hill station tea factory in the world',
        location: 'Munnar',
        people: "1",
        cost: '2000',
        rating: 4.6,
        featured: true,
        img: "https://www.thewindmunnar.com/images/theWind/munnar/activities/tea-factory.jpg"
      },
      {
        id: '4',
        name: 'Half-Day Tea Trial Tour',
        subtitle: 'Tea tasting and plantation walk',
        location: 'Munnar',
        people: "1",
        cost: '1500',
        rating: 4.3,
        featured: false,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"
      },
      {
        id: '5',
        name: 'Full Day Tea Trial Tour',
        subtitle: 'Extended tea plantation exploration and tasting',
        location: 'Munnar',
        people: "1",
        cost: '2500.00',
        rating: 4.7,
        featured: true,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"

      },
      {
        id: '6',
        name: 'Mountain Trekking with Jeep Safari',
        subtitle: 'Trek the mountains with a guide and jeep safari',
        location: 'Munnar',
        people: "1",
        cost: '3000',
        rating: 4.8,
        featured: true,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"

      },
      {
        id: '7',
        name: 'Bamboo River Drafting',
        subtitle: 'Enjoy rafting at Periyar River',
        location: 'Thekkady',
        people: "1",
        cost: '2500',
        rating: 4.4,
        featured: false,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"

      },
      {
        id: '8',
        name: 'Full Day Trip to Gavi',
        subtitle: 'Nature exploration tour',
        location: 'Thekkady',
        people: "1",
        cost: 'On request',
        rating: 4.6,
        featured: false,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"
      },
      {
        id: '9',
        name: 'Jeep Safari in Periyar Forests',
        subtitle: 'Explore wildlife with jeep safari',
        location: 'Thekkady',
        people: "1",
        cost: '2000',
        rating: 4.7,
        featured: true,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"
      },
      {
        id: '10',
        name: 'Half-Day Elephant Safari',
        subtitle: 'Elephant ride and forest adventure',
        location: 'Munnar/Thekkady',
        people: "1",
        cost: '1000',
        rating: 4.5,
        featured: false,
        img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cwp8yqoarblbh6apl06c/Mount%20Batur%20Sunrise%20Trekking%20or%20Jeep%20Private%20Tour%20in%20Kintamani%20Bali.jpg"
      },
      {
        id: '11',
        name: 'Half Day Elephant Moments',
        subtitle: 'Bathing, feeding and interacting with elephants',
        location: 'Thekkady',
        people: "1",
        cost: '2000',
        rating: 4.8,
        featured: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s"
      },
      {
        id: '12',
        name: 'Backwater Canal Cruise in Country Crafts',
        subtitle: 'Relaxing houseboat cruise on Kerala backwaters',
        location: 'Cochin',
        people: "1",
        cost: '1500',
        rating: 4.7,
        featured: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s"
      },
      {
        id: '13',
        name: 'Backwater Historical Tour',
        subtitle: 'Guided tour of Cochin’s heritage sites',
        location: 'Cochin',
        people: "1",
        cost: '1500',
        rating: 4.6,
        featured: false,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s"
      },
      {
        id: '14',
        name: 'Extra Night in A/C Houseboat',
        subtitle: 'Full day cruise from Kumarakom to Alleppey',
        location: 'Kumarakom - Alleppey',
        people: "2",
        cost: '7000',
        rating: 4.9,
        featured: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus7wr4ZSM7S1cVJba9Id-tuWskUdmv7BnBQ&s"
      }
    ],

    specialOffers: [
      'Complimentary honeymoon cake',
      'Flower bed arrangement',
      'Candlelight dinner (with package upgrade)',
      'Valid only for couples within 60 days of marriage (wedding card required)',
    ],
  },

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

export const itineraryRoute = [
  {
    distance: 0,
    category: 'city',
    name: 'Coimbatore',
    altitude: 411,
    date: new Date('2025-05-01').getTime(),
    population: 2,
    geometry: { type: 'Point', coordinates: [76.956, 11.0168] }
  },
  {
    distance: 85,
    category: 'city',
    name: 'Ooty',
    altitude: 2240,
    date: new Date('2025-05-02').getTime(),
    population: 1,
    geometry: { type: 'Point', coordinates: [76.695, 11.4064] }
  },
  {
    distance: 190,
    category: 'city',
    name: 'Munnar',
    altitude: 1600,
    date: new Date('2025-05-03').getTime(),
    population: 2,
    geometry: { type: 'Point', coordinates: [77.059, 10.0892] }
  },
  {
    distance: 270,
    category: 'city',
    name: 'Thekkady',
    altitude: 915,
    date: new Date('2025-05-04').getTime(),
    population: 1,
    geometry: { type: 'Point', coordinates: [77.212, 9.5980] }
  },
  {
    distance: 350,
    category: 'city',
    name: 'Kumarakom',
    altitude: 2,
    date: new Date('2025-05-05').getTime(),
    population: 1,
    geometry: { type: 'Point', coordinates: [76.541, 9.5936] }
  },
  {
    distance: 370,
    category: 'city',
    name: 'Kochi',
    altitude: 3,
    date: new Date('2025-05-06').getTime(),
    population: 2,
    geometry: { type: 'Point', coordinates: [76.267, 9.9312] }
  }
];
