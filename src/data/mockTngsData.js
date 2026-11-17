export const NAVIGATION_DATA = [
  {
    label: 'Discover',
    path: '/discover',
    description: 'Rooted in nature, excellence, and holistic growth in Uganda.',
    links: [
      { title: 'Vision & Mission', path: '/discover#vision', subtitle: 'Our core educational philosophy' },
      { title: "MD's Corner", path: '/discover#mds-corner', subtitle: 'A message from our Managing Director' },
      { title: 'Our Green Campus', path: '/discover#campus', subtitle: 'Eco-friendly learning spaces' },
      { title: 'Leadership & Faculty', path: '/discover#faculty', subtitle: 'Meet our dedicated educators' },
    ],
  },
  {
    label: 'Learning',
    path: '/learning',
    description: 'Student-centred inquiry from Early Years through Upper Primary.',
    links: [
      { title: 'Early Years & Kindergarten', path: '/learning#early-years', subtitle: 'Play-based curiosity & discovery' },
      { title: 'Lower Primary (P1 – P3)', path: '/learning#lower-primary', subtitle: 'Building strong foundations' },
      { title: 'Upper Primary (P4 – P7)', path: '/learning#upper-primary', subtitle: 'Critical thinking & leadership' },
      { title: 'Co-Curriculars & Arts', path: '/learning#co-curriculars', subtitle: 'Sports, music, and environmental clubs' },
    ],
  },
  {
    label: 'Admissions',
    path: '/admissions',
    description: 'Join a welcoming, vibrant school community.',
    links: [
      { title: 'Admissions Process', path: '/admissions#process', subtitle: 'Step-by-step application guide' },
      { title: 'Book a Campus Tour', path: '/admissions#visit', subtitle: 'Experience TNGS in person' },
      { title: 'Tuition & Fees', path: '/admissions#tuition', subtitle: 'Transparent termly structure' },
      { title: 'Key Dates & Term Calendar', path: '/admissions#dates', subtitle: '2026–2027 academic milestones' },
    ],
  },
  {
    label: 'Community',
    path: '/community',
    description: 'Families, educators, and students growing together.',
    links: [
      { title: 'School Stories & News', path: '/community#stories', subtitle: 'Life inside and outside the classroom' },
      { title: 'Parents Association', path: '/community#parents', subtitle: 'Partnering in every child’s journey' },
      { title: 'Events & Calendar', path: '/community#events', subtitle: 'Upcoming open days & showcases' },
    ],
  },
];

export const HERO_DATA = {
  eyebrow: 'The North Green School • Kampala, Uganda',
  headlinePrefix: 'At TNGS, learning begins with',
  kineticWords: ['curiosity.', 'nature.', 'purpose.', 'community.'],
  subheadline:
    'A nurturing, student-centred school where young minds grow with confidence, compassion, and a deep respect for the world around them.',
  image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80',
};

export const PILLARS_DATA = [
  {
    id: 'nature',
    kicker: 'Our Roots in the Land',
    title: 'Nature.',
    description: 'Our lush green campus serves as a living laboratory where students explore ecology and sustainability.',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80',
    accentColor: 'bg-tngs-green',
  },
  {
    id: 'inquiry',
    kicker: 'Our Eyes on the Future',
    title: 'Inquiry.',
    description: 'We nurture independent thinkers who ask bold questions and collaborate across disciplines.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    accentColor: 'bg-tngs-lightGreen',
  },
  {
    id: 'community',
    kicker: 'Our Hearts Together',
    title: 'Village.',
    description: 'Every child is known by name—supported by teachers and families working side by side.',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=80',
    accentColor: 'bg-tngs-charcoal',
  },
];

export const MDS_CORNER_DATA = {
  sectionTitle: "MD's Corner",
  name: 'Managing Director',
  headline: 'Building a school where children love to learn and grow with integrity.',
  message: [
    'Welcome to The North Green School. When we envisioned TNGS, we wanted to create more than a place of academic instruction—we set out to build a living, breathing learning community rooted in nature, empathy, and intellectual curiosity.',
    'In a rapidly changing world, our children need both strong foundational skills and the resilience to think creatively. Here, every learner is seen, heard, and guided to discover their unique strengths.',
  ],
  image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=80',
};

