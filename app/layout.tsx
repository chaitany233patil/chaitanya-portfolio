import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-poppins", // Optional: for Tailwind integration
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaitanya Patil | Full-Stack Developer Portfolio",
  description:
    "Hi, I'm Chaitanya Patil, a Full-Stack Developer from India. I build functional, user-focused web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${poppins.variable} antialiased dark:bg-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
