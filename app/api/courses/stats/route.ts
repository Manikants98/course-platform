import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Get start of current month
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // Calculate stats using Prisma queries
    const [totalCourses, activeCourses, coursesThisMonth] = await Promise.all([
      // Total courses count
      prisma.course.count(),

      // Active courses (courses with students > 0)
      prisma.course.count({
        where: {
          students: {
            gt: 0,
          },
        },
      }),

      // Courses created this month
      prisma.course.count({
        where: {
          createdAt: {
            gte: startOfMonth,
          },
        },
      }),
    ]);

    // Inactive courses = total - active
    const inactiveCourses = totalCourses - activeCourses;

    const stats = {
      totalCourses,
      activeCourses,
      inactiveCourses,
      coursesThisMonth,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
