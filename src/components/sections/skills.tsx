"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "Django", "RESTful APIs", "MongoDB", "PostgreSQL"],
  },
  {
    category: "AI / ML",
    skills: ["TensorFlow", "LSTM / SARIMA", "MediaPipe", "GenAI / LLMs", "Machine Learning"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "Docker", "Azure", "Linux", "CI/CD", "Claude Code", "Cursor", "Antigravity"],
  },
  {
    category: "Practices",
    skills: ["Agile / Scrum", "System Design", "Data Structures", "Algorithms"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">02. Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What I work with</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
            >
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm">
                    <span className="w-1 h-1 rounded-full bg-foreground/40 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
