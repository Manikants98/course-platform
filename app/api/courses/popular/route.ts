import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      take: 4,
      orderBy: { students: "desc" },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching popular courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch popular courses" },
      { status: 500 }
    );
  }
}
