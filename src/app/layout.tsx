import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Week",
  description: "Project developed in FSW by Marlon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
        </body>
    </html>
  );
}
