import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Appy - Mobile App Landing Page",
  description: "A beautiful mobile app landing page template built with Next.js and Tailwind CSS",
};

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#1a1a1a] text-[#e6d5b8]">
      {children}
    </div>
  );
}
