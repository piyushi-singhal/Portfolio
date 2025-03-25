"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FloatingNavbarProps {
  activeSection: string
}

export function FloatingNavbar({ activeSection }: FloatingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
      >
        <div
          className={`mx-auto px-4 md:px-6 transition-all duration-300 ${
            isScrolled
              ? "bg-gray-900/85 backdrop-blur-xl shadow-xl rounded-full max-w-5xl border border-gray-800/50"
              : "bg-transparent max-w-7xl"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="#" className="text-xl font-bold text-gray-200">
              PIYUSHI
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "home")
                      ? "text-primary font-semibold drop-shadow-glow"
                      : "text-gray-200 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-200 hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-200 hover:bg-gray-800"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="flex flex-col items-center justify-center flex-1 space-y-6 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-2xl font-medium ${
                      activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "home")
                        ? "text-primary"
                        : "text-gray-300"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

