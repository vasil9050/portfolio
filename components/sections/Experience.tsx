"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { resumeData } from "@/lib/resume-data";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
      
      <div className="space-y-8">
        {resumeData.experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <p className="text-muted-foreground">{job.company} - {job.location}</p>
                </div>
                <p className="text-muted-foreground mt-2 md:mt-0">{job.period}</p>
              </div>
              
              <ul className="list-disc list-inside space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="text-muted-foreground">
                    {achievement}
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