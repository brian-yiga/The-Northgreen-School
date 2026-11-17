import heroBackgroundImage from '../assets/images/backgroundImage.jpeg';
import graduationImage from '../assets/images/graduation.webp';
import residentDirectorImage from '../assets/images/elaine-alowo-matovu.png';


export const NAVIGATION_DATA = [
  {
    label: 'Discover',
    path: '/discover',
    description: 'Rooted in nature, excellence, and holistic growth in Uganda.',
    links: [
      { title: 'Vision & Mission', path: '/discover#vision', subtitle: 'Our core educational philosophy' },
      { title: "Resident Director's Message", path: '/discover#resident-director', subtitle: 'A message from our Resident Director' },
      { title: 'Our Green Campus', path: '/discover#campus', subtitle: 'Eco-friendly learning spaces' },
      { title: 'Leadership & Faculty', path: '/discover#faculty', subtitle: 'Meet our dedicated educators' },
    ],
  },
  {
    label: 'Learning',
    path: '/learning',
    description: 'Cambridge International Pathway from Early Years through Secondary.',
    links: [
      { title: 'Cambridge Early Years', path: '/learning#early-years', subtitle: 'Ages 3 – 5 • Play-based curiosity & discovery' },
      { title: 'Cambridge Primary (Years 1 – 6)', path: '/learning#primary', subtitle: 'Ages 5 – 11 • Strong global foundations' },
      { title: 'Cambridge Secondary (Years 7 – 11)', path: '/learning#secondary', subtitle: 'Ages 11 – 16 • Lower Secondary & IGCSE' },
      { title: 'Akii Co-Curriculars', path: '/learning#co-curriculars', subtitle: 'Swimming, chess, football & rowing' },
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
  kineticWords: ['curiosity.', 'nature.', 'purpose.', 'love.'],
  subheadline:
    'A nurturing, student-centred school where young minds grow with confidence, compassion, and a deep respect for the world around them.',
  image: heroBackgroundImage,
  graduationImage: graduationImage,
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

export const RESIDENT_DIRECTOR_DATA = {
  sectionTitle: "Resident Director's Message",
  name: 'Elaine Alowo-Matovu',
  role: 'Resident Director',
  headline: 'Building a school where children love to learn and grow with integrity.',
  message: [
    'Welcome to The North Green School. When we envisioned TNGS, we wanted to create more than a place of academic instruction—we set out to build a living, breathing learning community rooted in nature, empathy, and intellectual curiosity.',
    'In a rapidly changing world, our children need both strong foundational skills and the resilience to think creatively. Here, every learner is seen, heard, and guided to discover their unique strengths.',
  ],
  image: residentDirectorImage,
};

export const MDS_CORNER_DATA = RESIDENT_DIRECTOR_DATA;

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
      'Limited spaces available across Cambridge Early Years, Primary (Years 1–6), and Secondary (Years 7–11). Submit an inquiry today to schedule a family walkthrough.',
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

export const LEARNING_DATA = {
  stages: [
    {
      id: 'early-years',
      label: 'Cambridge Early Years',
      ages: 'Ages 3 – 5 • Early Years Foundation Stage',
      headline: 'Wonder-led discovery in a warm, nature-rich Cambridge environment.',
      description:
        'Following the Cambridge Early Years framework, we nurture communication, early literacy, numeracy, physical development, and social-emotional confidence through guided play and outdoor exploration.',
      highlights: [
        'Cambridge Early Years play-based phonics, storytelling, and early mathematical thinking',
        'Daily outdoor nature walks, sensory exploration, and campus garden discovery',
        'Low learner-to-educator ratios ensuring individualized warmth and care',
        'Smooth, joyful progression into Cambridge Primary Year 1',
      ],
      image:
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'primary',
      label: 'Primary Section (Years 1 – 6)',
      ages: 'Ages 5 – 11 • Cambridge Primary (Year 1 to Year 6)',
      headline: 'Building strong international foundations in literacy, numeracy, and inquiry.',
      description:
        'Across Years 1 to 6, learners follow the Cambridge Primary curriculum—connecting English, Mathematics, Science, Global Perspectives, and Digital Literacy to real-world questions.',
      highlights: [
        'Structured progression in Cambridge English, Mathematics, and Integrated Science',
        'Cambridge Global Perspectives projects that nurture critical thinking and teamwork',
        'Hands-on ecological investigations in our campus gardens and outdoor labs',
        'Cambridge Primary Checkpoint assessments in Year 6 to benchmark readiness for Secondary',
      ],
      image:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'secondary',
      label: 'Secondary Section (Years 7 – 11)',
      ages: 'Ages 11 – 16 • Cambridge Lower Secondary & IGCSE',
      headline: 'Independent scholarship, leadership, and globally recognized IGCSE pathways.',
      description:
        'Our Secondary Section guides students through Cambridge Lower Secondary (Years 7–9) and Cambridge IGCSE (Years 10–11), equipping young leaders with analytical depth and global university readiness.',
      highlights: [
        'Broad Cambridge Lower Secondary subjects (Years 7–9) culminating in Year 9 Checkpoint',
        'Tailored Cambridge IGCSE subject pathways (Years 10–11) across Sciences, Humanities, and Languages',
        'Applied STEM, coding, research seminars, and public speaking showcases',
        'Student leadership, community service, and holistic mentorship',
      ],
      image:
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    },
  ],
  coCurriculars: [
    {
      id: 'aqua-akii',
      title: 'Aqua Akii',
      category: 'Swimming Club',
      featured: true,
      description:
        'Our flagship aquatic program building water confidence, stroke technique, endurance, and competitive swimming readiness under certified swim coaches.',
      highlight: 'Off-site pool training, gala preparation & water safety',
      image:
        'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80',
      socials: {
        instagram: 'https://instagram.com',
        tiktok: 'https://tiktok.com',
      },
    },
    {
      id: 'mind-akii',
      title: 'MindAkii',
      category: 'Chess Club',
      featured: false,
      description:
        'Sharpening focus, pattern recognition, patience, and strategic foresight through structured chess coaching, peer matches, and inter-school tournaments.',
      highlight: 'Weekly tactical workshops & competitive tournament play',
      image:
        'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=900&q=80',
      socials: {
        instagram: 'https://instagram.com',
        tiktok: 'https://tiktok.com',
      },
    },
    {
      id: 'akii-bua-sports',
      title: 'Akii Bua Sports Programme & Surge Cup',
      category: 'Football & Athletics',
      featured: false,
      description:
        'Developing agility, teamwork, discipline, and game intelligence on the pitch—culminating in spirited participation in the Surge Cup football showcase.',
      highlight: 'Skill drills, Surge Cup match days & sportsmanship',
      image:
        'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80',
      socials: {
        instagram: 'https://instagram.com',
        tiktok: 'https://tiktok.com',
      },
    },
    {
      id: 'akii-rowing',
      title: 'Akii Rowing Club',
      category: 'Rowing & Water Endurance',
      featured: false,
      description:
        'Introducing young learners to balance, core strength, synchronized teamwork, and respect for Uganda’s waterways through guided rowing sessions.',
      highlight: 'Off-site water sessions, balance & team coordination',
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
      socials: {
        instagram: 'https://instagram.com',
        tiktok: 'https://tiktok.com',
      },
    },
  ],
};

export const ADMISSIONS_DATA = {
  steps: [
    {
      step: '01',
      title: 'Submit an Online Inquiry',
      description:
        'Share a few details about your child and preferred entry term so our Admissions Office can connect with you.',
    },
    {
      step: '02',
      title: 'Family Campus Tour',
      description:
        'Walk our green classrooms, meet our educators, and experience TNGS learning in action with your child.',
    },
    {
      step: '03',
      title: 'Application & Learner Play/Assessment Session',
      description:
        'Complete the application form and join a relaxed, friendly readiness session tailored to your child’s age.',
    },
    {
      step: '04',
      title: 'Offer & Welcome to the Village',
      description:
        'Receive your admission offer, complete enrollment, and attend our New Family Orientation before Term starts.',
    },
  ],
  tuitionFaqs: [
    {
      question: 'What does termly tuition cover at The North Green School?',
      answer:
        'Termly tuition includes core academic instruction, outdoor eco-lab sessions, library access, foundational learning materials, and weekly school-based co-curricular clubs. Optional transport and aftercare packages are billed separately.',
    },
    {
      question: 'Are sibling discounts or flexible installment plans available?',
      answer:
        'Yes. Families with two or more children enrolled at TNGS receive a 10% sibling tuition discount on subsequent children. Termly fees may also be paid in two structured installments upon arrangement with the Bursar.',
    },
    {
      question: 'What are the school hours and aftercare options?',
      answer:
        'Regular school hours run from 8:00 AM to 3:15 PM (Monday to Friday), with Early Years dismissal at 1:30 PM or optional supervised enrichment until 3:30 PM.',
    },
    {
      question: 'What documents are required when applying?',
      answer:
        'You will need a copy of your child’s birth certificate, immunization card, two passport-size photographs, and the most recent school report (for Primary Year 1 through Secondary applicants).',
    },
  ],
  keyDates: [
    { date: 'December 5, 2026', event: 'Early Years & Primary Open House (9:00 AM – 12:00 PM)' },
    { date: 'January 15, 2027', event: 'Priority Application Deadline for Term I 2027 Intake' },
    { date: 'January 29, 2027', event: 'New Family Orientation & Classroom Meet-and-Greet' },
    { date: 'February 1, 2027', event: 'First Day of Term I (2027 Academic Year)' },
  ],
};

export const COMMUNITY_DATA = {
  stories: [
    {
      id: 'story-1',
      tag: 'Environmental Stewardship',
      date: 'November 2026',
      title: 'Primary 4 Learners Harvest Their First Organic Kitchen Garden Crop',
      excerpt:
        'After eight weeks of composting, soil testing, and daily watering, learners harvested spinach, tomatoes, and herbs for the school kitchen.',
      image:
        'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'story-2',
      tag: 'Creative Arts',
      date: 'October 2026',
      title: 'Annual Cultural Heritage & Music Showcase Celebrates Uganda’s Diversity',
      excerpt:
        'Families gathered on the green lawn for traditional drumming, storytelling, poetry, and visual art exhibitions created by every class.',
      image:
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'story-3',
      tag: 'STEM & Inquiry',
      date: 'September 2026',
      title: 'Young Inventors Present Solar & Water-Filtration Prototypes',
      excerpt:
        'Upper Primary learners tackled real community sustainability challenges during our termly Design Thinking Expo.',
      image:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80',
    },
  ],
  parentsAssociation: {
    title: 'TNGS Parents’ Association (PA)',
    description:
      'At The North Green School, parents are active partners in every child’s education. Our Parents’ Association welcomes new families, organizes community events, and collaborates with school leadership on campus wellness initiatives.',
    initiatives: [
      'Termly Family Picnic & Community Tree-Planting Mornings',
      'New Parent Buddy Program pairing incoming families with current TNGS parents',
      'Career & Storytelling Guest Mornings in classrooms',
    ],
  },
  upcomingEvents: [
    {
      day: '05',
      month: 'DEC',
      title: 'Campus Open Day & Guided Family Tours',
      time: '9:00 AM – 12:00 PM',
      location: 'TNGS Main Campus, Kampala',
    },
    {
      day: '12',
      month: 'DEC',
      title: 'End-of-Year Learner Showcase & Carols on the Green',
      time: '10:30 AM – 1:00 PM',
      location: 'TNGS Amphitheatre Lawn',
    },
    {
      day: '29',
      month: 'JAN',
      title: '2027 New Family Orientation Morning',
      time: '9:30 AM – 11:30 AM',
      location: 'Early Years & Primary Courtyards',
    },
  ],
};