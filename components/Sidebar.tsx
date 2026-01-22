"use client";
import { siteConfig } from "@/data/config";
import Link from "next/link";
import { CheckCircle2, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState(siteConfig.menu[0].href);
  
  // Logic Dark Mode
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    // UPDATED: Pakai class 'bg-background' dan 'border-card-border' (lebih pendek)
    <aside className="hidden md:flex flex-col w-72 h-screen fixed left-0 top-0 bg-background border-r border-card-border p-6 z-50 transition-colors duration-300">
      
      {/* Profile Section */}
      <div className="flex flex-col gap-4 mb-10 mt-4 px-2">
        <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-orange-500 to-yellow-500">
          <img 
            src={siteConfig.profile.avatar} 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover bg-background border-2 border-background"
          />
        </div>
        <div>
          <h2 className="font-bold text-foreground text-lg flex items-center gap-1">
            {siteConfig.profile.name}
            <CheckCircle2 size={16} className="text-blue-500 fill-blue-500/10" />
          </h2>
          <p className="text-xs text-zinc-500 font-medium">{siteConfig.profile.username}</p>
        </div>
      </div>

      {/* Menu Navigation */}
      <nav className="flex flex-col gap-2 flex-1 px-2">
        <div className="text-[10px] font-bold text-zinc-500 mb-3 uppercase tracking-widest">Navigation</div>
        
        {siteConfig.menu.map((item, idx) => {
          const isActive = activeTab === item.href;
          return (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setActiveTab(item.href)}
              className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 
              ${isActive ? "text-foreground" : "text-zinc-500 hover:text-foreground"}`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  // UPDATED: Pakai 'bg-card'
                  className="absolute inset-0 bg-card border border-card-border rounded-xl shadow-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }} 
                />
              )}
              <span className="relative z-10 flex items-center gap-3">
                 <item.icon size={18} className={isActive ? "text-orange-500" : ""} />
                 {item.label}
              </span>
            </Link>
          )
        })}
      </nav>

      {/* Footer & Theme Toggle */}
      <div className="mt-auto px-2 pb-4 space-y-4">
        
        {mounted && (
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            // UPDATED: Pakai 'bg-card' dan 'text-foreground'
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-card border border-card-border text-sm font-medium text-foreground hover:border-orange-500/50 transition-all"
          >
            <span className="flex items-center gap-2">
               {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
               {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
            <div className={`w-8 h-4 rounded-full relative transition-colors ${theme === "dark" ? "bg-orange-500" : "bg-zinc-300"}`}>
                <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${theme === "dark" ? "left-4.5" : "left-0.5"}`}></div>
            </div>
          </button>
        )}

        <div className="text-center">
            <p className="text-[10px] text-zinc-500">
                &copy; 2026 {siteConfig.profile.name}.
            </p>
        </div>
      </div>
    </aside>
  );
}