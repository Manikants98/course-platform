# Prisma Database Setup

This directory contains the Prisma schema and seed file for the Educator course platform.

## Setup Instructions

### 1. Install Dependencies

Make sure you have all dependencies installed:

```bash
npm install
```

### 2. Configure Database

Create a `.env` file in the root directory with your database connection string:

```env
# PostgreSQL (Recommended)
DATABASE_URL="postgresql://user:password@localhost:5432/educator?schema=public"

# SQLite (Alternative - for development)
# DATABASE_URL="file:./dev.db"

# MySQL (Alternative)
# DATABASE_URL="mysql://user:password@localhost:3306/educator"
```

### 3. Generate Prisma Client

Generate the Prisma Client based on your schema:

```bash
npm run db:generate
```

### 4. Create Database Schema

Push the schema to your database (for development):

```bash
npm run db:push
```

Or create a migration (for production):

```bash
npm run db:migrate
```

### 5. Seed the Database

Populate the database with mock data from `constants/mockData.ts`:

```bash
npm run db:seed
```

## Available Scripts

- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema changes to database (development)
- `npm run db:migrate` - Create and apply migrations (production)
- `npm run db:studio` - Open Prisma Studio (database GUI)
- `npm run db:seed` - Seed database with mock data

## Schema Overview

The `Course` model includes:

- Basic information (title, slug, description, instructor)
- Pricing and metrics (price, rating, students)
- Course details (duration, level, category, image)
- Content (content, requirements, whatYouWillLearn)
- Timestamps (createdAt, updatedAt)

## Using Prisma Client

Import and use the Prisma client in your application:

```typescript
import { prisma } from "@/lib/prisma";

// Example: Get all courses
const courses = await prisma.course.findMany();

// Example: Get course by slug
const course = await prisma.course.findUnique({
  where: { slug: "ssc-cgl-complete-preparation-2024" },
});
```
