"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SocialLinks() {
  const { toast } = useToast()

  const handleResumeDownload = () => {
    // Redirect to the resume link directly
    window.open("https://drive.google.com/file/d/1MwtB5M_evtnbCe3AJf0L1z2aoVUqZEgv/view?usp=drive_link", "_blank")
    toast({
      title: "Resume Link Opened",
      description: "Your resume is now ready for viewing.",
    })
  }

  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="outline" size="lg" asChild>
        <a href="https://github.com/vinyashegde" target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-5 w-5" />
          GitHub
        </a>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <a href="https://www.linkedin.com/in/vinyas-hegde/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="mr-2 h-5 w-5" />
          LinkedIn
        </a>
      </Button>
      <Button variant="outline" size="lg" onClick={handleResumeDownload}>
        <FileText className="mr-2 h-5 w-5" />
        View Resume
      </Button>
    </div>
  )
}
