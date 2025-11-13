import { PrismaClient } from "@prisma/client";
import { courses } from "../constants/mockData";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Clear existing courses
  await prisma.course.deleteMany();
  console.log("🗑️  Cleared existing courses");

  // Seed courses
  for (const course of courses) {
    await prisma.course.create({
      data: {
        title: course.title,
        slug: course.slug,
        description: course.description,
        instructor: course.instructor,
        price: course.price,
        rating: course.rating,
        students: course.students,
        duration: course.duration,
        level: course.level as "Beginner" | "Intermediate" | "Advanced",
        category: course.category,
        image: course.image,
        content: course.content,
        requirements: course.requirements,
        whatYouWillLearn: course.whatYouWillLearn,
        createdAt: new Date(course.createdAt),
        updatedAt: new Date(course.updatedAt),
      },
    });
  }

  console.log(`✅ Seeded ${courses.length} courses`);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
