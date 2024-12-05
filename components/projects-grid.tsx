"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const categories = ["All", "Web", "Games", "Android"]

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart and checkout",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    category: "Web",
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
  {
    title: "Puzzle Adventure",
    description: "An immersive puzzle game with beautiful graphics",
    image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=800&q=80",
    technologies: ["Unity", "C#", "Blender"],
    category: "Games",
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts and nutrition",
    image: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?w=800&q=80",
    technologies: ["Kotlin", "Firebase", "Material Design"],
    category: "Android",
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
  // Add more projects as needed
]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </motion.div>
    </div>
  )
}