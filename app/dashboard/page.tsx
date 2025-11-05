'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  AcademicCapIcon, 
  ClockIcon, 
  TrophyIcon, 
  ChartBarIcon,
  BookOpenIcon,
  PlayCircleIcon 
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Exams Prepared For', value: '8', icon: AcademicCapIcon, change: '+2 this month' },
  { name: 'Study Hours', value: '156', icon: ClockIcon, change: '+24 this week' },
  { name: 'Mock Tests Taken', value: '23', icon: TrophyIcon, change: '+5 this month' },
  { name: 'Overall Progress', value: '72%', icon: ChartBarIcon, change: '+8% this week' },
];

const enrolledCourses = [
  {
    id: 1,
    title: 'UPSC CSE 2024-25: Complete GS + CSAT',
    instructor: 'Dr. Priya Sharma (Ex-IAS)',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format',
    nextLesson: 'Indian Polity - Fundamental Rights',
    duration: '3h 15m remaining',
  },
  {
    id: 2,
    title: 'SSC CGL 2024-25 Tier 1 & 2',
    instructor: 'Dr. Rajesh Kumar',
    progress: 45,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format',
    nextLesson: 'Quantitative Aptitude - Time & Work',
    duration: '2h 45m remaining',
  },
  {
    id: 3,
    title: 'Banking 2024-25: IBPS PO/SBI PO',
    instructor: 'CA Neha Gupta',
    progress: 82,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format',
    nextLesson: 'Banking Awareness - RBI Functions',
    duration: '1h 50m remaining',
  },
];

const recentActivity = [
  {
    id: 1,
    type: 'completed',
    title: 'Completed "Indian Economy - Budget & Fiscal Policy"',
    course: 'UPSC CSE 2024-25',
    time: '3 hours ago',
  },
  {
    id: 2,
    type: 'certificate',
    title: 'Earned Certificate in Quantitative Aptitude',
    course: 'SSC CGL Preparation',
    time: '1 day ago',
  },
  {
    id: 3,
    type: 'started',
    title: 'Started "Banking Awareness"',
    course: 'IBPS PO 2024-25',
    time: '2 days ago',
  },
  {
    id: 4,
    type: 'completed',
    title: 'Completed "Modern Indian History"',
    course: 'UPSC CSE 2024-25',
    time: '4 days ago',
  },
];

const recommendations = [
  {
    id: 1,
    title: 'SSC CHSL 2024-25: LDC/DEO/PA/SA',
    instructor: 'Prof. Amit Verma',
    rating: 4.7,
    students: 68000,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format',
    price: '₹3,999',
  },
  {
    id: 2,
    title: 'UPSC NDA/NA 2024-25',
    instructor: 'Col. Sanjay Kumar',
    rating: 4.9,
    students: 32000,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format',
    price: '₹12,999',
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Exam Prep Dashboard!</h1>
          <p className="mt-2 text-sm text-gray-600">Track your progress and continue your preparation</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Continue Learning</h2>
              </div>
              <div className="p-6 space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="flex gap-4">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={160}
                      height={90}
                      className="h-24 w-40 flex-shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-gray-900 truncate">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium text-gray-900">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <BookOpenIcon className="h-4 w-4 mr-1" />
                          {course.nextLesson}
                        </div>
                        <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                          <PlayCircleIcon className="h-4 w-4 mr-1" />
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    {recentActivity.map((activity, activityIdx) => (
                      <li key={activity.id}>
                        <div className="relative pb-8">
                          {activityIdx !== recentActivity.length - 1 ? (
                            <span
                              className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span
                                className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                                  activity.type === 'completed'
                                    ? 'bg-green-500'
                                    : activity.type === 'certificate'
                                    ? 'bg-yellow-500'
                                    : 'bg-blue-500'
                                }`}
                              >
                                {activity.type === 'completed' ? (
                                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                ) : activity.type === 'certificate' ? (
                                  <TrophyIcon className="h-5 w-5 text-white" />
                                ) : (
                                  <PlayCircleIcon className="h-5 w-5 text-white" />
                                )}
                              </span>
                            </div>
                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                              <div>
                                <p className="text-sm text-gray-900">{activity.title}</p>
                                <p className="text-sm text-gray-500">{activity.course}</p>
                              </div>
                              <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                {activity.time}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recommended Courses */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Recommended for You</h2>
              </div>
              <div className="p-6 space-y-6">
                {recommendations.map((course) => (
                  <div key={course.id} className="group">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={225}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <h3 className="mt-3 text-sm font-semibold text-gray-900 group-hover:text-indigo-600">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{course.instructor}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="text-yellow-400 mr-1">★</span>
                        {course.rating} ({course.students.toLocaleString()})
                      </div>
                      <span className="text-sm font-bold text-gray-900">{course.price}</span>
                    </div>
                    <button className="mt-3 w-full inline-flex justify-center items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      View Course
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6 space-y-3">
                <Link
                  href="/courses"
                  className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Browse All Courses
                </Link>
                <Link
                  href="/dashboard/certificates"
                  className="block w-full text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  View Certificates
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="block w-full text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Account Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
