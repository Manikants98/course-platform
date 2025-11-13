import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  StarIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/20/solid";
import { prisma } from "@/lib/prisma";

interface CourseDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseDetail({ params }: CourseDetailProps) {
  const { slug } = await params;
  const course = await prisma.course.findUnique({
    where: { slug },
  });

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-linear-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/courses"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Image */}
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-200 shadow-xl ring-1 ring-gray-900/10">
              <Image
                src={course.image}
                alt={course.title}
                width={1200}
                height={675}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shadow-lg ${
                    course.level === "Beginner"
                      ? "bg-green-500 text-white"
                      : course.level === "Intermediate"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {course.level}
                </span>
              </div>
            </div>

            {/* Course Title & Rating */}
            <div className="mt-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {course.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIconSolid
                        key={rating}
                        className={`h-5 w-5 ${
                          rating < Math.floor(course.rating - 0.5)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-200"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-lg font-semibold text-gray-900">
                    {course.rating.toFixed(1)}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    ({course.students.toLocaleString()} students)
                  </span>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                About This Course
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-gray-700">
                <p>{course.content}</p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="mt-8 rounded-2xl bg-linear-to-br from-indigo-50 to-purple-50 p-6 shadow-sm ring-1 ring-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-600">
                  <AcademicCapIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  What You'll Learn
                </h2>
              </div>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {course.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-base text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Requirements
              </h2>
              <ul className="space-y-3">
                {course.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 mt-0.5">
                      <span className="text-xs font-semibold text-indigo-600">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-base text-gray-700 leading-relaxed">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="mt-10 lg:mt-0">
            <div className="sticky top-8 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200">
              {/* Price */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-baseline gap-3">
                  <p className="text-4xl font-bold text-gray-900">
                    ₹{course.price.toLocaleString("en-IN")}
                  </p>
                  <p className="text-lg text-gray-500 line-through">
                    ₹{(course.price * 1.5).toLocaleString("en-IN")}
                  </p>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">
                  Save ₹
                  {(course.price * 1.5 - course.price).toLocaleString("en-IN")}
                </p>
              </div>

              {/* Enroll Button */}
              <div className="mt-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-4 text-base font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02]"
                >
                  Enroll Now
                </button>
                <p className="mt-3 text-center text-sm text-gray-500">
                  30-day money-back guarantee
                </p>
              </div>

              {/* Course Info Cards */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <UserGroupIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Students
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {course.students.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <ClockIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Duration
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {course.duration}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <StarIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Rating</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {course.rating.toFixed(1)} / 5.0
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructor */}
              <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm font-medium text-gray-500">Instructor</p>
                <p className="mt-1 text-base font-semibold text-gray-900">
                  {course.instructor}
                </p>
              </div>

              {/* Categories */}
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-500 mb-3">
                  Categories
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.category.map((cat) => (
                    <span
                      key={cat}
                      className="inline-flex items-center rounded-full bg-linear-to-r from-indigo-100 to-purple-100 px-3 py-1.5 text-xs font-semibold text-indigo-800 border border-indigo-200/50"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
