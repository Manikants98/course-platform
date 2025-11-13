import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      take: 3,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching featured courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch featured courses" },
      { status: 500 }
    );
  }
}
