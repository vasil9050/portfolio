"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { resumeData } from "@/lib/resume-data";

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="w-8 h-8" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-2">
              <p className="font-medium">{resumeData.education.degree}</p>
              <p className="text-muted-foreground">{resumeData.education.institution}</p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-8 h-8" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-2">
              {resumeData.certifications.map((cert, index) => (
                <li key={index} className="text-muted-foreground">
                  {cert}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}