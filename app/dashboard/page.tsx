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
  { name: 'Courses Enrolled', value: '12', icon: AcademicCapIcon, change: '+2 this month' },
  { name: 'Hours Learned', value: '48', icon: ClockIcon, change: '+12 this week' },
  { name: 'Certificates Earned', value: '5', icon: TrophyIcon, change: '+1 this month' },
  { name: 'Average Progress', value: '67%', icon: ChartBarIcon, change: '+5% this week' },
];

const enrolledCourses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Sarah Johnson',
    progress: 75,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop',
    nextLesson: 'Advanced JavaScript Concepts',
    duration: '2h 30m remaining',
  },
  {
    id: 2,
    title: 'UI/UX Design Masterclass',
    instructor: 'Michael Chen',
    progress: 45,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&auto=format&fit=crop',
    nextLesson: 'Prototyping with Figma',
    duration: '4h 15m remaining',
  },
  {
    id: 3,
    title: 'Python for Data Science',
    instructor: 'Emily Rodriguez',
    progress: 90,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop',
    nextLesson: 'Machine Learning Basics',
    duration: '1h 20m remaining',
  },
];

const recentActivity = [
  {
    id: 1,
    type: 'completed',
    title: 'Completed "React Hooks Deep Dive"',
    course: 'Complete Web Development Bootcamp',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'certificate',
    title: 'Earned Certificate in JavaScript Fundamentals',
    course: 'JavaScript Essentials',
    time: '1 day ago',
  },
  {
    id: 3,
    type: 'started',
    title: 'Started "Advanced CSS Animations"',
    course: 'Complete Web Development Bootcamp',
    time: '2 days ago',
  },
  {
    id: 4,
    type: 'completed',
    title: 'Completed "User Research Methods"',
    course: 'UI/UX Design Masterclass',
    time: '3 days ago',
  },
];

const recommendations = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    instructor: 'David Kim',
    rating: 4.8,
    students: 15420,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop',
    price: 89.99,
  },
  {
    id: 2,
    title: 'Node.js Backend Development',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    students: 23150,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=400&auto=format&fit=crop',
    price: 79.99,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Student!</h1>
          <p className="mt-2 text-sm text-gray-600">Continue your learning journey</p>
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
                      <span className="text-sm font-bold text-gray-900">${course.price}</span>
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
