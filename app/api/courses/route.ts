import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const level = searchParams.get("level");
    const sortBy = searchParams.get("sortBy") || "popular";

    const where: any = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { instructor: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    if (category && category !== "All") {
      where.category = { has: category };
    }

    if (level && level !== "All Levels") {
      where.level = level;
    }

    let orderBy: any = {};
    switch (sortBy) {
      case "popular":
        orderBy = { students: "desc" };
        break;
      case "rating":
        orderBy = { rating: "desc" };
        break;
      case "newest":
        orderBy = { createdAt: "desc" };
        break;
      case "price-asc":
        orderBy = { price: "asc" };
        break;
      case "price-desc":
        orderBy = { price: "desc" };
        break;
      default:
        orderBy = { students: "desc" };
    }

    const courses = await prisma.course.findMany({
      where,
      orderBy,
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      slug,
      description,
      instructor,
      price,
      rating,
      students,
      duration,
      level,
      category,
      image,
      content,
      requirements,
      whatYouWillLearn,
    } = body;

    if (
      !title ||
      !slug ||
      !description ||
      !instructor ||
      !price ||
      !duration ||
      !level ||
      !image
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingCourse = await prisma.course.findUnique({
      where: { slug },
    });

    if (existingCourse) {
      return NextResponse.json(
        { error: "Course with this slug already exists" },
        { status: 400 }
      );
    }

    const course = await prisma.course.create({
      data: {
        title,
        slug,
        description,
        instructor,
        price: parseFloat(price),
        rating: rating ? parseFloat(rating) : 0,
        students: students ? parseInt(students) : 0,
        duration,
        level,
        category: category || [],
        image,
        content: content || "",
        requirements: requirements || [],
        whatYouWillLearn: whatYouWillLearn || [],
      },
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}
