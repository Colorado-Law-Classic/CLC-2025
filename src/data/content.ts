// Content data layer for Colorado Law Classic
// This file defines the default content and types for the entire site.
// Content can be overridden via the admin panel.

export interface SiteContent {
  event: {
    name: string;
    year: number;
    edition: string;
    date: string;
    dateISO: string;
    checkIn: string;
    teeOff: string;
    location: string;
    city: string;
    state: string;
    format: string;
    costPerPlayer: number;
    foursomeCost: number;
    courseName: string;
    coursePar: number;
    courseYards: string;
    registrationUrl: string;
  };
  hero: {
    badge: string;
    heading: string;
    headingHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  impact: {
    label: string;
    heading: string;
    description: string;
    features: Array<{ title: string; description: string }>;
    amountRaised: string;
  };
  stats: Array<{ number: string; label: string }>;
  sponsors: Array<{
    name: string;
    tier: 'platinum' | 'gold' | 'hole';
    logoUrl: string;
    website: string;
    description: string;
  }>;
  sponsorTiers: Array<{
    name: string;
    price: string;
    benefits: string[];
  }>;
  gallery: Array<{
    src: string;
    alt: string;
    year: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  footer: {
    description: string;
    email: string;
  };
  anniversary: {
    years: number;
    tagline: string;
    story: string[];
  };
}

export const defaultContent: SiteContent = {
  event: {
    name: "Colorado Law Classic",
    year: 2025,
    edition: "14th Annual",
    date: "August 17, 2025",
    dateISO: "2025-08-17T07:30:00-06:00",
    checkIn: "6:30 AM",
    teeOff: "7:30 AM",
    location: "City Park Golf Course",
    city: "Denver",
    state: "CO",
    format: "4-person scramble",
    costPerPlayer: 150,
    foursomeCost: 600,
    courseName: "City Park Golf Course",
    coursePar: 70,
    courseYards: "6,703",
    registrationUrl: "/register",
  },
  hero: {
    badge: "2025 Tournament Edition",
    heading: "A Legacy of",
    headingHighlight: "Excellence",
    subtitle: "The premier charity golf tournament benefiting CU Law School. Fourteen years of tradition, camaraderie, and purpose.",
    ctaPrimary: "Register to Play",
    ctaSecondary: "View Sponsorships",
  },
  impact: {
    label: "The Mission",
    heading: "The Colorado Law Classic",
    description: "The Colorado Law Classic brings together the legal community for a day of golf, camaraderie, and giving back. Join us at City Park Golf Course for our annual scramble tournament.",
    features: [],
    amountRaised: "",
  },
  stats: [
    { number: "14", label: "Years of Tradition" },
    { number: "100%", label: "Community" },
  ],
  sponsors: [
    {
      name: "Bartic Group",
      tier: "platinum",
      logoUrl: "/images/bartic-group.jpg",
      website: "https://www.barticgroup.com",
      description: "Premier real estate and investment firm supporting Colorado Law students.",
    },
    {
      name: "Womble Bond Dickinson",
      tier: "gold",
      logoUrl: "/images/womble-bond-dickinson.jpg",
      website: "https://www.womblebonddickinson.com",
      description: "Transatlantic law firm with deep Colorado roots and commitment to legal education.",
    },
    {
      name: "HROP Law",
      tier: "hole",
      logoUrl: "/images/hrop.png",
      website: "https://www.hroplaw.com",
      description: "Hamre, Rodriguez, Ostrander & Prescott - trusted legal partners in Colorado.",
    },
  ],
  sponsorTiers: [
    {
      name: "Platinum",
      price: "$2,500",
      benefits: [
        "Includes golf for four players",
        "Signage on the course and at registration",
        "Recognition in all event materials",
      ],
    },
    {
      name: "Gold",
      price: "$2,000",
      benefits: [
        "Includes golf for four players",
        "Signage at one hole",
        "Name recognition in event materials",
      ],
    },
    {
      name: "Hole Sponsor",
      price: "$1,500",
      benefits: [
        "Includes golf for two players",
        "Signage at one hole",
      ],
    },
    {
      name: "Hole Sponsor (without golf)",
      price: "$1,000",
      benefits: [
        "Signage at one hole",
        "Recognition in event materials",
      ],
    },
  ],
  gallery: [
    { src: "/images/gallery/2025-1.jpg", alt: "Colorado Law Classic flyer", year: "2025" },
    { src: "/images/gallery/2025-2.jpg", alt: "Colorado Law Classic kickoff speaker", year: "2025" },
    { src: "/images/gallery/golfers-group.jpg", alt: "2024 Colorado Law Classic golfers", year: "2024" },
    { src: "/images/gallery/trophy-team.jpg", alt: "2024 Colorado Law Classic winning team", year: "2024" },
  ],
  faq: [
    {
      question: "What should I wear?",
      answer: "Golf-appropriate attire is required. Please wear collared shirts and golf shoes. Denim of any kind is not permitted. Dress in layers for August weather in Denver and don't forget sunscreen and a hat!",
    },
    {
      question: "Where do I park?",
      answer: "Parking is available on-site at City Park Golf Course. Volunteers will direct you to the reserved tournament parking area on the day of the event.",
    },
    {
      question: "Is my registration tax-deductible?",
      answer: "For income tax purposes, the approximate value of goods and services exchanged per golfer is $100. Please consult your tax advisor regarding tax-deductible amounts.",
    },
    {
      question: "What's the event schedule?",
      answer: "Check-in opens at 6:30 AM and the first tee time is at 7:30 AM. Breakfast will be available during check-in. Lunch and awards take place immediately following play.",
    },
    {
      question: "Can I register as an individual?",
      answer: "Absolutely! Individual players are welcome. We will pair you with other individual registrants to form a team.",
    },
    {
      question: "How do sponsors benefit?",
      answer: "Sponsors receive brand exposure on our website and at the event, recognition on social media, complimentary golfer packages and opportunities to network with Colorado Law alumni and the local legal community. Custom sponsorship packages are available.",
    },
    {
      question: "Is there a rain date?",
      answer: "The tournament will be played rain or shine. In the event of severe weather, we will coordinate with the course and notify participants of alternate arrangements.",
    },
    {
      question: "How can I volunteer?",
      answer: "We couldn't run the event without volunteers! Please email us at coloradolawgolf@gmail.com if you're interested in donating your time.",
    },
  ],
  footer: {
    description: "A charity golf tournament supporting CU Law School.",
    email: "coloradolawgolf@gmail.com",
  },
  anniversary: {
    years: 14,
    tagline: "A Legacy of Giving Back",
    story: [
      "For fourteen years, the Colorado Law Classic has brought together alumni, legal professionals, and friends of Colorado Law for a day of friendly competition and meaningful giving.",
      "What started as a small gathering of golf enthusiasts has grown into one of the premier charity events supporting CU Law School. Each year, participants tee off knowing their entry fees and sponsorships directly support the next generation of legal professionals.",
      "From early morning check-ins to the final putt, the Colorado Law Classic represents the best of our community: camaraderie, generosity, and a shared commitment to education.",
    ],
  },
};
