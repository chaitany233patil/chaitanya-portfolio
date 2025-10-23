import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/footer";
import ThemeProviders from "@/components/ThemeProviders";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaitanya Patil | Full-Stack Developer Portfolio",
  description:
    "Hi, I'm Chaitanya Patil, a Full-Stack Developer from India. I build functional, user-focused web experiences.",
  icons: {
    icon: "/sign_light.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased dark:bg-dark`}>
        <ThemeProviders>
          <Navbar />
          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
