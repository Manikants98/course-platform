"use client";

import { useEffect, useState } from "react";
import {
  Drawer,
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Button,
  Stack,
  Group,
  Title,
  Text,
  MultiSelect,
  ActionIcon,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconX, IconPlus, IconTrash } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import type { Course } from "../../constants/mockData";

interface CourseFormDrawerProps {
  opened: boolean;
  onClose: () => void;
  course?: Course | null;
  mode: "create" | "edit";
  onSave: (courseData: Partial<Course>) => void;
}

export default function CourseFormDrawer({
  opened,
  onClose,
  course,
  mode,
  onSave,
}: CourseFormDrawerProps) {
  const [requirements, setRequirements] = useState<string[]>([]);
  const [newRequirement, setNewRequirement] = useState("");
  const [whatYouWillLearn, setWhatYouWillLearn] = useState<string[]>([]);
  const [newLearnItem, setNewLearnItem] = useState("");

  const form = useForm({
    initialValues: {
      title: "",
      slug: "",
      description: "",
      instructor: "",
      price: 0,
      rating: 0,
      students: 0,
      duration: "",
      level: "Beginner" as "Beginner" | "Intermediate" | "Advanced",
      category: [] as string[],
      image: "",
      content: "",
    },
    validate: {
      title: (value) =>
        value.length < 3 ? "Title must be at least 3 characters" : null,
      slug: (value) =>
        value.length < 3 ? "Slug must be at least 3 characters" : null,
      description: (value) =>
        value.length < 10 ? "Description must be at least 10 characters" : null,
      instructor: (value) =>
        value.length < 3 ? "Instructor name is required" : null,
      price: (value) => (value <= 0 ? "Price must be greater than 0" : null),
      duration: (value) => (value.length < 1 ? "Duration is required" : null),
      image: (value) => (value.length < 1 ? "Image URL is required" : null),
    },
  });

  useEffect(() => {
    if (course && mode === "edit") {
      form.setValues({
        title: course.title,
        slug: course.slug,
        description: course.description,
        instructor: course.instructor,
        price: course.price,
        rating: course.rating,
        students: course.students,
        duration: course.duration,
        level: course.level,
        category: course.category,
        image: course.image,
        content: course.content,
      });
      setRequirements(course.requirements || []);
      setWhatYouWillLearn(course.whatYouWillLearn || []);
    } else {
      form.reset();
      setRequirements([]);
      setWhatYouWillLearn([]);
    }
  }, [course, mode, opened]);

  const handleSubmit = (values: typeof form.values) => {
    const courseData: Partial<Course> = {
      ...values,
      requirements,
      whatYouWillLearn,
      createdAt:
        mode === "create"
          ? new Date().toISOString().split("T")[0]
          : course?.createdAt,
      updatedAt: new Date().toISOString().split("T")[0],
    };

    onSave(courseData);
    notifications.show({
      title: mode === "create" ? "Course Created" : "Course Updated",
      message: `Course "${values.title}" has been ${
        mode === "create" ? "created" : "updated"
      } successfully.`,
      color: "green",
    });
    onClose();
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setRequirements([...requirements, newRequirement.trim()]);
      setNewRequirement("");
    }
  };

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  const addLearnItem = () => {
    if (newLearnItem.trim()) {
      setWhatYouWillLearn([...whatYouWillLearn, newLearnItem.trim()]);
      setNewLearnItem("");
    }
  };

  const removeLearnItem = (index: number) => {
    setWhatYouWillLearn(whatYouWillLearn.filter((_, i) => i !== index));
  };

  const categoryOptions = [
    "UPSC",
    "SSC",
    "Banking",
    "Railway",
    "Defense",
    "Teaching",
    "State PSC",
    "Civil Services",
    "IAS",
    "IPS",
    "IFS",
    "CAPF",
    "Assistant Commandant",
  ];

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title={
        <Title order={3} fw={600}>
          {mode === "create" ? "Create New Course" : "Edit Course"}
        </Title>
      }
      position="right"
      size="xl"
      padding="xl"
      radius={0}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Course Title"
            placeholder="Enter course title"
            required
            radius={0}
            {...form.getInputProps("title")}
          />

          <TextInput
            label="Slug"
            placeholder="course-slug-url"
            required
            radius={0}
            {...form.getInputProps("slug")}
            description="URL-friendly version of the title"
          />

          <Textarea
            label="Description"
            placeholder="Enter course description"
            required
            minRows={3}
            radius={0}
            {...form.getInputProps("description")}
          />

          <Textarea
            label="Content"
            placeholder="Enter detailed course content"
            minRows={4}
            radius={0}
            {...form.getInputProps("content")}
          />

          <TextInput
            label="Instructor"
            placeholder="Enter instructor name"
            required
            radius={0}
            {...form.getInputProps("instructor")}
          />

          <Group grow>
            <NumberInput
              label="Price (₹)"
              placeholder="Enter price"
              required
              min={0}
              radius={0}
              {...form.getInputProps("price")}
            />

            <NumberInput
              label="Rating"
              placeholder="Enter rating"
              min={0}
              max={5}
              step={0.1}
              decimalScale={1}
              radius={0}
              {...form.getInputProps("rating")}
            />

            <NumberInput
              label="Students"
              placeholder="Number of students"
              min={0}
              radius={0}
              {...form.getInputProps("students")}
            />
          </Group>

          <Group grow>
            <TextInput
              label="Duration"
              placeholder="e.g., 250 hours"
              required
              radius={0}
              {...form.getInputProps("duration")}
            />

            <Select
              label="Level"
              required
              radius={0}
              data={[
                { value: "Beginner", label: "Beginner" },
                { value: "Intermediate", label: "Intermediate" },
                { value: "Advanced", label: "Advanced" },
              ]}
              {...form.getInputProps("level")}
            />
          </Group>

          <TextInput
            label="Image URL"
            placeholder="https://example.com/image.jpg"
            required
            radius={0}
            {...form.getInputProps("image")}
          />

          <MultiSelect
            label="Categories"
            placeholder="Select categories"
            data={categoryOptions}
            searchable
            radius={0}
            {...form.getInputProps("category")}
          />

          {/* Requirements */}
          <Box>
            <Text size="sm" fw={500} mb="xs">
              Requirements
            </Text>
            <Stack gap="xs">
              {requirements.map((req, index) => (
                <Group key={index} gap="xs">
                  <Text size="sm" style={{ flex: 1 }}>
                    {req}
                  </Text>
                  <ActionIcon
                    color="red"
                    variant="subtle"
                    onClick={() => removeRequirement(index)}
                  >
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              ))}
              <Group gap="xs">
                <TextInput
                  placeholder="Add requirement"
                  value={newRequirement}
                  onChange={(e) => setNewRequirement(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addRequirement();
                    }
                  }}
                  radius={0}
                  style={{ flex: 1 }}
                />
                <ActionIcon
                  color="indigo"
                  variant="light"
                  onClick={addRequirement}
                >
                  <IconPlus size={16} />
                </ActionIcon>
              </Group>
            </Stack>
          </Box>

          {/* What You'll Learn */}
          <Box>
            <Text size="sm" fw={500} mb="xs">
              What You'll Learn
            </Text>
            <Stack gap="xs">
              {whatYouWillLearn.map((item, index) => (
                <Group key={index} gap="xs">
                  <Text size="sm" style={{ flex: 1 }}>
                    {item}
                  </Text>
                  <ActionIcon
                    color="red"
                    variant="subtle"
                    onClick={() => removeLearnItem(index)}
                  >
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              ))}
              <Group gap="xs">
                <TextInput
                  placeholder="Add learning outcome"
                  value={newLearnItem}
                  onChange={(e) => setNewLearnItem(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addLearnItem();
                    }
                  }}
                  radius={0}
                  style={{ flex: 1 }}
                />
                <ActionIcon
                  color="indigo"
                  variant="light"
                  onClick={addLearnItem}
                >
                  <IconPlus size={16} />
                </ActionIcon>
              </Group>
            </Stack>
          </Box>

          <Group justify="flex-end" mt="xl">
            <Button variant="subtle" onClick={onClose} radius={0}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="gradient"
              gradient={{ from: "indigo", to: "purple", deg: 90 }}
              radius={0}
            >
              {mode === "create" ? "Create Course" : "Update Course"}
            </Button>
          </Group>
        </Stack>
      </form>
    </Drawer>
  );
}
