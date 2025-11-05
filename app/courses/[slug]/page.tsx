import { notFound } from 'next/navigation';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';
import { courses } from '../../../constants/mockData';

interface CourseDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseDetail({ params }: CourseDetailProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Course Image */}
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <Image
              src={course.image}
              alt={course.title}
              width={800}
              height={600}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Course Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{course.title}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Course information</h2>
              <p className="text-3xl font-bold tracking-tight text-gray-900">₹{course.price.toLocaleString('en-IN')}</p>

              <div className="mt-3 flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={`h-5 w-5 ${
                        rating < Math.floor(course.rating - 0.5)
                          ? 'text-yellow-400'
                          : 'text-gray-200'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-500">
                  {course.rating.toFixed(1)} ({course.students.toLocaleString()} students)
                </p>
              </div>

              <div className="mt-4">
                <p className="text-base text-gray-500">Instructor: {course.instructor}</p>
                <p className="text-base text-gray-500">Duration: {course.duration}</p>
                <p className="text-base text-gray-500">Level: {course.level}</p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Enroll Now
                </button>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Categories</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {course.category.map((cat) => (
                    <span
                      key={cat}
                      className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Description */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">About This Course</h2>
            <div className="mt-4 space-y-6 text-base text-gray-700">
              <p>{course.content}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">What You'll Learn</h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {course.whatYouWillLearn.map((item, index) => (
                <li key={index} className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Requirements</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              {course.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
