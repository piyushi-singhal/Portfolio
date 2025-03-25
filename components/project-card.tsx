"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Eye, Github } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  description: string
  tools: string[]
  link?: string
}

export function ProjectCard({ title, category, image, description, tools, link }: ProjectCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        transition: { duration: 0.2 },
      }}
      style={{
        perspective: 1000,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        x.set(e.clientX - centerX)
        y.set(e.clientY - centerY)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
      >
        <Card className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
          <div className="relative h-48 overflow-hidden group">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white hover:bg-white/20 hover:text-white"
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              {link && (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white hover:bg-white/20 hover:text-white"
                  asChild
                >
                  <Link href={link} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <CardContent className="p-5">
            <Badge variant="outline" className="mb-2 bg-primary/10 border-primary/30 text-primary-foreground">
              {category}
            </Badge>
            <h3 className="font-bold text-lg mb-2 text-gray-200">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                  {tool}
                </Badge>
              ))}
            </div>

            <Link
              href={link || "#"}
              target="_blank"
              className="text-sm font-medium text-primary flex items-center hover:underline"
            >
              View Details
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

