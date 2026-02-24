"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const experience = [
  { company: "Runchow", role: "Software Engineer", period: "Sep 2025 – Present" },
  { company: "Cotswold Doors", role: "Software Engineer Intern", period: "Jan 2026 – Present" },
  { company: "Doghouse", role: "Software Engineer Intern", period: "Dec 2024 – Mar 2025" },
  { company: "Uniper", role: "Software Developer Intern", period: "Sep 2023 – Aug 2024" },
  { company: "Allianz Insurance", role: "Claims Data Intern", period: "Jul 2023 – Sep 2023" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">01. About</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">A bit about me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border border-border mb-6">
              <Image
                src="/profile.jpg"
                alt="Ifemide Cole"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              I&apos;m a software engineer with a First Class Honours degree in Computer Science from the
              University of the West of England. I co-founded a software startup, Runchow, where I lead
              end-to-end engineering of scalable web solutions for clients.
            </p>
            <p>
              I have a strong background across the full stack — from building AI-powered applications with
              Python, TensorFlow and Django, to crafting responsive frontends with React and TypeScript. I
              thrive at the intersection of engineering and problem-solving.
            </p>
            <p>
              I&apos;m currently open to new opportunities where I can contribute to meaningful products,
              work with talented teams, and keep growing as an engineer.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
              Experience
            </h3>
            {experience.map(({ company, role, period }) => (
              <div
                key={company}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-border/50"
              >
                <div>
                  <p className="text-sm font-medium">{company}</p>
                  <p className="text-xs text-muted-foreground">{role}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground mt-1 sm:mt-0">{period}</span>
              </div>
            ))}

            <div className="pt-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground w-24 shrink-0">Education</span>
                <span className="text-sm">BSc Computer Science, UWE Bristol — 1:1 (First Class Honours)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground w-24 shrink-0">Status</span>
                <span className="text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Open to opportunities
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground w-24 shrink-0">Based in</span>
                <span className="text-sm">UK</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
