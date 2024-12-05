import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { ProjectsGrid } from "@/components/projects-grid"
import { SocialLinks } from "@/components/social-links"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Navigation />
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-6 pt-32 pb-16 space-y-32">
        <section id="about" className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              John Doe
            </h1>
            <h2 className="text-2xl text-muted-foreground">
              Software Developer
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              I build exceptional digital experiences that combine elegant design with
              robust functionality. Specialized in web applications, games, and mobile development.
            </p>
          </div>
          <SocialLinks />
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </Button>
        </section>

        <section id="projects" className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <ProjectsGrid />
        </section>

        <section id="contact" className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:contact@example.com">Send me a message</a>
          </Button>
        </section>
      </main>
    </div>
  )
}