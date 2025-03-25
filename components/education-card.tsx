"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"

interface EducationCardProps {
  institution: string
  degree: string
  period: string
  location: string
  details: string[]
}

export function EducationCard({ institution, degree, period, location, details }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>

          <h3 className="text-xl font-bold mb-1 text-gray-200">{institution}</h3>
          <p className="text-primary font-medium mb-2">{degree}</p>

          <div className="flex items-center text-sm text-gray-400 mb-4">
            <span className="mr-3">{period}</span>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              {location}
            </div>
          </div>

          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="text-sm flex items-start text-gray-300">
                <span className="mr-2 text-primary">•</span>
                {detail}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

