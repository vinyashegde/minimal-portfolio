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
    image: "https://private-user-images.githubusercontent.com/46837876/384619377-e831e644-11ed-46a9-b608-33053472b722.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzMzODg5ODEsIm5iZiI6MTczMzM4ODY4MSwicGF0aCI6Ii80NjgzNzg3Ni8zODQ2MTkzNzctZTgzMWU2NDQtMTFlZC00NmE5LWI2MDgtMzMwNTM0NzJiNzIyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjA1VDA4NTEyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE0YTA2ZmVlNjdmNThiM2NkOGI4MjY2ZjYyYTQ4MDFmOTkyYWZlYTM4MjczMGViOGIwMmJiNTIxM2E5YjkyZWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.iIeEo4XyqUwF7b5aIEQRoeHzuUgzq6QXWIkTZYZiwAQ",
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
    image: "https://private-user-images.githubusercontent.com/46837876/382555716-f609eb9e-6977-4cc4-9858-670c29922874.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzMzODkzMTcsIm5iZiI6MTczMzM4OTAxNywicGF0aCI6Ii80NjgzNzg3Ni8zODI1NTU3MTYtZjYwOWViOWUtNjk3Ny00Y2M0LTk4NTgtNjcwYzI5OTIyODc0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjA1VDA4NTY1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEzOTc3YmUxNGY3ZmM5Y2FiNWY4ZjdmYTUzMjQ1NWNiZGFmNjE1Y2JjNjc4NjcwYWUzNmI5NWMxYzU3Y2VjNmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.UJGi2SdWz5NOPSJAh7skW_I4eMRFn5EcazKXxWjs2j0",
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