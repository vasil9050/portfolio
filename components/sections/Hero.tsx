"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/lib/resume-data";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center space-y-8 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          {resumeData.name}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          {resumeData.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <Button variant="outline" size="lg">
            <GithubIcon className="mr-2 h-5 w-5" />
            <Link href={"https://github.com/vasil9050/portfolio"}>GitHub</Link>
          </Button>
          <Button variant="outline" size="lg">
            <LinkedinIcon className="mr-2 h-5 w-5" />
            <Link href={"https://www.linkedin.com/in/vasil-bhisti-276b99a4"}>LinkedIn</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Mail className="mr-2 h-5 w-5" />
            <Link href={"mailto:vghisti66@gmail.com"}>Contact</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}