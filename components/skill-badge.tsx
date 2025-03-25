"use client"

import { motion } from "framer-motion"
import {
  Palette,
  Search,
  LayoutGrid,
  Layers,
  Users,
  Figma,
  Square,
  PenTool,
  Image,
  PenLine,
  Code,
  Library,
  Coffee,
  Database,
  FileText,
  FileCode,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  icon: string
  percentage: number
}

export function SkillBadge({ name, icon, percentage }: SkillBadgeProps) {
  const icons: Record<string, LucideIcon> = {
    Palette,
    Search,
    LayoutGrid,
    Layers,
    Users,
    Figma,
    Square,
    PenTool,
    Image,
    PenLine,
    Code,
    Library,
    Coffee,
    Database,
    FileText,
    FileCode,
  }

  const Icon = icons[icon] || Palette

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10"
    >
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-medium text-gray-200">{name}</h3>
      </div>

      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            "h-full rounded-full",
            percentage > 90
              ? "bg-gradient-to-r from-primary to-secondary"
              : "bg-gradient-to-r from-primary/80 to-secondary/80",
          )}
        />
      </div>
      <div className="mt-1 text-right text-xs text-gray-400">{percentage}%</div>
    </motion.div>
  )
}

