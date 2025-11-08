"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  AppShell,
  NavLink,
  Burger,
  Group,
  Text,
  Avatar,
  Badge,
  UnstyledButton,
  Menu,
  rem,
  Stack,
  Divider,
  Button,
} from "@mantine/core";
import {
  IconHome,
  IconSchool,
  IconBell,
  IconLogout,
  IconArrowLeft,
} from "@tabler/icons-react";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: IconHome },
  { name: "Courses", href: "/admin/dashboard/courses", icon: IconSchool },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpened, setMobileOpened] = useState(false);
  const [desktopOpened, setDesktopOpened] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/admin/login");
  };

  const getActiveRoute = () => {
    return (
      navigation.find(
        (item) =>
          pathname === item.href || pathname?.startsWith(item.href + "/")
      )?.name || "Dashboard"
    );
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={mobileOpened}
              onClick={() => setMobileOpened(!mobileOpened)}
              hiddenFrom="sm"
              size="sm"
            />
            <Text fw={700} size="xl" c="indigo">
              {getActiveRoute()}
            </Text>
          </Group>
          <Group gap="md">
            <UnstyledButton pos="relative">
              <IconBell size={20} stroke={1.5} />
              <Badge
                size="xs"
                radius={0}
                color="red"
                pos="absolute"
                top={-4}
                right={-4}
              >
                3
              </Badge>
            </UnstyledButton>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <UnstyledButton>
                  <Group gap="sm">
                    <div style={{ flex: 1, textAlign: "right" }}>
                      <Text size="sm" fw={500}>
                        Admin User
                      </Text>
                      <Text size="xs" c="dimmed">
                        admin@eduverse.com
                      </Text>
                    </div>
                    <Avatar
                      size={36}
                      radius={0}
                      gradient={{ from: "indigo", to: "purple", deg: 90 }}
                    >
                      A
                    </Avatar>
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  leftSection={<IconLogout size={rem(14)} />}
                  onClick={handleLogout}
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack gap="xs">
          <Group mb="xl">
            <Text
              fw={700}
              size="xl"
              variant="gradient"
              gradient={{ from: "indigo", to: "purple", deg: 90 }}
            >
              EduVerse Admin
            </Text>
          </Group>

          {navigation.map((item) => {
            const isActive =
              item.href === "/admin/dashboard"
                ? pathname === item.href
                : pathname === item.href ||
                  pathname?.startsWith(item.href + "/");
            return (
              <NavLink
                key={item.name}
                component={Link}
                href={item.href}
                label={item.name}
                leftSection={<item.icon size={20} stroke={1.5} />}
                active={isActive}
                variant="light"
              />
            );
          })}

          <Divider my="md" />

          <Stack gap="xs">
            <Button
              variant="subtle"
              color="red"
              leftSection={<IconLogout size={18} />}
              onClick={handleLogout}
              justify="flex-start"
              fullWidth
              radius={0}
            >
              Logout
            </Button>
            <Button
              component={Link}
              href="/"
              variant="subtle"
              leftSection={<IconArrowLeft size={18} />}
              justify="flex-start"
              fullWidth
              radius={0}
            >
              Back to Site
            </Button>
          </Stack>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
