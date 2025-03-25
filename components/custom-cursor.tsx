"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverStart = () => setLinkHovered(true)
    const handleLinkHoverEnd = () => setLinkHovered(false)

    const handleMouseLeave = () => setHidden(true)
    const handleMouseEnter = () => setHidden(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverStart)
      link.addEventListener("mouseleave", handleLinkHoverEnd)
    })

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverStart)
        link.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
    }
  }, [])

  const variants = {
    default: {
      x: position.x - 24, // Increased from 16 to 24
      y: position.y - 24, // Increased from 16 to 24
      opacity: hidden ? 0 : 1,
    },
    clicked: {
      x: position.x - 24, // Increased from 16 to 24
      y: position.y - 24, // Increased from 16 to 24
      scale: 0.8,
      opacity: hidden ? 0 : 1,
    },
    hovered: {
      x: position.x - 32, // Increased from 24 to 32
      y: position.y - 32, // Increased from 24 to 32
      width: 64, // Increased from 48 to 64
      height: 64, // Increased from 48 to 64
      opacity: hidden ? 0 : 0.7,
      mixBlendMode: "difference" as const,
    },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-50 border-2 border-primary mix-blend-difference"
        variants={variants}
        animate={linkHovered ? "hovered" : clicked ? "clicked" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white pointer-events-none z-50 mix-blend-difference"
        style={{
          x: position.x - 6,
          y: position.y - 6,
          opacity: hidden ? 0 : 1,
        }}
      />
    </>
  )
}

