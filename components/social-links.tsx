"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SocialLinks() {
  const { toast } = useToast()

  const handleResumeDownload = () => {
    // In a real app, this would be a real download link
    toast({
      title: "Resume Download Started",
      description: "Your resume will be downloaded shortly.",
    })
  }

  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="outline" size="lg" asChild>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-5 w-5" />
          GitHub
        </a>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="mr-2 h-5 w-5" />
          LinkedIn
        </a>
      </Button>
      <Button variant="outline" size="lg" onClick={handleResumeDownload}>
        <FileText className="mr-2 h-5 w-5" />
        Download Resume
      </Button>
    </div>
  )
}