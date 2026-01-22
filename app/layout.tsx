import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav"; // <--- 1. Import MobileNav
import { ThemeProvider } from "@/components/ThemeProvider";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Dwi | Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${font.className} bg-background text-foreground antialiased`}>
        {/* Bungkus dengan ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          
          <div className="flex min-h-screen relative">
            {/* Sidebar untuk Desktop */}
            <Sidebar />
            
            {/* Mobile Nav untuk HP (Akan muncul di bawah layar) */}
            <MobileNav /> 
            
            <main className="flex-1 md:ml-72 transition-all duration-300">
              <div className="max-w-5xl mx-auto px-6 py-12 md:px-12 md:py-20 min-h-screen">
                  {children}
              </div>
            </main>
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}