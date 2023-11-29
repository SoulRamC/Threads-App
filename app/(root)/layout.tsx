import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSideBar from "@/components/shared/RightSideBar";
import Buttombar from "@/components/shared/Buttombar";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Threads",
  description: "A social media application made using Nextjs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={`${inter.className} font-poppins`}>
          <Topbar></Topbar>
          <main className="flex flex-row">
            <LeftSidebar></LeftSidebar>
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar></RightSideBar>
          </main>
          <Buttombar></Buttombar>
        </body>
      </html>
    </ClerkProvider>
  );
}
