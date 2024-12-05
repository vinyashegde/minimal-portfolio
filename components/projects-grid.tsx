"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const categories = ["All", "Web", "Games", "Android"]

const projects = [
  {
    title: "BackDrop - Text Behind Image",
    description: "a web tool for creating stunning text effects with text behind images",
    image: "https://github.com/vinyashegde/backdrop-text-behind-image/blob/main/384619377-e831e644-11ed-46a9-b608-33053472b722.png?raw=true",
    technologies: ["Python", "Flask", "Tailwind"],
    category: "Web",
    demoUrl: "https://backdrop-text-behind-image.vercel.app/",
    sourceUrl: "https://github.com/vinyashegde/backdrop-text-behind-image",
  },
  {
    title: "Project Floramis",
    description: "Game where users manage plants on an isometric grid with touch zoom, pan, and API plant selection",
    image: "https://raw.githubusercontent.com/vinyashegde/dump/main/Untitled%20design%20(1).png",
    technologies: ["Unity", "C#", "REST API"],
    category: "Games",
    sourceUrl: "https://github.com/vinyashegde/Project-Floramis",
  },
  {
    title: "Shorto: URL Shortener",
    description: "A open source Chrome Extension which shortens your urls in one click with a QR code",
    image: "https://lh3.googleusercontent.com/1PPLFL4RkCAIYIOLH33y5sXCaDFb2maG0mwhazeDNCYZ3N18ZVWZU7o6Gg5D6-V1sEE7jsdCuibfXOn7h7wqfCuoPw=w640-h400-e365-rj-sc0x00ffffff",
    technologies: ["HTML", "Javascript", "Spectre"],
    category: "Web",
    demoUrl: "https://chromewebstore.google.com/detail/shorto-url-shorter/ggjlafhmjnmepkkihggbbgiignajkjcl?hl=en-GB&authuser=0",
    sourceUrl: "https://github.com/vinyashegde/shorto_url_shorter",
  },
  {
    title: "My App",
    description: "A Flutter app blending To-Do, Kanban, and Lo-Fi",
    image: "https://github.com/vinyashegde/myapp/blob/main/382555716-f609eb9e-6977-4cc4-9858-670c29922874.png?raw=true",
    technologies: ["Flutter", "Firebase"],
    category: "Android",
    sourceUrl: "https://github.com/vinyashegde/myapp",
  },
  {
    title: "The Food Bridge",
    description: "The Food Bridge is a website built using Firebase that aims to address the issue of food waste",
    image: "https://raw.githubusercontent.com/vinyashegde/dump/main/Untitled%20design%20(2).png",
    technologies: ["HTML", "Javascript", "Firebase"],
    category: "Web",
    demoUrl: "https://thefoodbridge.web.app/",
    sourceUrl: "https://github.com/vinyashegde/foodbridge-firebase",
  },
  {
    title: "Study Ecommerce",
    description: "a frontend of a website - Best Place to Find Your Educational Notes",
    image: "https://github.com/vinyashegde/study-ecommerce/blob/main/Screenshot%202024-12-05%20143925.png?raw=true",
    technologies: ["Frontend", "HTML", "CSS"],
    category: "Web",
    demoUrl: "https://vinyashegde.github.io/study-ecommerce/",
    sourceUrl: "https://github.com/vinyashegde/study-ecommerce",
  },
  {
    title: "Roll the Rooms",
    description: "Trapped in a dice, complete its six rooms to escape and win",
    image: "https://img.itch.zone/aW1hZ2UvMTYyMzcyOS85NTE2NzY3LnBuZw==/original/ySbybu.png",
    technologies: ["Unity", "C#"],
    category: "Games",
    demoUrl: "https://vinyashegde.itch.io/roll-the-rooms",
    sourceUrl: "https://github.com/vinyashegde/Rolll-the-Rooms",
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