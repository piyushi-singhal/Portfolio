"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  text?: string
  words?: string[]
  className?: string
  cursorClassName?: string
}

export function TypewriterEffect({ text, words, className, cursorClassName }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (text) {
      // Single text typing effect
      if (displayText.length < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1))
        }, 100)

        return () => clearTimeout(timeout)
      }
    } else if (words && words.length > 0) {
      // Multiple words typing effect
      const currentWord = words[wordIndex]

      if (isDeleting) {
        if (displayText.length === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        } else {
          const timeout = setTimeout(() => {
            setDisplayText(currentWord.substring(0, displayText.length - 1))
          }, 50)

          return () => clearTimeout(timeout)
        }
      } else {
        if (displayText === currentWord) {
          const timeout = setTimeout(() => {
            setIsDeleting(true)
          }, 2000)

          return () => clearTimeout(timeout)
        } else {
          const timeout = setTimeout(() => {
            setDisplayText(currentWord.substring(0, displayText.length + 1))
          }, 100)

          return () => clearTimeout(timeout)
        }
      }
    }
  }, [displayText, text, words, wordIndex, isDeleting])

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span>{displayText}</span>
      <motion.span
        className={cn("ml-1 inline-block w-0.5 h-5 bg-primary", cursorClassName)}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  )
}

