import { siteConfig } from "@/data/config";
import { ArrowUpRight, Sparkles, Mail, Linkedin, Trophy, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24 pb-20 animate-in fade-in duration-700">
      
      {/* ==================== 1. HERO SECTION (ID: #home) ==================== */}
      <section id="home" className="space-y-6 pt-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
          Hi, I'm {siteConfig.profile.name} <span className="animate-wave inline-block">👋</span>
        </h1>
        
        <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 bg-card border border-card-border w-fit px-4 py-2 rounded-full shadow-sm">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             Based in {siteConfig.profile.location}
        </div>
        
        <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
          {siteConfig.profile.bio}
        </p>
      </section>

      {/* ==================== 2. ABOUT SECTION (ID: #about) ==================== */}
      <section id="about">
         <div className="bg-card border border-card-border p-8 rounded-3xl relative overflow-hidden group shadow-sm">
            
            <div className="hidden dark:block absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">About Me</h3>
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="flex-1 space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <p>
                       I started my coding journey in 2023. Fast forward to today, I've had the privilege of building software for a 
                       <span className="text-foreground font-bold"> start-up, a student organization, and various freelance clients.</span>
                    </p>
                    <p>
                       My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                    </p>
                </div>
                {/* Stats */}
                <div className="flex gap-4 w-full md:w-auto">
                    <div className="bg-background p-4 rounded-2xl border border-card-border text-center flex-1 md:w-32 shadow-sm">
                        <span className="block text-3xl font-bold text-foreground">2+</span>
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">Years Exp</span>
                    </div>
                    <div className="bg-background p-4 rounded-2xl border border-card-border text-center flex-1 md:w-32 shadow-sm">
                        <span className="block text-3xl font-bold text-orange-500">15+</span>
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">Projects</span>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* SKILLS SECTION */}
      <section>
        <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-orange-500" size={20} />
            <h3 className="text-xl font-bold text-foreground">Professional Skills</h3>
        </div>
        
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {siteConfig.skills.map((skill, idx) => (
                <div key={idx} className="group flex flex-col items-center gap-3 p-3 rounded-2xl bg-card border border-card-border hover:border-orange-500/30 transition-all hover:-translate-y-1 shadow-sm">
                    <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-background border border-card-border group-hover:border-orange-500/30 transition-colors overflow-hidden">
                        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${skill.color} blur-md group-hover:opacity-40 transition-all`}></div>
                        
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className={`relative z-10 w-8 h-8 object-contain drop-shadow-sm group-hover:scale-110 transition-transform ${skill.name === "Next.js" ? "dark:invert" : ""}`}
                        />
                    </div>
                    <span className="text-xs font-medium text-zinc-500 group-hover:text-foreground text-center">
                      {skill.name}
                    </span>
                </div>
            ))}
        </div>
      </section>

      {/* ==================== 3. ACHIEVEMENTS SECTION (ID: #achievements) ==================== */}
      <section id="achievements">
         <div className="flex items-center gap-2 mb-8">
             <Trophy className="text-yellow-500" size={24} />
             <h3 className="text-2xl font-bold text-foreground">Achievements</h3>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {siteConfig.achievements.map((item, idx) => (
               <div key={idx} className="group p-6 rounded-3xl bg-card border border-card-border hover:border-orange-500/30 transition-all shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-600 dark:text-yellow-500 border border-yellow-500/20 group-hover:scale-110 transition-transform">
                          <Trophy size={20} />
                      </div>
                      <span className="text-xs font-medium text-zinc-500 flex items-center gap-1 bg-background px-2 py-1 rounded-lg border border-card-border">
                          <Calendar size={12} /> {item.year}
                      </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-orange-500 transition-colors">{item.title}</h4>
                  <p className="text-sm text-zinc-500 font-medium mb-2">{item.issuer}</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.description}</p>
               </div>
            ))}
         </div>
      </section>

      {/* ==================== 4. PROJECTS SECTION (ID: #projects) ==================== */}
      <section id="projects">
         <div className="flex items-center justify-between mb-8">
             <h3 className="text-2xl font-bold text-foreground">Featured Projects</h3>
             <a href="https://github.com" target="_blank" className="text-sm text-zinc-500 hover:text-foreground flex items-center gap-1 transition-colors">
                View all <ArrowUpRight size={14}/>
             </a>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group rounded-3xl bg-card border border-card-border overflow-hidden hover:border-orange-500/30 transition-all shadow-sm">
                <div className="h-48 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h4 className="text-xl font-bold text-foreground mb-1">E-Commerce Dashboard</h4>
                            <p className="text-zinc-500 text-sm">Fullstack admin panel with analytics.</p>
                        </div>
                        <a href="#" className="p-2 bg-background rounded-full text-foreground hover:bg-orange-500 hover:text-white transition-colors border border-card-border">
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="group rounded-3xl bg-card border border-card-border overflow-hidden hover:border-orange-500/30 transition-all shadow-sm">
                <div className="h-48 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h4 className="text-xl font-bold text-foreground mb-1">AI Chatbot Interface</h4>
                            <p className="text-zinc-500 text-sm">Modern chat UI with OpenAI integration.</p>
                        </div>
                        <a href="#" className="p-2 bg-background rounded-full text-foreground hover:bg-orange-500 hover:text-white transition-colors border border-card-border">
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* ==================== 5. CONTACT SECTION (ID: #contact) ==================== */}
      <section id="contact" className="text-center py-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to start a project?</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg mx-auto">
              I'm currently available for freelance work. If you have a project that needs some creative touch, feel free to contact me.
          </p>
          
          <div className="flex justify-center gap-4">
              {/* FIX: Ganti mailto: dengan Link Gmail Compose langsung */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=wijaya.kevinn@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                  <Mail size={18} />
                  Send Email
              </a>

              {/* Tombol LinkedIn (Tetap sama) */}
              <a 
                href="https://www.linkedin.com/in/kevin-dwi-wijaya-95aa812b4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-card text-foreground border border-card-border px-6 py-3 rounded-full font-medium hover:border-orange-500/50 transition-colors"
              >
                  <Linkedin size={18} />
                  LinkedIn
              </a>
          </div>
      </section>

    </div>
  );
}