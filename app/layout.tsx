import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ConditionalLayout from "../components/layout/ConditionalLayout";
import MantineProvider from "../components/providers/MantineProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f46e5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eduverse.com"),
  title: "EduVerse - Learn Anything, Anytime, Anywhere",
  description:
    "Discover the best online courses from top instructors. Learn new skills and advance your career with our high-quality video courses.",
  keywords:
    "online courses, learning, education, online education, e-learning, courses",
  openGraph: {
    title: "EduVerse - Learn Anything, Anytime, Anywhere",
    description:
      "Discover the best online courses from top instructors. Learn new skills and advance your career with our high-quality video courses.",
    url: "https://eduverse.com",
    siteName: "EduVerse",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EduVerse - Online Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduVerse - Learn Anything, Anytime, Anywhere",
    description:
      "Discover the best online courses from top instructors. Learn new skills and advance your career with our high-quality video courses.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <MantineProvider>
          <Toaster position="top-right" />
          <ConditionalLayout>{children}</ConditionalLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
