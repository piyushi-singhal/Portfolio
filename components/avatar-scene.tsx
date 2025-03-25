"use client"

import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function AvatarScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()
  const pulseControls = useAnimation()

  const floatY = useMotionValue(0)
  const rotate = useMotionValue(0)

  const shadowOpacity = useTransform(floatY, [-10, 10], [0.3, 0.15])
  const shadowBlur = useTransform(floatY, [-10, 10], [15, 5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const moveX = (clientX - windowWidth / 2) / 50
      const moveY = (clientY - windowHeight / 2) / 50

      setMousePosition({ x: moveX, y: moveY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Floating animation
    const floatAnimation = async () => {
      while (true) {
        await controls.start({
          y: [0, -10, 0, 10, 0],
          transition: {
            duration: 6,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        })
      }
    }

    // Rotation animation
    const rotateAnimation = async () => {
      while (true) {
        await controls.start({
          rotateY: [0, 5, 0, -5, 0],
          transition: {
            duration: 8,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        })
      }
    }

    // Pulse animation for the glow
    const pulseAnimation = async () => {
      while (true) {
        await pulseControls.start({
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
          transition: {
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        })
      }
    }

    floatAnimation()
    rotateAnimation()
    pulseAnimation()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [controls, pulseControls])

  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Glow effect */}
      <motion.div
        animate={pulseControls}
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl"
      />

      {/* Avatar container */}
      <motion.div
        animate={controls}
        style={{
          rotateX: -mousePosition.y * 2,
          rotateY: mousePosition.x * 2,
          y: floatY,
        }}
        className="relative z-10 w-80 h-80"
      >
        {/* Avatar */}
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl bg-gradient-to-br from-gray-900 to-black">
          <div className="w-full h-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-9xl">
            <span className="animate-pulse">👩‍💻</span>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gray-900 p-2 border border-gray-800"
          animate={{
            rotate: [0, 360],
            transition: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
            ✨
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gray-900 p-1.5 border border-gray-800"
          animate={{
            scale: [1, 1.1, 1],
            transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-xl">
            💻
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 -right-10 w-14 h-14 rounded-full bg-gray-900 p-1 border border-gray-800"
          animate={{
            y: [0, -15, 0],
            transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-lg">
            🚀
          </div>
        </motion.div>

        {/* Shadow */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-8 rounded-full bg-black"
          style={{
            opacity: shadowOpacity,
            filter: `blur(${shadowBlur}px)`,
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/50"
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.25,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
            transition: {
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            },
          }}
        />
      ))}
    </div>
  )
}

