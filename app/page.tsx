import Link from "next/link";
import {
  ArrowRightIcon,
  PlayCircleIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import CourseCard from "../components/course/CourseCard";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Course } from "@/constants/mockData";

async function getFeaturedCourses() {
  try {
    return await prisma.course.findMany({
      take: 3,
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching featured courses:", error);
    return [];
  }
}

async function getPopularCourses() {
  try {
    return await prisma.course.findMany({
      take: 4,
      orderBy: { students: "desc" },
    });
  } catch (error) {
    console.error("Error fetching popular courses:", error);
    return [];
  }
}

async function getRecentCourses() {
  try {
    return await prisma.course.findMany({
      take: 4,
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching recent courses:", error);
    return [];
  }
}

export default async function Home() {
  const [featuredCourses, popularCourses, recentCourses] = await Promise.all([
    getFeaturedCourses(),
    getPopularCourses(),
    getRecentCourses(),
  ]);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-indigo-700 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-6 border border-white/20">
                <AcademicCapIcon className="h-4 w-4 text-indigo-200" />
                <span className="text-sm font-medium text-white">
                  Trusted by 500K+ Students
                </span>
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-6 sm:text-6xl lg:text-7xl">
                Crack Government Exams with{" "}
                <span className="bg-linear-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Expert Guidance
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-indigo-100 sm:text-xl">
                India's leading platform for SSC, UPSC, Banking, Railway and
                other competitive exam preparation with top educators and
                comprehensive study material.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/courses"
                  className="rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-indigo-600 shadow-lg hover:bg-indigo-50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105"
                >
                  Browse Courses
                </Link>
                <Link
                  href="#"
                  className="flex items-center rounded-lg bg-white/10 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold leading-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  <PlayCircleIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  Watch demo
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-indigo-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <span className="text-xl font-bold text-white">500K+</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">
                      Students
                    </div>
                    <div className="text-xs">Enrolled</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <span className="text-xl font-bold text-white">4.8★</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">
                      Rating
                    </div>
                    <div className="text-xs">Average</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <span className="text-xl font-bold text-white">20+</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">
                      Instructors
                    </div>
                    <div className="text-xs">Expert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="bg-linear-to-b from-white to-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-indigo-800 uppercase tracking-wide">
                Featured
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Featured Courses
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Learn the most in-demand skills with our top-rated courses
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 hover:scale-105"
            >
              View all courses
              <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Popular Courses */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-purple-800 uppercase tracking-wide">
                Trending
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Popular Courses
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Most popular courses among our students
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-4">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>

      {/* Recently Added */}
      <div className="bg-linear-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-green-800 uppercase tracking-wide">
                New
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Recently Added
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Check out our latest courses
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-4">
            {recentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-br from-indigo-700 via-purple-700 to-indigo-800">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-256 w-5xl -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-6 border border-white/20">
                <span className="text-sm font-medium text-white">
                  🚀 Start Your Journey Today
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to start learning?
                <br />
                <span className="bg-linear-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Start your free trial today.
                </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Join thousands of students already learning with us. Start your
                7-day free trial now.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  href="/auth/register"
                  className="rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-indigo-600 shadow-lg hover:bg-indigo-50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105"
                >
                  Get started
                </Link>
                <Link
                  href="/about"
                  className="flex items-center rounded-lg bg-white/10 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold leading-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  Learn more{" "}
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-indigo-200 lg:justify-start">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>7-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
