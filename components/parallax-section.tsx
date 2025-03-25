"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function ParallaxSection({ children, className, id }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])

  return (
    <section ref={ref} id={id} className={cn(className)}>
      <motion.div style={{ y, opacity }} className="w-full h-full">
        {children}
      </motion.div>
    </section>
  )
}

