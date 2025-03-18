"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Code2, Database, Wrench, Brain } from "lucide-react";
import { resumeData } from "@/lib/resume-data";

const skillThemes = {
  frontend: {
    icon: Code2,
    gradient: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-500/10",
    borderColor: "border-blue-500/20"
  },
  backend: {
    icon: Database,
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-500/10",
    borderColor: "border-purple-500/20"
  },
  tools: {
    icon: Wrench,
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-500/10",
    borderColor: "border-amber-500/20"
  },
  key: {
    icon: Brain,
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  }
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Core Competencies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard 
            title="Frontend Development" 
            skills={resumeData.skills.frontend} 
            variants={itemVariants}
            theme={skillThemes.frontend}
          />
          <SkillCard 
            title="Backend Development" 
            skills={resumeData.skills.backend} 
            variants={itemVariants}
            theme={skillThemes.backend}
          />
          <SkillCard 
            title="Tools & Technologies" 
            skills={resumeData.skills.tools} 
            variants={itemVariants}
            theme={skillThemes.tools}
          />
          <SkillCard 
            title="Key Skills" 
            skills={resumeData.skills.key} 
            variants={itemVariants}
            theme={skillThemes.key}
          />
        </div>
      </motion.div>
    </section>
  );
}

interface SkillCardProps {
  title: string;
  skills: string[];
  variants: any;
  theme: {
    icon: any;
    gradient: string;
    iconBg: string;
    borderColor: string;
  };
}

function SkillCard({ title, skills, variants, theme }: SkillCardProps) {
  const Icon = theme.icon;
  
  return (
    <motion.div variants={variants}>
      <Card className={`p-6 h-full border-2 ${theme.borderColor} hover:border-opacity-50 transition-colors duration-300`}>
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-2 rounded-lg ${theme.iconBg}`}>
            <Icon className={`w-6 h-6 bg-gradient-to-r ${theme.gradient} [&>path]:fill-transparent [&>path]:stroke-[2]`} />
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="text-muted-foreground">
              {skill}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}