"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { motion } from "framer-motion"

const sections = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
]

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {sections.map((section) => (
          <NavigationMenuItem key={section.title}>
            <Link href={section.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {section.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}