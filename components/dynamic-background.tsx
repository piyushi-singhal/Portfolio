"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = 150 // Increased from 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 4 + 1 // Increased size range
        this.speedX = Math.random() * 2.5 - 1.25 // Increased speed
        this.speedY = Math.random() * 2.5 - 1.25 // Increased speed
        this.color = `hsla(${Math.random() * 60 + 220}, 80%, 75%, ${Math.random() * 0.4 + 0.2})` // Brighter colors
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    init()

    const connectParticles = () => {
      if (!ctx) return

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 180) {
            // Increased from 150
            const opacity = 1 - distance / 180
            ctx.strokeStyle = `rgba(120, 120, 255, ${opacity * 0.3})` // Brighter color and increased opacity
            ctx.lineWidth = 1.2 // Slightly thicker lines
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesArray.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/90 to-black z-10" />
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -50, 0, 50, 0],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl opacity-20"
        animate={{
          x: [0, -50, 0, 50, 0],
          y: [0, 50, 0, -50, 0],
          scale: [1, 0.9, 1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Additional moving gradients */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl opacity-20"
        animate={{
          x: [0, 70, 0, -70, 0],
          y: [0, -30, 0, 30, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl opacity-20"
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 60, 0, -60, 0],
          scale: [1, 0.8, 1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Additional animated gradient orbs */}
      <motion.div
        className="absolute top-1/3 left-2/3 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl opacity-20"
        animate={{
          x: [0, 60, -30, -60, 30, 0],
          y: [0, -40, -20, 40, 20, 0],
          scale: [1, 1.1, 0.9, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl opacity-15"
        animate={{
          x: [0, -30, -15, 45, 15, 0],
          y: [0, 50, 25, -30, -15, 0],
          scale: [1, 0.9, 1.1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1, 0.8, 1],
          opacity: [0.1, 0.15, 0.1, 0.05, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

