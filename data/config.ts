import { 
  LayoutDashboard, 
  User, 
  Trophy, 
  FolderGit2, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter 
} from "lucide-react";

export const siteConfig = {
  // --- 1. METADATA (Untuk SEO & Social Preview) ---
  metadata: {
    title: "Kevin Dwi | Fullstack Developer Portfolio",
    description: "Portfolio of Kevin Dwi, a Fullstack Developer based in Kediri specializing in Next.js, React, and Laravel.",
    keywords: ["Next.js", "React", "Tailwind CSS", "Portfolio", "Web Developer", "Kevin Dwi"],
    authors: { name: "Kevin Dwi", url: "https://kevindwi.com" },
    creator: "Kevin Dwi",
    // Ganti ini dengan domain Vercel aslimu nanti biar gambarnya muncul
    baseUrl: "https://my-portfolio-template.vercel.app", 
  },

  // --- 2. PROFILE DATA ---
  profile: {
    name: "Kevin Dwi",
    username: "@kepskuyypov", // Wajib ada untuk Sidebar
    role: "Fullstack Developer",
    bio: "Experienced developer building scalable solutions. I work with Next.js, TypeScript, and Laravel to craft responsive interfaces.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin", 
    location: "Kediri, Indonesia",
    status: "Available for freelance"
  },
  
  // --- 3. NAVIGATION MENU ---
  menu: [
    { label: "Home", icon: LayoutDashboard, href: "#home" },
    { label: "About", icon: User, href: "#about" },
    { label: "Achievements", icon: Trophy, href: "#achievements" },
    { label: "Projects", icon: FolderGit2, href: "#projects" },
    { label: "Contact", icon: Mail, href: "#contact" },
  ],

  // --- 4. SKILLS ---
  skills: [
    { 
      name: "HTML", 
      color: "from-orange-400 to-orange-600",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    { 
      name: "CSS", 
      color: "from-blue-400 to-blue-600",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    { 
      name: "React", 
      color: "from-cyan-400 to-cyan-600",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    { 
      name: "Next.js", 
      color: "from-zinc-100 to-zinc-400",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
    },
    { 
      name: "TypeScript", 
      color: "from-blue-500 to-blue-700",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },
    { 
      name: "Tailwind", 
      color: "from-cyan-300 to-cyan-500",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    { 
      name: "Laravel", 
      color: "from-red-500 to-red-700",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
    },
    { 
      name: "MySQL", 
      color: "from-blue-800 to-blue-900",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
  ],

  // --- 5. ACHIEVEMENTS ---
  achievements: [
    {
      title: "1st Place Hackathon",
      issuer: "Polinema Coding Competition",
      year: "2025",
      description: "Built a smart waste management system using IoT and Next.js."
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      description: "Certified globally for cloud infrastructure fundamentals."
    },
    {
      title: "Finalist Gemastik",
      issuer: "Kemendikbud",
      year: "2023",
      description: "Top 10 finalist in UX Design category among 500+ teams."
    }
  ],

  // --- 6. SOCIAL LINKS ---
  socials: [
    { label: "GitHub", icon: Github, href: "https://github.com/Crown-us", color: "hover:text-white" },
    { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-500" },
    { label: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-sky-400" },
  ]
};