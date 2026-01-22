"use client";
import { siteConfig } from "@/data/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"; // Biar ada animasi smooth

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
      <nav className="flex items-center justify-around bg-card/80 backdrop-blur-md border border-card-border p-2 rounded-full shadow-lg">
        {siteConfig.menu.map((item, idx) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.includes(item.href));
          
          return (
            <Link 
              key={idx} 
              href={item.href}
              className="relative p-3 rounded-full transition-colors"
            >
              {isActive && (
                 <motion.div
                   layoutId="mobile-nav-pill"
                   className="absolute inset-0 bg-primary/10 rounded-full"
                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
                 />
              )}
              {/* Icon */}
              <item.icon 
                size={20} 
                className={`relative z-10 transition-colors ${isActive ? "text-orange-500" : "text-zinc-500"}`} 
              />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}