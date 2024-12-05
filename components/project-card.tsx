"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Globe } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  sourceUrl?: string
  index: number
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  sourceUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          {demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
          {sourceUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}