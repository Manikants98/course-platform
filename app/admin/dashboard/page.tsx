"use client";

import { useState, useEffect } from "react";
import {
  IconSchool,
  IconBook,
  IconBookOff,
  IconCalendarMonth,
  IconTrendingUp,
  IconTrendingDown,
} from "@tabler/icons-react";
import type { Course } from "../../../constants/mockData";
import {
  Title,
  Text,
  Card,
  Grid,
  Group,
  Stack,
  Badge,
  Avatar,
  Table,
  Paper,
  ThemeIcon,
} from "@mantine/core";

export default function AdminDashboardPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([
    {
      name: "Total Courses",
      value: "0",
      change: "+8.2%",
      changeType: "increase" as const,
      icon: IconBook,
      color: "blue",
    },
    {
      name: "Active Courses",
      value: "0",
      change: "+8.2%",
      changeType: "increase" as const,
      icon: IconSchool,
      color: "green",
    },
    {
      name: "Inactive Courses",
      value: "0",
      change: "+2.4%",
      changeType: "increase" as const,
      icon: IconBookOff,
      color: "red",
    },
    {
      name: "Courses This Month",
      value: "0",
      change: "+12.5%",
      changeType: "increase" as const,
      icon: IconCalendarMonth,
      color: "purple",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [coursesRes, statsRes] = await Promise.all([
          fetch("/api/courses"),
          fetch("/api/courses/stats"),
        ]);

        if (coursesRes.ok) {
          const coursesData = await coursesRes.json();
          setCourses(coursesData);
        }

        if (statsRes.ok) {
          const statsData = await statsRes.json();

          setStats([
            {
              name: "Total Courses",
              value: statsData.totalCourses.toString(),
              change: "+8.2%",
              changeType: "increase",
              icon: IconBook,
              color: "blue",
            },
            {
              name: "Active Courses",
              value: statsData.activeCourses.toString(),
              change: "+8.2%",
              changeType: "increase",
              icon: IconSchool,
              color: "green",
            },
            {
              name: "Inactive Courses",
              value: statsData.inactiveCourses.toString(),
              change: "+2.4%",
              changeType: "increase",
              icon: IconBookOff,
              color: "red",
            },
            {
              name: "Courses This Month",
              value: statsData.coursesThisMonth.toString(),
              change: "+12.5%",
              changeType: "increase",
              icon: IconCalendarMonth,
              color: "purple",
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Get top performing courses by students
  const topCourses = [...courses]
    .sort((a, b) => b.students - a.students)
    .slice(0, 4)
    .map((course) => ({
      id: course.id,
      title: course.title,
      instructor: course.instructor,
      enrollments: course.students,
      status: "Active",
    }));

  const recentUsers = [
    {
      id: 1,
      name: "Emily Johnson",
      email: "emily@example.com",
      joinedDate: "2024-11-01",
      courses: 3,
      status: "Active",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@example.com",
      joinedDate: "2024-11-02",
      courses: 5,
      status: "Active",
    },
    {
      id: 3,
      name: "Sarah Davis",
      email: "sarah@example.com",
      joinedDate: "2024-11-03",
      courses: 2,
      status: "Active",
    },
    {
      id: 4,
      name: "David Kim",
      email: "david@example.com",
      joinedDate: "2024-11-04",
      courses: 4,
      status: "Active",
    },
  ];

  if (loading) {
    return (
      <Stack gap="xl">
        <div>
          <Title order={1} fw={700}>
            Dashboard Overview
          </Title>
          <Text c="dimmed" mt="xs">
            Loading...
          </Text>
        </div>
      </Stack>
    );
  }

  return (
    <Stack gap="xl">
      <div>
        <Title order={1} fw={700}>
          Dashboard Overview
        </Title>
        <Text c="dimmed" mt="xs">
          Welcome back! Here's what's happening with your platform today.
        </Text>
      </div>

      {/* Stats Grid */}
      <Grid>
        {stats.map((stat) => (
          <Grid.Col key={stat.name} span={{ base: 12, sm: 6, lg: 3 }}>
            <Card shadow="sm" padding="lg" radius={0} withBorder>
              <Group justify="space-between">
                <div style={{ flex: 1 }}>
                  <Text size="sm" c="dimmed" fw={500}>
                    {stat.name}
                  </Text>
                  <Group gap="xs" mt="xs">
                    <Title order={2} fw={700}>
                      {stat.value}
                    </Title>
                    <Group gap={4}>
                      {stat.changeType === "increase" ? (
                        <IconTrendingUp
                          size={16}
                          color="var(--mantine-color-green-6)"
                        />
                      ) : (
                        <IconTrendingDown
                          size={16}
                          color="var(--mantine-color-red-6)"
                        />
                      )}
                      <Text
                        size="sm"
                        fw={600}
                        c={stat.changeType === "increase" ? "green" : "red"}
                      >
                        {stat.change}
                      </Text>
                    </Group>
                  </Group>
                </div>
                <ThemeIcon
                  size={48}
                  radius={0}
                  variant="gradient"
                  gradient={{ from: stat.color, to: stat.color, deg: 90 }}
                >
                  <stat.icon size={24} />
                </ThemeIcon>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Grid>
        {/* Top Performing Courses */}
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Paper shadow="sm" p="md" radius={0} withBorder>
            <Stack gap="md">
              <div>
                <Title order={3} fw={600}>
                  Top Performing Courses
                </Title>
                <Text size="sm" c="dimmed">
                  Courses with highest enrollments
                </Text>
              </div>
              <Table.ScrollContainer minWidth={500}>
                <Table highlightOnHover>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Course</Table.Th>
                      <Table.Th>Enrollments</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {topCourses.map((course) => (
                      <Table.Tr key={course.id}>
                        <Table.Td>
                          <div>
                            <Text fw={600} size="sm">
                              {course.title}
                            </Text>
                            <Text size="xs" c="dimmed">
                              {course.instructor}
                            </Text>
                          </div>
                        </Table.Td>
                        <Table.Td>
                          <Text size="sm" fw={500}>
                            {course.enrollments.toLocaleString()}
                          </Text>
                        </Table.Td>
                        <Table.Td>
                          <Badge color="green" variant="light" radius={0}>
                            {course.status}
                          </Badge>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Table.ScrollContainer>
            </Stack>
          </Paper>
        </Grid.Col>

        {/* Recent Users */}
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Paper shadow="sm" p="md" radius={0} withBorder>
            <Stack gap="md">
              <div>
                <Title order={3} fw={600}>
                  Recent Users
                </Title>
                <Text size="sm" c="dimmed">
                  Latest platform registrations
                </Text>
              </div>
              <Table.ScrollContainer minWidth={500}>
                <Table highlightOnHover>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>User</Table.Th>
                      <Table.Th>Joined</Table.Th>
                      <Table.Th>Courses</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {recentUsers.map((user) => (
                      <Table.Tr key={user.id}>
                        <Table.Td>
                          <Group gap="sm">
                            <Avatar
                              size={36}
                              radius={0}
                              gradient={{
                                from: "indigo",
                                to: "purple",
                                deg: 90,
                              }}
                            >
                              {user.name.charAt(0)}
                            </Avatar>
                            <div>
                              <Text fw={600} size="sm">
                                {user.name}
                              </Text>
                              <Text size="xs" c="dimmed">
                                {user.email}
                              </Text>
                            </div>
                          </Group>
                        </Table.Td>
                        <Table.Td>
                          <Text size="sm">
                            {new Date(user.joinedDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </Text>
                        </Table.Td>
                        <Table.Td>
                          <Badge color="indigo" variant="light" radius={0}>
                            {user.courses} courses
                          </Badge>
                        </Table.Td>
                        <Table.Td>
                          <Badge color="green" variant="light" radius={0}>
                            {user.status}
                          </Badge>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Table.ScrollContainer>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
