"use client";

import { useState } from "react";
import { IconPlus, IconEdit, IconTrash, IconSearch } from "@tabler/icons-react";
import { courses, type Course } from "../../../../constants/mockData";
import {
  Title,
  Text,
  Button,
  TextInput,
  Select,
  Paper,
  Table,
  Group,
  Stack,
  Badge,
  ActionIcon,
  Pagination,
  Image,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import CourseFormDrawer from "../../../../components/admin/CourseFormDrawer";

export default function AdminCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [drawerMode, setDrawerMode] = useState<"create" | "edit">("create");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const openCreateDrawer = () => {
    setSelectedCourse(null);
    setDrawerMode("create");
    setDrawerOpened(true);
  };

  const openEditDrawer = (course: Course) => {
    setSelectedCourse(course);
    setDrawerMode("edit");
    setDrawerOpened(true);
  };

  const handleSaveCourse = (courseData: Partial<Course>) => {
    // In a real app, this would make an API call
    console.log("Saving course:", courseData);
    // For now, just show a notification
    notifications.show({
      title: drawerMode === "create" ? "Course Created" : "Course Updated",
      message: `Course "${courseData.title}" has been ${
        drawerMode === "create" ? "created" : "updated"
      } successfully.`,
      color: "green",
    });
    setDrawerOpened(false);
  };

  const openDeleteModal = (courseId: string, courseTitle: string) => {
    modals.openConfirmModal({
      title: "Delete Course",
      children: (
        <Text size="sm">
          Are you sure you want to delete &quot;{courseTitle}&quot;? This action
          cannot be undone.
        </Text>
      ),
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onConfirm: () => {
        notifications.show({
          title: "Course Deleted",
          message: `"${courseTitle}" has been deleted successfully.`,
          color: "green",
        });
      },
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "green";
      case "Intermediate":
        return "yellow";
      case "Advanced":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <Stack gap="lg">
      <Group justify="space-between" align="flex-start">
        <div>
          <Title order={1} fw={700}>
            Course Management
          </Title>
          <Text c="dimmed" mt="xs">
            Manage all courses, add new courses, and edit existing ones.
          </Text>
        </div>
        <Button
          leftSection={<IconPlus size={18} />}
          variant="gradient"
          gradient={{ from: "indigo", to: "purple", deg: 90 }}
          onClick={openCreateDrawer}
          radius={0}
        >
          Add New Course
        </Button>
      </Group>

      {/* Filters */}
      <Group gap="md">
        <TextInput
          placeholder="Search courses..."
          leftSection={<IconSearch size={16} />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          radius={0}
          style={{ flex: 1 }}
        />
        <Select
          value={selectedStatus}
          onChange={(value) => setSelectedStatus(value || "all")}
          data={[
            { value: "all", label: "All Status" },
            { value: "active", label: "Active" },
            { value: "draft", label: "Draft" },
            { value: "archived", label: "Archived" },
          ]}
          radius={0}
          style={{ width: 150 }}
        />
      </Group>

      {/* Courses Table */}
      <Paper shadow="sm" radius={0} withBorder>
        <Table.ScrollContainer minWidth={1000}>
          <Table highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Course</Table.Th>
                <Table.Th>Instructor</Table.Th>
                <Table.Th>Students</Table.Th>
                <Table.Th>Price</Table.Th>
                <Table.Th>Rating</Table.Th>
                <Table.Th>Level</Table.Th>
                <Table.Th style={{ textAlign: "right" }}>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {filteredCourses.map((course) => (
                <Table.Tr key={course.id}>
                  <Table.Td>
                    <Group gap="sm" className="whitespace-nowrap!">
                      <Image
                        src={course.image}
                        alt={course.title}
                        w={60}
                        h={40}
                        radius={0}
                        fit="cover"
                      />
                      <div>
                        <Text fw={600} size="sm" lineClamp={1}>
                          {course.title}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {course.duration}
                        </Text>
                      </div>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" fw={500}>
                      {course.instructor}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Badge color="blue" variant="light" radius={0}>
                      {course.students.toLocaleString()}
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" fw={700} c="indigo">
                      ₹{course.price.toLocaleString("en-IN")}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Group gap={4}>
                      <Text size="sm" fw={600}>
                        {course.rating}
                      </Text>
                      <Text size="sm" c="yellow">
                        ★
                      </Text>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Badge
                      color={getLevelColor(course.level)}
                      variant="light"
                      radius={0}
                    >
                      {course.level}
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs" justify="flex-end">
                      <ActionIcon
                        variant="subtle"
                        color="indigo"
                        onClick={() => openEditDrawer(course)}
                      >
                        <IconEdit size={18} />
                      </ActionIcon>
                      <ActionIcon
                        variant="subtle"
                        color="red"
                        onClick={() => openDeleteModal(course.id, course.title)}
                      >
                        <IconTrash size={18} />
                      </ActionIcon>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Paper>

      {/* Pagination */}
      <Group justify="space-between">
        <Text size="sm" c="dimmed">
          Showing <strong>1</strong> to{" "}
          <strong>{filteredCourses.length}</strong> of{" "}
          <strong>{courses.length}</strong> results
        </Text>
        <Pagination total={Math.ceil(courses.length / 10)} />
      </Group>

      <CourseFormDrawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        course={selectedCourse}
        mode={drawerMode}
        onSave={handleSaveCourse}
      />
    </Stack>
  );
}
