import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { ProjectsGrid } from "@/components/projects-grid"
import { SocialLinks } from "@/components/social-links"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-14 md:h-16 items-center justify-between px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <Navigation />
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-32 pb-16 space-y-24 md:space-y-32 max-w-7xl">
        <section id="about" className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
              Vinyas Hegde
            </h1>
            <h2 className="text-2xl text-muted-foreground">
              Software Developer
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
            "I do a little bit of everything – from web apps to games to mobile development."
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
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">My Projects</h2>
          <ProjectsGrid />
        </section>

        <section id="contact" className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-[700px]">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:vinyasvasanthegde7@gmail.com">Send me a message</a>
          </Button>
        </section>
      </main>
    </div>
  )
}