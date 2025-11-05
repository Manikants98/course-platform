import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';
import { Course } from '../../constants/mockData';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={225}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
          <Link href={`/courses/${course.slug}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {course.title}
          </Link>
        </h3>
        <div className="flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={`h-4 w-4 ${
                  rating < Math.floor(course.rating - 0.5)
                    ? 'text-yellow-400'
                    : 'text-gray-200'
                }`}
                aria-hidden="true"
              />
            ))}
            <span className="ml-1 text-sm text-gray-500">
              {course.rating.toFixed(1)}
            </span>
            <span className="mx-1 text-gray-300">•</span>
            <span className="text-sm text-gray-500">
              {course.students.toLocaleString()} students
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-lg font-bold text-gray-900">₹{course.price.toLocaleString('en-IN')}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {course.category.slice(0, 2).map((category) => (
              <span
                key={category}
                className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800"
              >
                {category}
              </span>
            ))}
            {course.category.length > 2 && (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                +{course.category.length - 2} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
