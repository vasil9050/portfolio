"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { resumeData } from "@/lib/resume-data";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Notable Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground text-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}