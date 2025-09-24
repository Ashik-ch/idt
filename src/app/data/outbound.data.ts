
interface CountryInfo {
    color: number;
    details: string;
    image: string;
    countryCode: string;
}
// Highlighted countries with their details
export const highlightedCountries: Record<string, CountryInfo> = {
    "US": {
        color: 0xff6f61,
        details: "United States: Land of opportunities and diverse landscapes",
        image: "assets/images/a.jpg",
        countryCode: "usa"
    },
    "IN": {
        color: 0x6a5acd,
        details: "India: Incredible diversity, rich culture and heritage",
        image: "assets/images/b.jpg",
        countryCode: "india"
    },
    "AE": {
        color: 0xffa500,
        details: "UAE: Modern marvels and desert adventures",
        image: "assets/images/c.jpg",
        countryCode: "uae"
    },
    "GB": {
        color: 0x008000,
        details: "United Kingdom: Royal heritage and modern charm",
        image: "assets/images/d.jpg",
        countryCode: "uk"
    },
    "SG": {
        color: 0x1e90ff,
        details: "Singapore: Garden city with futuristic architecture",
        image: "assets/images/e.jpg",
        countryCode: "singapore"
    },
    "LK": {
        color: 0xdc143c,
        details: "Sri Lanka: Pearl of the Indian Ocean",
        image: "assets/images/f.jpg",
        countryCode: "sri-lanka"
    },
    "ZA": {
        color: 0x800080,
        details: "South Africa: Rainbow nation with stunning wildlife",
        image: "assets/images/c.jpg",
        countryCode: "south-africa"
    }
};

export const outBoundPackages = [
    { code: 'uae', title: 'UAE', subtitle: 'United Arab Emirates', desc: 'Dubai, Abu Dhabi, Modern Marvels', image: 'assets/images/a.jpg' },
    { code: 'saudi-arabia', title: 'Saudi Arabia', subtitle: 'Kingdom of Saudi Arabia', desc: 'Mecca, Medina, Riyadh', image: 'assets/images/e.jpg' },
    { code: 'qatar', title: 'Qatar', subtitle: 'Pearl of the Gulf', desc: 'Doha, Desert Adventures', image: 'assets/images/c.jpg' },
    { code: 'oman', title: 'Oman', subtitle: 'Sultanate of Oman', desc: 'Muscat, Mountains, Deserts', image: 'assets/images/e.jpg' },
    { code: 'maldives', title: 'Maldives', subtitle: 'Island Paradise', desc: 'Overwater Villas, Beaches', image: 'assets/images/g.jpg' },
    { code: 'thailand', title: 'Thailand', subtitle: 'Land of Smiles', desc: 'Bangkok, Phuket, Culture', image: 'assets/images/c.jpg' },
    { code: 'singapore', title: 'Singapore', subtitle: 'Lion City', desc: 'Marina Bay, Gardens, Shopping', image: 'assets/images/e.jpg' },
    { code: 'malaysia', title: 'Malaysia', subtitle: 'Truly Asia', desc: 'Kuala Lumpur, Langkawi', image: 'assets/images/c.jpg' },
    { code: 'indonesia', title: 'Indonesia', subtitle: 'Emerald of the Equator', desc: 'Bali, Jakarta, Komodo', image: 'assets/images/g.jpg' },
    { code: 'sri-lanka', title: 'Sri Lanka', subtitle: 'Pearl of the Indian Ocean', desc: 'Colombo, Kandy, Beaches', image: 'assets/images/b.jpg' },
    { code: 'nepal', title: 'Nepal', subtitle: 'Land of Himalayas', desc: 'Kathmandu, Everest, Temples', image: 'assets/images/f.jpg' },
    { code: 'bhutan', title: 'Bhutan', subtitle: 'Land of Thunder Dragon', desc: 'Thimphu, Paro, Happiness', image: 'assets/images/f.jpg' },
    { code: 'uk', title: 'UK', subtitle: 'United Kingdom', desc: 'London, Edinburgh, History', image: 'assets/images/c.jpg' },
    { code: 'europe', title: 'Europe', subtitle: 'European Union', desc: 'France, Italy, Germany, Spain', image: 'assets/images/a.jpg' },
    { code: 'usa', title: 'USA', subtitle: 'United States of America', desc: 'New York, LA, Las Vegas', image: 'assets/images/b.jpg' }
];
