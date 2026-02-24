"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Gym Workout AI Classifier",
    description:
      "A full-stack AI workout assistant with a Django backend and React/Vite frontend, both containerised with Docker. Uses a deep neural network to correct user posture with 97% accuracy and an LSTM classifier to detect and log 22 distinct workout types from video.",
    tags: ["Python", "Django", "React", "TensorFlow", "MediaPipe", "Docker"],
    github: "https://github.com/dongyiu/DesD_AI_pathway",
    live: null,
  },
  {
    title: "Trackwise.pro",
    description:
      "An open-source job application tracker with a Kanban board and analytics dashboard, currently used by 20+ active users. Integrated the Gmail API to automatically parse application status updates, reducing manual input significantly.",
    tags: ["React", "Node.js", "Gmail API", "REST API"],
    github: "https://github.com/dastardlycole",
    live: "https://trackwise.pro",
  },
  {
    title: "Sales Forecasting Tool",
    description:
      "A time series analysis desktop app for predicting sales for SMEs. Offers dual forecasting with SARIMA and LSTM models, a Tkinter GUI, scenario planning, and performance metrics (RMSE, MAE, SMAPE). Accepts CSV data with optional discount, promotion, and traffic variables.",
    tags: ["Python", "SARIMA", "LSTM", "TensorFlow", "Pandas", "Tkinter"],
    github: "https://github.com/dastardlycole/sales_forecasting_tool",
    live: null,
  },
  {
    title: "Pic to PC Extension",
    description:
      "A Chrome extension that enables direct photo transfer from phone to computer via peer-to-peer WebRTC — no cloud storage or accounts required. Injects an 'Upload from Phone' button next to file inputs; users scan a QR code and photos transfer instantly via WebRTC DataChannel.",
    tags: ["JavaScript", "Chrome Extension", "WebRTC", "CSS"],
    github: "https://github.com/dastardlycole/pic-to-pc-extension",
    live: null,
  },
  {
    title: "D.A.W.G.",
    description:
      "Dogs Are Walking Gamified — a mobile app that turns dog walks into a territory capture game. Users track walks via GPS and claim hexagonal territories using Uber H3. Features streaks, dog mood system, milestones, bathroom tracking, and push notifications.",
    tags: ["React Native", "Expo", "Supabase", "Mapbox", "Zustand", "PostGIS"],
    github: "https://github.com/dastardlycole/project_dawg",
    live: null,
  },
  {
    title: "Doppel",
    description:
      "A React Native mobile application built with TypeScript, targeting both Android and iOS. Bootstrapped with the React Native community CLI with full cross-platform build configurations.",
    tags: ["React Native", "TypeScript", "Android", "iOS"],
    github: "https://github.com/dastardlycole/doppel",
    live: null,
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">03. Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Things I&apos;ve built</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col border border-border rounded-xl p-6 hover:border-foreground/30 transition-colors bg-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-xs font-mono text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-semibold text-base mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
