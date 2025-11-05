export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  instructor: string;
  price: number;
  rating: number;
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string[];
  image: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  requirements: string[];
  whatYouWillLearn: string[];
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'SSC CGL Complete Preparation 2024-25',
    slug: 'ssc-cgl-complete-preparation-2024',
    description: 'Master the Staff Selection Commission Combined Graduate Level (SSC CGL) exam with our comprehensive course covering Tier 1, 2, 3 & 4. Includes 100+ mock tests and 5000+ practice questions.',
    instructor: 'Dr. Rajesh Kumar (Ex-SSC Officer)',
    price: 5999,
    rating: 4.8,
    students: 52000,
    duration: '200 hours',
    level: 'Intermediate',
    category: ['SSC', 'Government Jobs', 'SSC CGL', 'Banking & Finance'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format', // CGL course
    createdAt: '2024-01-15',
    updatedAt: '2024-11-20',
    content: 'This comprehensive course covers all four tiers of SSC CGL examination. Get access to 200+ hours of video lectures, 5000+ practice questions, 50+ full-length mock tests, and detailed solutions for previous year papers from 2010-2024.',
    requirements: [
      'Basic understanding of 10+2 level subjects',
      'Dedication to study 3-4 hours daily',
      'Access to computer or smartphone'
    ],
    whatYouWillLearn: [
      'Master Quantitative Aptitude with shortcuts and tricks',
      'Logical and Analytical Reasoning techniques',
      'English Grammar, Vocabulary, and Comprehension',
      'General Awareness and Current Affairs (2023-2024)',
      'Time management and exam strategy'
    ]
  },
  {
    id: '2',
    title: 'UPSC CSE 2024-25: Complete GS + CSAT + Essay',
    slug: 'upsc-civil-services-complete-course-2024',
    description: 'Comprehensive UPSC Civil Services Examination (CSE) preparation with a structured 12-month program covering GS Prelims, Mains, CSAT, Essay, and Interview preparation. Includes daily current affairs and test series.',
    instructor: 'Dr. Priya Sharma (Ex-IAS, 12+ Years Experience)',
    price: 29999,
    rating: 4.9,
    students: 32000,
    duration: '600 hours',
    level: 'Advanced',
    category: ['UPSC', 'Civil Services', 'IAS', 'IPS', 'IFS'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format', // Government building
    createdAt: '2023-12-01',
    updatedAt: '2024-11-30',
    content: 'Complete UPSC preparation with 500+ hours of structured content, daily current affairs, answer writing practice, test series for both Prelims and Mains, and personalized mentorship from successful candidates.',
    requirements: [
      'Graduate degree from recognized university',
      'Commitment to study 6-8 hours daily',
      'Basic understanding of Indian polity and history'
    ],
    whatYouWillLearn: [
      'Complete GS Paper 1-4 coverage with notes',
      'Optional subject preparation (History/Geography/Public Admin)',
      'Answer writing skills and essay writing',
      'Current Affairs analysis and integration',
      'Interview and personality test preparation'
    ]
  },
  {
    id: '3',
    title: 'SSC CHSL 2024-25: LDC/DEO/PA/SA',
    slug: 'ssc-chsl-complete-preparation-2024',
    description: 'Complete preparation for SSC CHSL (10+2) exam for Lower Division Clerk (LDC), Data Entry Operator (DEO), Postal Assistant (PA) & Sorting Assistant (SA) posts. Includes typing test preparation and descriptive paper guidance.',
    instructor: 'Prof. Amit Verma (10+ Years Experience)',
    price: 3999,
    rating: 4.7,
    students: 68000,
    duration: '150 hours',
    level: 'Beginner',
    category: ['SSC', 'SSC CHSL', 'Government Jobs', '10+2 Level'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format', // Office workspace
    createdAt: '2023-11-15',
    updatedAt: '2024-12-10',
    content: 'Complete preparation for SSC CHSL examination with focus on all three tiers - Computer Based Exam, Descriptive Paper, and Typing Test. Includes 100+ mock tests and previous year solved papers.',
    requirements: [
      '10+2 or equivalent qualification',
      'Basic computer knowledge',
      'Typing practice setup (for Tier-3)'
    ],
    whatYouWillLearn: [
      'Quantitative Aptitude with speed techniques',
      'General Intelligence and Reasoning',
      'English Language and Comprehension',
      'General Awareness and Current Affairs',
      'Descriptive Paper (Essay and Letter Writing)'
    ]
  },
  {
    id: '4',
    title: 'Banking 2024-25: IBPS PO/SBI PO/RRB PO',
    slug: 'banking-ibps-po-complete-course-2024',
    description: 'Complete preparation for IBPS PO, SBI PO, and RRB PO exams. Covers Quantitative Aptitude, Reasoning, English Language, General Awareness, and Computer Knowledge with 200+ mock tests.',
    instructor: 'CA Neha Gupta (Ex-Bank Manager, 15+ Years Exp)',
    price: 7999,
    rating: 4.8,
    students: 45000,
    duration: '200 hours',
    level: 'Intermediate',
    category: ['Banking', 'IBPS PO', 'SBI PO', 'RRB PO', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format',
    createdAt: '2023-12-15',
    updatedAt: '2024-12-15',
    content: 'Comprehensive banking exam preparation with focus on Prelims and Mains pattern. Includes sectional tests, full-length mocks, interview preparation, and group discussion practice sessions.',
    requirements: [
      'Graduate degree from recognized university',
      'Basic knowledge of banking sector',
      'Computer with internet connection'
    ],
    whatYouWillLearn: [
      'Advanced Quantitative Aptitude and Data Interpretation',
      'Logical and Analytical Reasoning',
      'English Language and Reading Comprehension',
      'Banking and Financial Awareness',
      'Computer Knowledge and Digital Banking'
    ]
  },
  {
    id: '5',
    title: 'RRB NTPC & Group D 2024-25: Complete CBT Course',
    slug: 'railway-rrb-ntpc-group-d-complete-course',
    description: 'Comprehensive preparation for Railway Recruitment Board (RRB) NTPC and Group D exams. Covers Mathematics, General Intelligence, General Science, and General Awareness with 150+ mock tests.',
    instructor: 'Er. Suresh Yadav (Ex-Railway Officer, 15+ Years Exp)',
    price: 3499,
    rating: 4.7,
    students: 75000,
    duration: '120 hours',
    level: 'Beginner',
    category: ['Railway', 'RRB NTPC', 'RRB Group D', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    createdAt: '2023-12-10',
    updatedAt: '2024-09-20',
    content: 'Complete Railway exam preparation covering both NTPC and Group D patterns. Includes 150+ mock tests, previous year papers, and special focus on General Science and Current Affairs for railway exams.',
    requirements: [
      '10th or 12th pass (depending on post)',
      'Basic understanding of mathematics',
      'Dedication to practice daily'
    ],
    whatYouWillLearn: [
      'Mathematics and Numerical Ability',
      'General Intelligence and Reasoning',
      'General Science (Physics, Chemistry, Biology)',
      'General Awareness and Current Affairs',
      'CBT exam strategy and time management'
    ]
  },
  {
    id: '6',
    title: 'SSC JE 2024-25: Civil Engineering (Paper I & II)',
    slug: 'ssc-je-civil-engineering-2024',
    description: 'Comprehensive preparation for SSC Junior Engineer (Civil) exam. Covers all technical subjects, general awareness, and reasoning with 100+ mock tests and previous year papers.',
    instructor: 'Er. Vikram Mehta (GATE AIR 12, 10+ Years Exp)',
    price: 9999,
    rating: 4.8,
    students: 38000,
    duration: '250 hours',
    level: 'Intermediate',
    category: ['SSC', 'Engineering', 'SSC JE', 'Civil Engineering', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format', // Finance and banking
    createdAt: '2024-01-10',
    updatedAt: '2024-11-15',
    content: 'Comprehensive course for SSC JE Civil Engineering exam covering all technical subjects, previous year papers, and mock tests with detailed solutions.',
    requirements: [
      'Diploma/Degree in Civil Engineering',
      'Basic understanding of core civil engineering subjects',
      'Dedication to study 4-5 hours daily'
    ],
    whatYouWillLearn: [
      'Building Materials and Construction',
      'Strength of Materials and Structural Analysis',
      'RCC and Steel Design',
      'Fluid Mechanics and Hydraulics',
      'Environmental Engineering and Surveying'
    ]
  },
  {
    id: '7',
    title: 'UPSC CDS 2024-25: English, GK & Mathematics',
    slug: 'upsc-cds-english-gk-2024',
    description: 'Complete preparation for UPSC Combined Defence Services (CDS) exam. Special focus on English, General Knowledge, and Mathematics with 50+ full-length tests and interview guidance.',
    instructor: 'Col. Rakesh Sharma (Retd., 25+ Years in Indian Army)',
    price: 8999,
    rating: 4.8,
    students: 32000,
    duration: '180 hours',
    level: 'Intermediate',
    category: ['UPSC', 'Defense', 'CDS', 'NDA', 'Military'],
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format', // Military/defense
    createdAt: '2024-02-15',
    updatedAt: '2024-10-30',
    content: 'Focused preparation for UPSC CDS exam with special emphasis on English and General Knowledge sections. Includes 1000+ practice questions and 20+ full-length tests.',
    requirements: [
      '12th pass (for OTA)',
      'Graduation (for IMA, AFA, INA)',
      'Basic knowledge of current affairs'
    ],
    whatYouWillLearn: [
      'English Grammar and Vocabulary',
      'Reading Comprehension',
      'Current Affairs and General Knowledge',
      'History, Geography, and Polity',
      'Defense and Military Awareness'
    ]
  },
  {
    id: '8',
    title: 'RBI Grade B 2024-25: Phase 1, 2 & Interview',
    slug: 'rbi-grade-b-2024-phase-1-2',
    description: 'Comprehensive preparation for RBI Grade B Officer exam. Covers Phase 1 (Prelims), Phase 2 (Mains), and Interview with special focus on Economic & Social Issues and Finance & Management.',
    instructor: 'Dr. Anjali Khanna (Ex-RBI, 15+ Years in Banking)',
    price: 14999,
    rating: 4.9,
    students: 22000,
    duration: '300 hours',
    level: 'Advanced',
    category: ['Banking', 'RBI', 'Grade B', 'Finance', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format', // Finance and banking
    createdAt: '2023-12-20',
    updatedAt: '2024-10-15',
    content: 'Comprehensive course for RBI Grade B exam covering Phase 1 (Prelims) and Phase 2 (Mains) with special focus on Economic & Social Issues and Finance & Management.',
    requirements: [
      'Graduation in any discipline with 60% marks',
      'Basic understanding of economics and finance',
      'Good command over English language'
    ],
    whatYouWillLearn: [
      'General Awareness and Current Affairs',
      'English Language and Writing Skills',
      'Quantitative Aptitude and Reasoning',
      'Economic and Social Issues',
      'Finance and Management Concepts'
    ]
  },
  {
    id: '9',
    title: 'SSC CPO 2024-25: SI (Delhi Police & CAPF)',
    slug: 'ssc-cpo-2024-si-capf',
    description: 'Comprehensive preparation for SSC CPO exam for Sub-Inspector in Delhi Police and Central Armed Police Forces (CAPF). Includes PET/PST guidance and interview preparation.',
    instructor: 'Retd. ACP Rajeev Singh (25+ Years in Delhi Police)',
    price: 7999,
    rating: 4.7,
    students: 48000,
    duration: '200 hours',
    level: 'Intermediate',
    category: ['SSC', 'Police', 'CAPF', 'Defense', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format', // Professional
    createdAt: '2024-01-05',
    updatedAt: '2024-11-20',
    content: 'Comprehensive preparation for SSC CPO exam including Paper 1, Physical Standard Test (PST), Physical Endurance Test (PET), and Medical Examination.',
    requirements: [
      'Graduation in any discipline',
      'Physical fitness as per SSC norms',
      'Age between 20-25 years (relaxation as per rules)'
    ],
    whatYouWillLearn: [
      'General Intelligence and Reasoning',
      'General Knowledge and Current Affairs',
      'Quantitative Aptitude',
      'English Language and Comprehension',
      'Physical Test preparation and strategy'
    ]
  },
  {
    id: '10',
    title: 'IBPS SO 2024 - IT Officer Professional',
    slug: 'ibps-so-it-officer-2024',
    description: 'Specialized course for IBPS SO IT Officer exam covering professional knowledge, reasoning, and banking awareness.',
    instructor: 'Prof. Sanjay Mehta',
    price: 14999,
    rating: 4.8,
    students: 12500,
    duration: '200 hours',
    level: 'Advanced',
    category: ['Banking', 'IBPS', 'IT Officer', 'Professional'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format', // Professional
    createdAt: '2023-11-15',
    updatedAt: '2024-10-10',
    content: 'Comprehensive preparation for IBPS SO IT Officer exam with focus on professional knowledge, reasoning, and banking awareness. Includes 50+ mock tests and previous year papers.',
    requirements: [
      'B.E./B.Tech in IT/Computer Science',
      'Basic understanding of banking operations',
      'Knowledge of programming and databases'
    ],
    whatYouWillLearn: [
      'Database Management Systems',
      'Data Structures and Algorithms',
      'Computer Networks and Security',
      'Software Engineering',
      'Banking Technology and Digital Banking'
    ]
  },
  {
    id: '11',
    title: 'SSC GD Constable 2024-25: Complete CBT & PET',
    slug: 'ssc-gd-constable-2024',
    description: 'Comprehensive preparation for SSC GD Constable exam. Covers CBT (Computer Based Test), Physical Efficiency Test (PET), and Medical Examination with special focus on physical training.',
    instructor: 'Retd. DSP Harish Kumar (30+ Years in Police Service)',
    price: 4499,
    rating: 4.5,
    students: 72000,
    duration: '120 hours',
    level: 'Beginner',
    category: ['SSC', 'Police', 'Defense', 'Paramilitary', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format', // Police/security
    createdAt: '2024-02-01',
    updatedAt: '2024-12-15',
    content: 'Comprehensive course for SSC GD Constable exam covering General Intelligence, Reasoning, General Knowledge, and Elementary Mathematics with physical test preparation.',
    requirements: [
      '10th pass from recognized board',
      'Age between 18-23 years',
      'Physical standards as per SSC norms'
    ],
    whatYouWillLearn: [
      'General Intelligence and Reasoning',
      'General Knowledge and Current Affairs',
      'Elementary Mathematics',
      'English/Hindi Language',
      'Physical Efficiency Test (PET) preparation'
    ]
  },
  {
    id: '12',
    title: 'UPSC EPFO APFC 2024-25: Complete Course',
    slug: 'upsc-epfo-apfc-2024',
    description: 'Comprehensive preparation for UPSC EPFO APFC exam. Covers General Ability, Indian Polity, Economy, Industrial Relations, and Social Security in India with 100+ mock tests.',
    instructor: 'Dr. Amit Khanna (Ex-EPFO Officer, 20+ Years Exp)',
    price: 11999,
    rating: 4.8,
    students: 28000,
    duration: '220 hours',
    level: 'Intermediate',
    category: ['UPSC', 'EPFO', 'APFC', 'Labour Laws', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format', // Office/EPFO
    createdAt: '2023-12-01',
    updatedAt: '2024-09-30',
    content: 'Complete preparation for UPSC EPFO APFC exam with focus on General Ability, Indian Freedom Struggle, Current Events, and Social Security in India.',
    requirements: [
      'Graduation in any discipline',
      'Age between 21-30 years',
      'Basic knowledge of social security concepts'
    ],
    whatYouWillLearn: [
      'General English and Comprehension',
      'Indian Polity and Economy',
      'General Accounting Principles',
      'Industrial Relations and Labour Laws',
      'Social Security in India'
    ]
  },
  {
    id: '13',
    title: 'SSC MTS 2024-25: Havaldar & Multi-Tasking Staff',
    slug: 'ssc-mts-2024',
    description: 'Comprehensive preparation for SSC Multi-Tasking Staff (MTS) exam. Covers Numerical Ability, Reasoning, English, and General Awareness with 150+ practice tests.',
    instructor: 'Rajesh Khanna (SSC Expert, 12+ Years Exp)',
    price: 2999,
    rating: 4.5,
    students: 75000,
    duration: '120 hours',
    level: 'Beginner',
    category: ['SSC', 'MTS', 'Havaldar', 'Peon', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format',
    createdAt: '2024-02-20',
    updatedAt: '2024-12-01',
    content: 'Comprehensive preparation for SSC MTS exam covering Numerical Ability, Reasoning, General English, and General Awareness.',
    requirements: [
      '10th pass from recognized board',
      'Age between 18-25 years',
      'Basic knowledge of English and Mathematics'
    ],
    whatYouWillLearn: [
      'Numerical and Mathematical Ability',
      'Reasoning Ability and Problem Solving',
      'English Language and Comprehension',
      'General Awareness',
      'Exam Strategy and Time Management'
    ]
  },
  {
    id: '14',
    title: 'IBPS RRB 2024-25: Officer Scale I, II, III',
    slug: 'ibps-rrb-2024-officer-scale',
    description: 'Comprehensive preparation for IBPS RRB Officer Scale I, II, and III exams. Covers Reasoning, Quantitative Aptitude, General Awareness, and Professional Knowledge.',
    instructor: 'CA Rakesh Malhotra (Ex-Bank Manager, 18+ Years Exp)',
    price: 9999,
    rating: 4.8,
    students: 42000,
    duration: '250 hours',
    level: 'Intermediate',
    category: ['Banking', 'IBPS', 'RRB', 'Officer Scale', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format', // Banking/RRB
    createdAt: '2023-11-20',
    updatedAt: '2024-10-05',
    content: 'Comprehensive course for IBPS RRB Officer Scale I, II, and III exams covering Reasoning, Quantitative Aptitude, General Awareness, English/Hindi Language, and Professional Knowledge.',
    requirements: [
      'Graduation in any discipline (Scale I)',
      'Relevant experience for Scale II & III',
      'Basic knowledge of banking and finance'
    ],
    whatYouWillLearn: [
      'Reasoning Ability',
      'Quantitative Aptitude and Data Interpretation',
      'General Awareness and Banking Awareness',
      'English/Hindi Language',
      'Professional Knowledge (for Scale II & III)'
    ]
  },
  {
    id: '15',
    title: 'UPSC NDA/NA 2024-25: Mathematics & GAT',
    slug: 'upsc-nda-na-2024-maths-gat',
    description: 'Comprehensive preparation for UPSC NDA/NA exam. Covers Mathematics, English, General Knowledge, and Science with 100+ mock tests and SSB interview guidance.',
    instructor: 'Col. Sanjay Kumar (Retd., 30+ Years in Indian Army)',
    price: 12999,
    rating: 4.9,
    students: 32000,
    duration: '300 hours',
    level: 'Intermediate',
    category: ['UPSC', 'Defense', 'NDA', 'NA', 'Military'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format', // NDA/Defense
    createdAt: '2023-12-15',
    updatedAt: '2024-10-20',
    content: 'Comprehensive preparation for UPSC NDA/NA exam covering Mathematics and General Ability Test (GAT) including English, General Knowledge, and Science.',
    requirements: [
      '10+2 or equivalent (for NDA)',
      '10+2 with Physics and Mathematics (for NA)',
      'Age between 16.5-19.5 years'
    ],
    whatYouWillLearn: [
      'Algebra and Trigonometry',
      'Differential and Integral Calculus',
      'English Grammar and Vocabulary',
      'General Knowledge and Current Affairs',
      'Physics, Chemistry, and Biology (for GAT)'
    ]
  },
  {
    id: '16',
    title: 'SSC Stenographer 2024-25: Grade C & D (English)',
    slug: 'ssc-stenographer-2024',
    description: 'Comprehensive preparation for SSC Stenographer exam. Covers English Language, General Awareness, and Shorthand (100/80 wpm) with dictation practice and transcription training.',
    instructor: 'Mrs. Sunita Kapoor (Ex-Stenographer, Supreme Court, 20+ Years Exp)',
    price: 6999,
    rating: 4.7,
    students: 35000,
    duration: '180 hours',
    level: 'Intermediate',
    category: ['SSC', 'Stenographer', 'Court', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format',
    createdAt: '2024-01-25',
    updatedAt: '2024-11-25',
    content: 'Comprehensive course for SSC Stenographer exam covering English Language, General Awareness, and Shorthand (English). Includes dictation practice and speed building exercises.',
    requirements: [
      '12th pass from recognized board',
      'Typing speed of 80 wpm (Grade C) / 100 wpm (Grade D)',
      'Good command over English language'
    ],
    whatYouWillLearn: [
      'English Grammar and Vocabulary',
      'Reading Comprehension',
      'General Awareness and Current Affairs',
      'Shorthand Theory and Practice',
      'Dictation and Transcription'
    ]
  },
  {
    id: '17',
    title: 'IBPS Clerk 2024-25: Complete Prelims + Mains',
    slug: 'ibps-clerk-2024',
    description: 'Comprehensive preparation for IBPS Clerk exam. Covers Reasoning, Quantitative Aptitude, English Language, and Computer Knowledge with 150+ mock tests and sectional tests.',
    instructor: 'CA Neeraj Arora (Banking Mentor, 15+ Years Exp)',
    price: 6499,
    rating: 4.8,
    students: 55000,
    duration: '200 hours',
    level: 'Beginner',
    category: ['Banking', 'IBPS', 'Clerk', 'Bank Jobs', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?q=80&w=800&auto=format&fit=crop',
    createdAt: '2023-11-10',
    updatedAt: '2024-10-15',
    content: 'Comprehensive preparation for IBPS Clerk exam covering Reasoning, English Language, Numerical Ability, General Awareness, and Computer Knowledge.',
    requirements: [
      'Graduation in any discipline',
      'Age between 20-28 years',
      'Basic computer knowledge'
    ],
    whatYouWillLearn: [
      'Reasoning Ability',
      'English Language',
      'Numerical Ability',
      'General Awareness',
      'Computer Knowledge and Applications'
    ]
  },
  {
    id: '18',
    title: 'SSC CHSL 2024 - 10+2 Level Exam',
    slug: 'ssc-chsl-2024',
    description: 'Complete preparation for SSC Combined Higher Secondary Level (CHSL) exam. Covers Quantitative Aptitude, English, General Intelligence, and General Awareness with 200+ mock tests.',
    instructor: 'Mr. Rakesh Verma (10+ Years SSC Expert)',
    price: 4999,
    rating: 4.6,
    students: 85000,
    duration: '150 hours',
    level: 'Beginner',
    category: ['SSC', 'CHSL', 'LDC', 'DEO', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    createdAt: '2024-02-05',
    updatedAt: '2024-11-30',
    content: 'Comprehensive preparation for SSC CHSL exam covering General Intelligence, English Language, Quantitative Aptitude, and General Awareness.',
    requirements: [
      '10+2 or equivalent from recognized board',
      'Age between 18-27 years',
      'Basic computer knowledge for DEO post'
    ],
    whatYouWillLearn: [
      'General Intelligence and Reasoning',
      'English Language and Comprehension',
      'Quantitative Aptitude',
      'General Awareness',
      'Computer Proficiency (for DEO)'
    ]
  },
  {
    id: '19',
    title: 'RBI Assistant 2024 - Complete Course',
    slug: 'rbi-assistant-2024',
    description: 'Complete preparation for RBI Assistant exam with focus on all sections and interview guidance.',
    instructor: 'Dr. Priya Malhotra',
    price: 7999,
    rating: 4.7,
    students: 32000,
    duration: '200 hours',
    level: 'Intermediate',
    category: ['Banking', 'RBI', 'Assistant', 'Government Jobs'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop', // Professional banking/office environment
    createdAt: '2023-11-25',
    updatedAt: '2024-10-25',
    content: 'Comprehensive preparation for RBI Assistant exam covering Reasoning, English Language, Numerical Ability, General Awareness, and Computer Knowledge.',
    requirements: [
      'Bachelor\'s degree in any discipline',
      'Age between 20-28 years',
      'Proficiency in local language of the state applying for'
    ],
    whatYouWillLearn: [
      'Reasoning Ability',
      'English Language',
      'Numerical Ability',
      'General Awareness',
      'Computer Knowledge and Local Language'
    ]
  },
  {
    id: '20',
    title: 'UPSC CAPF 2024 - Assistant Commandant',
    slug: 'upsc-capf-2024',
    description: 'Complete preparation for UPSC CAPF Assistant Commandant exam with focus on all papers and physical test guidance.',
    instructor: 'Col. Ravi Khanna (Retd.)',
    price: 14999,
    rating: 4.9,
    students: 18000,
    duration: '300 hours',
    level: 'Advanced',
    category: ['UPSC', 'CAPF', 'Assistant Commandant', 'Defense'],
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format', // CAPF/Defense // Defense/military training
    createdAt: '2023-10-15',
    updatedAt: '2024-09-30',
    content: 'Comprehensive preparation for UPSC CAPF Assistant Commandant exam covering Paper 1 (General Ability and Intelligence), Paper 2 (General Studies, Essay, and Comprehension), and Interview.',
    requirements: [
      'Bachelor\'s degree in any discipline',
      'Age between 20-25 years',
      'Physical standards as per CAPF norms'
    ],
    whatYouWillLearn: [
      'General Mental Ability and Intelligence',
      'General Science and Current Events',
      'Indian Polity and Economy',
      'History of India and Indian National Movement',
      'Essay and Comprehension Writing'
    ]
  }
];

export const featuredCourses = courses.slice(0, 3);
export const popularCourses = [...courses].sort((a, b) => b.students - a.students).slice(0, 4);
export const recentCourses = [...courses].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 4);
