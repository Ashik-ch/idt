export interface ChatStep {
    id: string;
    question: string;
    options: { text: string; next: string }[];
}

export const chatFlow: ChatStep[] = [
    {
        id: 'welcome',
        question: '👋 Hi! How can we assist you today?',
        options: [
            { text: 'Inbound Packages', next: 'inbound' },
            { text: 'Outbound Packages', next: 'outbound' },
            { text: 'Services', next: 'services' },
            { text: 'Contact Support', next: 'contact' },
        ],
    },
    {
        id: 'inbound',
        question: '🇮🇳 Great! Which region are you interested in?',
        options: [
            { text: 'South India', next: 'end' },
            { text: 'North India', next: 'end' },
            { text: 'Back', next: 'welcome' },
        ],
    },
    {
        id: 'outbound',
        question: '🌍 Awesome! Choose your destination:',
        options: [
            { text: 'Asia', next: 'end' },
            { text: 'Europe', next: 'end' },
            { text: 'Back', next: 'welcome' },
        ],
    },
    {
        id: 'end',
        question: '✅ Thanks! Our team will contact you shortly.',
        options: [],
    },
];
