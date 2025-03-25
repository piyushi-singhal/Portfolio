"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AvatarComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      className="relative w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center"
      style={{
        transform: `perspective(1200px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
      }}
    >
      <motion.div
        className="w-72 h-72 rounded-full overflow-hidden border-4 border-background shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-8xl">
          👩‍💻
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-background p-2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl">
          ✨
        </div>
      </motion.div>
    </motion.div>
  )
}

