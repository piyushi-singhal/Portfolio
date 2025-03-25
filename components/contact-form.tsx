"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-full flex flex-col items-center justify-center text-center py-12"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Send className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-200">Message Sent!</h3>
          <p className="text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formState.name}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-700 focus:border-primary text-gray-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Your Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formState.email}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-700 focus:border-primary text-gray-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-300">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Project Inquiry"
              required
              value={formState.subject}
              onChange={handleChange}
              className="bg-gray-800/50 border-gray-700 focus:border-primary text-gray-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
              value={formState.message}
              onChange={handleChange}
              className="bg-gray-800/50 border-gray-700 focus:border-primary text-gray-200"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
            disabled={isSubmitting}
          >
            <span className="relative z-10 flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
          </Button>
        </form>
      )}
    </motion.div>
  )
}

