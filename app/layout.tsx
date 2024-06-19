import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Header from "@/components/Header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/**
 * RootLayout function component.
 *
 * Renders the root layout of the application, including a floating navigation bar, header, and children components.
 *
 * @param children - The child components to be rendered within the layout.
 * @returns The root layout of the application with the specified child components.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "#top",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
              ),
            },
            { name: "Signup", link: "/" },
            { name: "signin", link: "/" },
          ]}
        />
        <Header />
        <div id="top" className="sr-only">
          <Link href="#main"> skip to main cotent</Link>
        </div>
        <main className="relative" id="main">
          {children}
        </main>
      </body>
    </html>
  );
}