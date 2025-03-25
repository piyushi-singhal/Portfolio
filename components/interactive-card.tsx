"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useRef, useState } from "react"

interface InteractiveCardProps {
  children: React.ReactNode
  title?: string
}

export function InteractiveCard({ children, title }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    x.set(mouseX)
    y.set(mouseY)
  }

  return (
    <motion.div
      ref={cardRef}
      style={{
        perspective: 1000,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
      }}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
      >
        <Card className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 text-gray-200">
          {title && (
            <div className="p-4 border-b border-gray-800">
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
          )}
          <CardContent className="p-6">{children}</CardContent>
        </Card>

        {/* Shine effect */}
        <motion.div
          style={
            {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.15) 0%, transparent 50%)",
              "--x": useTransform(x, [-100, 100], ["0%", "100%"]),
              "--y": useTransform(y, [-100, 100], ["0%", "100%"]),
              opacity: useTransform([rotateX, rotateY], ([rx, ry]) => Math.abs(rx) + Math.abs(ry) / 20),
              pointerEvents: "none",
            } as any
          }
          className="rounded-lg"
        />
      </motion.div>
    </motion.div>
  )
}

