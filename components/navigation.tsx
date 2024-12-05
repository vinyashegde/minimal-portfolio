"use client"

import { MobileNav } from "./mobile-nav"
import { DesktopNav } from "./desktop-nav"
import { motion } from "framer-motion"

export function Navigation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center flex-1"
    >
      <MobileNav />
      <DesktopNav />
    </motion.div>
  )
}