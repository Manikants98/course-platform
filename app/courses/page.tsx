"use client";

import { useState, useMemo, useEffect } from "react";
import { IconSearch, IconFilter, IconX, IconSchool } from "@tabler/icons-react";
import CourseCard from "../../components/course/CourseCard";
import type { Course } from "../../constants/mockData";
import {
  TextInput,
  Select,
  Button,
  Paper,
  Group,
  Stack,
  Text,
  Title,
  Badge,
  ActionIcon,
} from "@mantine/core";

const categories = [
  "All",
  "SSC",
  "UPSC",
  "Banking",
  "Railway",
  "Government Exams",
  "Civil Services",
];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const sortOptions = [
  { name: "Most Popular", value: "popular" },
  { name: "Highest Rated", value: "rating" },
  { name: "Newest", value: "newest" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
];

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const params = new URLSearchParams();
        if (searchQuery) params.append("search", searchQuery);
        if (selectedCategory !== "All")
          params.append("category", selectedCategory);
        if (selectedLevel !== "All Levels")
          params.append("level", selectedLevel);
        params.append("sortBy", sortBy);

        const res = await fetch(`/api/courses?${params.toString()}`);
        if (res.ok) {
          const data = await res.json();
          setCourses(data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  const filteredAndSortedCourses = courses;

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "All" ||
    selectedLevel !== "All Levels";

  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-indigo-700 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-6 border border-white/20">
              <IconSchool size={16} className="text-indigo-200" />
              <span className="text-sm font-medium text-white">
                {loading
                  ? "Loading..."
                  : `${courses.length}+ Courses Available`}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Government Exam Courses
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100 sm:text-xl">
              Comprehensive preparation courses for SSC, UPSC, Banking, Railway
              and other competitive exams by expert educators.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mt-10 max-w-2xl">
              <TextInput
                placeholder="Search for courses, instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftSection={<IconSearch size={20} />}
                rightSection={
                  searchQuery ? (
                    <ActionIcon
                      variant="subtle"
                      onClick={() => setSearchQuery("")}
                      color="gray"
                    >
                      <IconX size={18} />
                    </ActionIcon>
                  ) : null
                }
                size="lg"
                radius={0}
                styles={{
                  input: {
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#111827",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredAndSortedCourses.length} course
                {filteredAndSortedCourses.length !== 1 ? "s" : ""} found
              </h2>
              {hasActiveFilters && !loading && (
                <p className="mt-1 text-sm text-gray-500">
                  Filtered from {courses.length} total courses
                </p>
              )}
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              leftSection={<IconFilter size={18} />}
              variant="default"
              radius={0}
              className="lg:hidden"
            >
              Filters
            </Button>
          </div>

          <Paper
            shadow="sm"
            p="lg"
            radius={0}
            withBorder
            style={{ display: showFilters ? "block" : "none" }}
            className="lg:block"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Category Filter */}
              <Select
                label="Category"
                value={selectedCategory}
                onChange={(value) => setSelectedCategory(value || "All")}
                data={categories.map((category) => ({
                  value: category,
                  label: category,
                }))}
                radius={0}
              />

              {/* Level Filter */}
              <Select
                label="Level"
                value={selectedLevel}
                onChange={(value) => setSelectedLevel(value || "All Levels")}
                data={levels.map((level) => ({
                  value: level,
                  label: level,
                }))}
                radius={0}
              />

              {/* Sort By */}
              <Select
                label="Sort By"
                value={sortBy}
                onChange={(value) => setSortBy(value || "popular")}
                data={sortOptions.map((option) => ({
                  value: option.value,
                  label: option.name,
                }))}
                radius={0}
              />

              {/* Clear Filters */}
              <div className="flex items-end">
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedLevel("All Levels");
                    setSortBy("popular");
                  }}
                  disabled={!hasActiveFilters}
                  variant="light"
                  fullWidth
                  radius={0}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </Paper>
        </div>

        {/* Course Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <IconSearch size={48} className="text-gray-400 animate-pulse" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Loading courses...
            </h3>
          </div>
        ) : filteredAndSortedCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <IconSearch size={48} className="text-gray-400" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              No courses found
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Try adjusting your search or filter criteria to find what you're
              looking for.
            </p>
            {hasActiveFilters && (
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedLevel("All Levels");
                  setSortBy("popular");
                }}
                variant="filled"
                color="indigo"
                radius={0}
                mt="md"
              >
                Clear all filters
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
