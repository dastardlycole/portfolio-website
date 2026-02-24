"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Github, Linkedin } from "lucide-react"

const links = [
  {
    label: "Email",
    value: "ifemidecole@gmail.com",
    href: "mailto:ifemidecole@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/dastardlycole",
    href: "https://github.com/dastardlycole",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ifemide-cole",
    href: "https://linkedin.com/in/ifemide-cole",
    icon: Linkedin,
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">04. Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in touch</h2>
        <p className="text-muted-foreground max-w-xl mb-12 leading-relaxed">
          I&apos;m currently open to new opportunities. Whether you have a project in mind, a role to discuss,
          or just want to say hi — my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border border-border rounded-xl hover:border-foreground/30 transition-colors group flex-1"
            >
              <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors shrink-0">
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-mono mb-0.5">{label}</p>
                <p className="text-sm font-medium truncate">{value}</p>
              </div>
            </a>
          ))}
        </div>

      </motion.div>
    </section>
  )
}
