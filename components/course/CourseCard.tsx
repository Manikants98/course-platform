import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import { Course } from "../../constants/mockData";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-w-3 aspect-h-2 bg-gray-200 overflow-hidden sm:aspect-none sm:h-48">
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={225}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm">
            {course.level}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-3 p-5">
        <div>
          <h3 className="text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
            <Link href={`/courses/${course.slug}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {course.title}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-gray-500 line-clamp-1">
            {course.instructor}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={`h-4 w-4 ${
                  rating < Math.floor(course.rating - 0.5)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-200"
                }`}
                aria-hidden="true"
              />
            ))}
            <span className="ml-1.5 text-sm font-medium text-gray-900">
              {course.rating.toFixed(1)}
            </span>
          </div>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-600">
            {course.students.toLocaleString()} students
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-3">
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-gray-900">
              ₹{course.price.toLocaleString("en-IN")}
            </p>
            <p className="text-sm text-gray-500 line-through">
              ₹{(course.price * 1.5).toLocaleString("en-IN")}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {course.category.slice(0, 2).map((category) => (
              <span
                key={category}
                className="inline-flex items-center rounded-full bg-linear-to-r from-indigo-100 to-purple-100 px-2.5 py-1 text-xs font-semibold text-indigo-800 border border-indigo-200/50"
              >
                {category}
              </span>
            ))}
            {course.category.length > 2 && (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                +{course.category.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
