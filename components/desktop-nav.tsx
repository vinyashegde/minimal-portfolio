"use client"

import * as React from "react"
import { motion } from "framer-motion"

const sections = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
]

export function DesktopNav() {
  const [activeSection, setActiveSection] = React.useState("")

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(`#${section.id}`)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
      {sections.map((section) => (
        <a
          key={section.title}
          href={section.href}
          className="relative px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/10"
        >
          <span>{section.title}</span>
          {activeSection === section.href && (
            <motion.div
              layoutId="activeSection"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </a>
      ))}
    </nav>
  )
}