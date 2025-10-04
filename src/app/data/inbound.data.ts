

// Enhanced state data with Today's Deal information
export const statesData: { [key: string]: any } = {
    'kerala': {
        id: 1,
        name: 'Kerala',
        description:
            "God's Own Country - Experience the serene backwaters, lush tea gardens, and pristine beaches.",
        highlights: [
            {
                title: 'Backwaters',
                description: 'Peaceful houseboat cruises through serene waterways',
                img: 'assets/images/h.jpg',
            },
            {
                title: 'Tea Gardens',
                description: 'Visit the famous tea estates of Munnar',
                img: 'assets/images/i.jpg',
            },
            {
                title: 'Ayurveda',
                description: 'Traditional wellness treatments and therapies',
                img: 'assets/images/h.jpg',
            },
            {
                title: 'Hill Areas',
                description: 'Explore the misty mountains and trekking trails',
                img: 'assets/images/i.jpg',
            },
            {
                title: 'Beaches',
                description: 'Relax on pristine golden beaches like Kovalam & Varkala',
                img: 'assets/images/j.jpg',
            },
            {
                title: 'Historical Sites',
                description: 'Discover forts, palaces, and ancient temples',
                img: 'assets/images/i.jpg',
            },
        ],
        packages: [
            {
                name: 'Kerala Backwaters',
                duration: '5D/4N',
                description: 'Experience the serene backwaters of Alleppey',
                price: '25,000',
                originalPrice: '32,000',
                discount: 22,
                isTodaysDeal: true
            },
            {
                name: 'Munnar Tea Trail',
                duration: '4D/3N',
                description: 'Explore the tea gardens and hill stations',
                price: '20,000',
                originalPrice: '25,000',
                discount: 20,
                isTodaysDeal: false
            },
            {
                name: 'Kerala Complete',
                duration: '7D/6N',
                description: 'Complete Kerala experience from mountains to beaches',
                price: '35,000',
                originalPrice: '42,000',
                discount: 17,
                isTodaysDeal: true
            }
        ],
        destinations: [
            { name: 'Alleppey', description: 'Famous for its backwaters and houseboats' },
            { name: 'Munnar', description: 'Hill station known for tea gardens and scenic beauty' },
            { name: 'Kovalam', description: 'Beautiful beach destination with golden sands' }
        ],
        bestTime: [
            { name: 'Winter', months: 'Dec-Feb', description: 'Pleasant weather, perfect for sightseeing', color: 'bg-white' },
            { name: 'Monsoon', months: 'Jun-Sep', description: 'Lush greenery, backwater cruises', color: 'bg-white' },
            { name: 'Spring', months: 'Mar-May', description: 'Hot but good for beach activities', color: 'bg-white' },
            { name: 'Autumn', months: 'Oct-Nov', description: 'Mild weather, great for outdoor activities', color: 'bg-white' }
        ]
    },
    'rajasthan': {
        id: 2,
        name: 'Rajasthan',
        description: 'Land of Kings - Discover royal palaces, desert adventures, and rich cultural heritage.',
        highlights: [
            { title: 'Royal Palaces', description: 'Magnificent forts and palaces of the Rajput era' },
            { title: 'Desert Safari', description: 'Thrilling camel safaris in the Thar Desert' },
            { title: 'Cultural Heritage', description: 'Rich traditions, folk music, and colorful festivals' }
        ],
        packages: [
            {
                name: 'Golden Triangle',
                duration: '6D/5N',
                description: 'Delhi - Agra - Jaipur classic tour',
                price: '30,000',
                originalPrice: '38,000',
                discount: 21,
                isTodaysDeal: true
            },
            {
                name: 'Rajasthan Heritage',
                duration: '8D/7N',
                description: 'Complete Rajasthan experience',
                price: '45,000',
                originalPrice: '52,000',
                discount: 13,
                isTodaysDeal: false
            },
            {
                name: 'Desert Adventure',
                duration: '5D/4N',
                description: 'Jaisalmer desert safari and forts',
                price: '28,000',
                originalPrice: '35,000',
                discount: 20,
                isTodaysDeal: true
            }
        ],
        destinations: [
            { name: 'Jaipur', description: 'Pink City with magnificent palaces and forts' },
            { name: 'Udaipur', description: 'City of Lakes with romantic boat rides' },
            { name: 'Jaisalmer', description: 'Golden City in the heart of Thar Desert' }
        ],
        bestTime: [
            { name: 'Winter', months: 'Oct-Mar', description: 'Best time to visit, pleasant weather', color: 'bg-red-500' },
            { name: 'Spring', months: 'Mar-May', description: 'Hot weather, good for early morning tours', color: 'bg-red-100' },
            { name: 'Monsoon', months: 'Jul-Sep', description: 'Moderate rainfall, lush landscapes', color: 'bg-red-200' },
            { name: 'Summer', months: 'May-Jun', description: 'Very hot, indoor activities recommended', color: 'bg-red-300' }
        ]
    }
};

export const highlightedStates = [
    { id: 'delhi', title: 'Delhi', geometry: { type: 'Point', coordinates: [77.209, 28.6139] } },
    { id: 'mumbai', title: 'Mumbai', geometry: { type: 'Point', coordinates: [72.8777, 19.076] } },
    { id: 'kolkata', title: 'Kolkata', geometry: { type: 'Point', coordinates: [88.3639, 22.5726] } },
    { id: 'chennai', title: 'Chennai', geometry: { type: 'Point', coordinates: [80.2707, 13.0827] } },
    { id: 'bengaluru', title: 'Bengaluru', geometry: { type: 'Point', coordinates: [77.5946, 12.9716] } },
    { id: 'hyderabad', title: 'Hyderabad', geometry: { type: 'Point', coordinates: [78.4867, 17.385] } },
    { id: 'rajasthan', title: 'Rajasthan', geometry: { type: 'Point', coordinates: [75.7873, 26.9124] } },
    { id: 'kerala', title: 'Kerala', geometry: { type: 'Point', coordinates: [76.9366, 8.5241] } },
];