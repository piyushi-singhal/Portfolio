"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  image: string
}

export function CertificateCard({ title, issuer, date, image }: CertificateCardProps) {
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
    >
      <Card className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
        <div className="relative h-48 w-full group">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
            <div className="text-white">
              <p className="text-sm font-medium">{issuer}</p>
              <p className="text-xs opacity-80">{date}</p>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-200">{title}</h3>
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <ExternalLink className="h-4 w-4 text-primary" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

