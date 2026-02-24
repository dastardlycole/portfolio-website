import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-border/50" />
      </div>

      <About />

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-border/50" />
      </div>

      <Skills />

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-border/50" />
      </div>

      <Projects />

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-border/50" />
      </div>

      <Contact />

      <footer className="py-8 px-6 text-center">
        <p className="text-xs font-mono text-muted-foreground">
          Built by Ifemide Cole &middot; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  )
}
