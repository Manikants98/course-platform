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
    title: 'SSC CGL Complete Preparation 2024',
    slug: 'ssc-cgl-complete-preparation-2024',
    description: 'Complete preparation course for SSC CGL exam covering all subjects - Quantitative Aptitude, Reasoning, English, and General Awareness with mock tests and previous year papers.',
    instructor: 'Dr. Rajesh Kumar',
    price: 4999,
    rating: 4.9,
    students: 45000,
    duration: '180 hours',
    level: 'Intermediate',
    category: ['SSC', 'Government Exams', 'SSC CGL'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    createdAt: '2024-01-15',
    updatedAt: '2024-10-20',
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
    title: 'UPSC Civil Services Complete Course 2024-25',
    slug: 'upsc-civil-services-complete-course-2024',
    description: 'Comprehensive UPSC CSE preparation covering Prelims and Mains with GS, Optional subjects, Essay, and Interview guidance by ex-IAS officers.',
    instructor: 'Dr. Priya Sharma (Ex-IAS)',
    price: 24999,
    rating: 4.9,
    students: 28500,
    duration: '500 hours',
    level: 'Advanced',
    category: ['UPSC', 'Civil Services', 'IAS'],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop',
    createdAt: '2024-02-10',
    updatedAt: '2024-09-15',
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
    title: 'SSC CHSL Complete Preparation 2024',
    slug: 'ssc-chsl-complete-preparation-2024',
    description: 'Complete SSC CHSL (10+2) preparation covering Quantitative Aptitude, Reasoning, English, and General Awareness with typing tests and descriptive paper.',
    instructor: 'Prof. Amit Verma',
    price: 3499,
    rating: 4.8,
    students: 52000,
    duration: '120 hours',
    level: 'Beginner',
    category: ['SSC', 'SSC CHSL', 'Government Exams'],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop',
    createdAt: '2024-03-05',
    updatedAt: '2024-11-10',
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
    title: 'Banking & IBPS PO Complete Course 2024',
    slug: 'banking-ibps-po-complete-course-2024',
    description: 'Complete preparation for IBPS PO, SBI PO, and other banking exams covering Quantitative Aptitude, Reasoning, English, Banking Awareness, and Computer Knowledge.',
    instructor: 'CA Neha Gupta',
    price: 5999,
    rating: 4.8,
    students: 38000,
    duration: '150 hours',
    level: 'Intermediate',
    category: ['Banking', 'IBPS', 'SBI PO'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    createdAt: '2024-01-20',
    updatedAt: '2024-10-25',
    content: 'Comprehensive banking exam preparation with focus on Prelims and Mains pattern. Includes sectional tests, full-length mocks, interview preparation, and group discussion practice sessions.',
    requirements: [
      'Graduate degree in any discipline',
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
    title: 'Railway RRB NTPC & Group D Complete Course',
    slug: 'railway-rrb-ntpc-group-d-complete-course',
    description: 'Complete preparation for Railway RRB NTPC and Group D exams covering Mathematics, Reasoning, General Science, and General Awareness with CBT practice.',
    instructor: 'Er. Suresh Yadav',
    price: 2999,
    rating: 4.7,
    students: 65000,
    duration: '100 hours',
    level: 'Beginner',
    category: ['Railway', 'RRB NTPC', 'Government Exams'],
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop',
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
  }
];

export const featuredCourses = courses.slice(0, 3);
export const popularCourses = [...courses].sort((a, b) => b.students - a.students).slice(0, 4);
export const recentCourses = [...courses].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 4);
