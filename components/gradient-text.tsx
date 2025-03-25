"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  text: string
  className?: string
}

export function GradientText({ text, className }: GradientTextProps) {
  return (
    <motion.h1
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-x",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {text}
    </motion.h1>
  )
}

