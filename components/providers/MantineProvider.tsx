"use client";

import { MantineProvider as MantineProviderBase } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

export default function MantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProviderBase
      theme={{
        primaryColor: "indigo",
        defaultRadius: 0,
      }}
    >
      <ModalsProvider>
        <Notifications position="top-right" />
        {children}
      </ModalsProvider>
    </MantineProviderBase>
  );
}