export const NOTICES_DATA = [
  {
    id: 'notice-1',
    tag: 'Open Day Event',
    date: 'Saturday, Dec 5, 2026 • 9:00 AM – 12:00 PM',
    title: 'Early Years & Primary Campus Experience',
    summary:
      'Tour our green classrooms, meet our educators, and see how inquiry-based learning comes alive at The North Green School.',
    ctaText: 'Register to Visit',
    actionType: 'inquiry',
  },
  {
    id: 'notice-2',
    tag: 'Admissions Notice',
    date: 'Term I 2027 Intake',
    title: '2027 Admissions Now Open',
    summary:
      'Limited spaces available across Kindergarten and Primary levels. Submit an inquiry today to schedule a family walkthrough.',
    ctaText: 'Explore Admissions',
    actionType: 'link',
    path: '/admissions',
  },
];

export const COMMUNITY_SPOTLIGHTS = [
  {
    id: 1,
    name: 'Amina & David',
    role: 'Primary 5 Learners',
    quote: 'Beyond what’s possible',
    story: 'Leading our campus biodiversity mapping project and presenting findings at the termly learner showcase.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Sarah Namukasa',
    role: 'Lower Primary Lead Educator',
    quote: 'Confidence to succeed',
    story: 'Creating calm, responsive classrooms where every learner’s curiosity shapes the daily inquiry.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Joseph Kato',
    role: 'Campus Grounds & Eco-Coordinator',
    quote: 'Feeding curiosity',
    story: 'Guiding learners as they cultivate organic vegetables from seed to harvest in our kitchen garden.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Grace & Ethan',
    role: 'Student Council Peacemakers',
    quote: 'Creating new paths',
    story: 'Championing peer mentorship, kindness initiatives, and welcoming new families to TNGS.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
  },
];

export const DISCOVER_DATA = {
  vision: {
    eyebrow: 'Vision & Mission',
    title: 'Nurturing curious minds and compassionate citizens.',
    mission:
      'To provide an inspiring, student-centred education rooted in inquiry, environmental stewardship, and strong moral values—equipping every learner in Uganda to thrive with confidence and purpose.',
    principles: [
      {
        title: 'Child-Centred Curiosity',
        description: 'We meet each learner where they are, turning natural questions into deep, joyful understanding.',
      },
      {
        title: 'Rooted in Nature',
        description: 'Daily outdoor exploration fosters responsibility, resilience, and care for our shared environment.',
      },
      {
        title: 'Character & Community',
        description: 'Kindness, integrity, and mutual respect guide how students, teachers, and families interact every day.',
      },
    ],
  },
  campusSpaces: [
    {
      title: 'Bright, Open Classrooms',
      description: 'Naturally ventilated learning studios designed for collaboration, reading, and hands-on discovery.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'The Kitchen & Eco-Garden',
      description: 'An outdoor living laboratory where learners plant, harvest, and study ecology firsthand.',
      image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Creative Arts & Play Grounds',
      description: 'Safe, green outdoor fields and dedicated studios for music, visual arts, and physical education.',
      image: 'https://images.unsplash.com/photo-1564429238817-39f8928f7b78?auto=format&fit=crop&w=900&q=80',
    },
  ],
  leadership: [
    {
      name: 'Grace Nakato',
      role: 'Head of Academics',
      bio: '14+ years leading primary curriculum innovation and inquiry-based teacher mentorship.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'David Ssemwogerere',
      role: 'Dean of Student Life & Co-Curriculars',
      bio: 'Passionate about athletics, student leadership, and holistic social-emotional growth.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Rebecca Namuli',
      role: 'Early Years Coordinator',
      bio: 'Specialist in foundational literacy, play-based learning, and smooth Kindergarten transitions.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    },
  ],
};