"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  ArrowRight,
  Code,
  Download,
  FileCode,
  Github,
  GraduationCap,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Phone,
} from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { DynamicBackground } from "@/components/dynamic-background"
import { FloatingNavbar } from "@/components/floating-navbar"
import { CertificateCard } from "@/components/certificate-card"
import { AvatarScene } from "@/components/avatar-scene"
import { ParticlesContainer } from "@/components/particles-container"
import { EducationCard } from "@/components/education-card"
import { InteractiveCard } from "@/components/interactive-card"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { CustomCursor } from "@/components/custom-cursor"
import { GradientText } from "@/components/gradient-text"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    certificates: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop
          const height = ref.current.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <DynamicBackground />
      <FloatingNavbar activeSection={activeSection} />
      <CustomCursor />

      {/* Hero Section */}
      <section
        ref={sectionRefs.home}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <ParticlesContainer />

        <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-2"
              >
                <TypewriterEffect
                  text="Hello! I'm Piyushi Singhal"
                  className="text-xl text-primary/90"
                />
              </motion.div>

              <GradientText
                text="PIYUSHI SINGHAL"
                className="text-4xl md:text-6xl font-bold tracking-tighter"
              />

              <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full my-2" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-2"
              >
                <TypewriterEffect
                  words={[
                    "UI/UX Designer",
                    "Frontend Developer",
                    "Creative Thinker",
                  ]}
                  className="text-xl text-gray-300"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-xl text-gray-400 max-w-[600px] mt-2"
              >
                Crafting intuitive and innovative digital experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 mt-6"
              >
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium shadow-lg shadow-primary/20"
                >
                  <Link href="#contact">
                    <span className="relative z-10 text-white drop-shadow-sm">
                      Get in touch
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="group border-gray-700 hover:border-primary/50 text-white hover:text-white bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
                >
                  <Link href="#projects">
                    <span className="relative z-10 drop-shadow-sm">
                      View Projects
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="flex gap-4 mt-6"
              >
                <Link
                  href="https://www.linkedin.com/in/piyushisinghal"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>

                <Link
                  href="https://github.com/piyushi-singhal"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>

                <Link
                  href="https://www.instagram.com/_piyushi._/?hl=en"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center lg:justify-end"
            >
              <AvatarScene />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs.about}
        id="about"
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black z-0"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-gray-700 text-gray-300"
            >
              About Me
            </Badge>
            <GradientText
              text="Passionate UI/UX Designer & Developer"
              className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
            />
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300">
                I'm Piyushi Singhal, a UI/UX designer and developer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. Currently pursuing Computer Science
                Engineering with a specialization in Software Engineering at SRM
                Institute of Science and Technology.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="text-sm py-1 bg-gray-800 hover:bg-gray-700 text-gray-300"
                >
                  UI Design
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm py-1 bg-gray-800 hover:bg-gray-700 text-gray-300"
                >
                  Web Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm py-1 bg-gray-800 hover:bg-gray-700 text-gray-300"
                >
                  Prototyping
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm py-1 bg-gray-800 hover:bg-gray-700 text-gray-300"
                >
                  Wireframing
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm py-1 bg-gray-800 hover:bg-gray-700 text-gray-300"
                >
                  Blockchain
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm py-1 bg-gray-800 hover:bg-gray-700 text-gray-300"
                >
                  AI/ML
                </Badge>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-gray-700 hover:border-primary/50 text-white hover:text-white bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
                >
                  <Link href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 hover:border-primary/50 text-white hover:text-white bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <InteractiveCard title="Currently Learning & Interests">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-gray-200">
                      Areas of Interest
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 hover:border-purple-500/50 text-purple-300">
                        Blockchain
                      </Badge>
                      <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 hover:border-blue-500/50 text-blue-300">
                        AI/ML
                      </Badge>
                      <Badge className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-300">
                        UI/UX Design
                      </Badge>
                      <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 hover:border-orange-500/50 text-orange-300">
                        Web Development
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-gray-200">
                      Recent Projects
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <FileCode className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-300">
                          Quantum Tokenization - Blockchain and hashing Security
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <FileCode className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-300">
                          FanFirst - Priority tickets according to fanscore
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <FileCode className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-300">
                          Amazon-Inspired E-Commerce Platform
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-gray-200">
                      College Activities
                    </h4>
                    <p className="text-sm text-gray-400">
                      Active member of AARUUSH digital design domain for 2
                      years. Currently involved in creatives domain of
                      blockchain and think digital clubs at SRM.
                    </p>
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={sectionRefs.skills}
        id="skills"
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black z-0"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-gray-700 text-gray-300"
            >
              My Expertise
            </Badge>
            <GradientText
              text="Skills & Technologies"
              className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
            />
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <SkillBadge name="UI Design" icon="Palette" percentage={90} />
            <SkillBadge name="Figma" icon="Figma" percentage={90} />
            <SkillBadge name="Adobe Photoshop" icon="Image" percentage={75} />
            <SkillBadge name="Canva" icon="Palette" percentage={90} />

            <SkillBadge name="Wireframing" icon="LayoutGrid" percentage={85} />
            <SkillBadge name="Prototyping" icon="Layers" percentage={85} />
            <SkillBadge name="HTML" icon="Code" percentage={85} />
            <SkillBadge name="CSS" icon="Code" percentage={80} />
            <SkillBadge name="JavaScript" icon="Filecode" percentage={75} />
            <SkillBadge name="MySQL" icon="Database" percentage={80} />
            <SkillBadge name="React" icon="Code" percentage={75} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "HTML", icon: "🌐" },
                { name: "CSS", icon: "🎨" },
                { name: "React", icon: "📜" },
              ].map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/50 backdrop-blur-md rounded-lg p-4 text-gray-200 text-center border border-gray-800 hover:border-primary/50 shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{lang.icon}</div>
                  <div className="font-medium">{lang.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={sectionRefs.projects}
        id="projects"
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black z-0"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="mb-4">
              <GradientText
                text="MY WORK"
                className="text-5xl md:text-6xl font-bold tracking-tighter"
              />
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
                >
                  Web Design
                </TabsTrigger>
                <TabsTrigger
                  value="blockchain"
                  className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
                >
                  Blockchain
                </TabsTrigger>
                <TabsTrigger
                  value="other"
                  className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
                >
                  Other
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Quantum Tokenization"
                  category="Blockchain"
                  image="e3eaa9b96d7478bab282f74f075c32d2.jpg"
                  description="Implemented Quantum Tokenization leveraging Quantum Random Number Generators for token creation, significantly mitigating quantum computing threats in blockchain applications."
                  tools={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Blockchain",
                    "IBM Qiskit",
                  ]}
                  link="https://github.com/akshpuri30/quantum-tokenization"
                />
                <ProjectCard
                  title="Amazon-Inspired E-Commerce"
                  category="Web Design"
                  image="/placeholder.svg?height=600&width=800"
                  description="Redesigned and optimized the Amazon homepage clone to enhance user engagement and personalization, improving the UI/UX experience."
                  tools={["Figma", "HTML", "CSS"]}
                  link="https://github.com/akshpuri30/amazon-clone"
                />
                <ProjectCard
                  title="Library Management System"
                  category="Other"
                  image="/placeholder.svg?height=600&width=800"
                  description="Designed and implemented a Library Management System in C, enabling efficient book cataloging, user management, and transaction handling."
                  tools={["C"]}
                  link="https://github.com/akshpuri30/library-management"
                />
                <ProjectCard
                  title="FanFirst"
                  category="Web Design"
                  image="/placeholder.svg?height=600&width=800"
                  description="A platform designed to enhance fan engagement and experience through interactive features and personalized content."
                  tools={["HTML", "CSS", "JavaScript", "React"]}
                  link="#"
                />
                <ProjectCard
                  title="Portfolio Website"
                  category="Web Design"
                  image="/placeholder.svg?height=600&width=800"
                  description="A dynamic portfolio website showcasing my skills, projects, and achievements with interactive animations and responsive design."
                  tools={["Next.js", "Tailwind CSS", "Framer Motion"]}
                  link="#"
                />
                <ProjectCard
                  title="Blockchain Explorer"
                  category="Blockchain"
                  image="/placeholder.svg?height=600&width=800"
                  description="A tool for visualizing and exploring blockchain transactions and data structures in an intuitive interface."
                  tools={["React", "Web3.js", "D3.js"]}
                  link="#"
                />
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Amazon-Inspired E-Commerce"
                  category="Web Design"
                  image="/placeholder.svg?height=600&width=800"
                  description="Redesigned and optimized the Amazon homepage clone to enhance user engagement and personalization, improving the UI/UX experience."
                  tools={["Figma", "HTML", "CSS"]}
                  link="https://github.com/akshpuri30/amazon-clone"
                />
                <ProjectCard
                  title="FanFirst"
                  category="Web Design"
                  image="/placeholder.svg?height=600&width=800"
                  description="A platform designed to enhance fan engagement and experience through interactive features and personalized content."
                  tools={["HTML", "CSS", "JavaScript", "React"]}
                  link="#"
                />
                <ProjectCard
                  title="Portfolio Website"
                  category="Web Design"
                  image="/placeholder.svg?height=600&width=800"
                  description="A dynamic portfolio website showcasing my skills, projects, and achievements with interactive animations and responsive design."
                  tools={["Next.js", "Tailwind CSS", "Framer Motion"]}
                  link="#"
                />
              </div>
            </TabsContent>

            <TabsContent value="blockchain" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Quantum Tokenization"
                  category="Blockchain"
                  image="/placeholder.svg?height=600&width=800"
                  description="Implemented Quantum Tokenization leveraging Quantum Random Number Generators for token creation, significantly mitigating quantum computing threats in blockchain applications."
                  tools={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Blockchain",
                    "IBM Qiskit",
                  ]}
                  link="https://github.com/akshpuri30/quantum-tokenization"
                />
                <ProjectCard
                  title="Blockchain Explorer"
                  category="Blockchain"
                  image="/placeholder.svg?height=600&width=800"
                  description="A tool for visualizing and exploring blockchain transactions and data structures in an intuitive interface."
                  tools={["React", "Web3.js", "D3.js"]}
                  link="#"
                />
              </div>
            </TabsContent>

            <TabsContent value="other" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Library Management System"
                  category="Other"
                  image="/placeholder.svg?height=600&width=800"
                  description="Designed and implemented a Library Management System in C, enabling efficient book cataloging, user management, and transaction handling."
                  tools={["C"]}
                  link="https://github.com/akshpuri30/library-management"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Education Section */}
      <section
        ref={sectionRefs.education}
        id="education"
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black z-0"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="mb-4">
              <GradientText
                text="MY JOURNEY"
                className="text-5xl md:text-6xl font-bold tracking-tighter"
              />
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
              Education & Learning
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <EducationCard
              institution="SRM Institute of Science and Technology"
              degree="B.Tech in Computer Science Engineering with Software Engineering"
              period="2023 - 2027"
              location="Chennai, India"
              details={[
                "CGPA: 8.6",
                "Coursework: Computer Architecture, DBMS, OODP, Advanced Programming",
                "Active member of AARUUSH digital design domain",
                "Currently in 2nd year",
              ]}
            />

            <EducationCard
              institution="St. Anselms Pink City School"
              degree="Senior Secondary Education (PCMB), CBSE"
              period="2021 - 2023"
              location="India"
              details={["Percentage: 79%"]}
            />

            <EducationCard
              institution="St. Anselms Pink City School"
              degree="Higher Secondary Education, CBSE"
              period="2010 - 2021"
              location="India"
              details={["Percentage: 92%"]}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">
              Technical Qualifications
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-200">
                    Mastering DSA in C/C++
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">Udemy</p>
                  <p className="text-sm text-gray-300">
                    Implemented advanced data structures and algorithms with
                    optimization techniques focusing on time and space
                    complexity using C/C++.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-200">
                    Programming in C
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">Udemy</p>
                  <p className="text-sm text-gray-300">
                    Demonstrated proficiency in C programming fundamentals
                    including pointers, memory management, and file handling
                    through modular command-line applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-200">
                    Database Structures and Management with MySQL
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">Coursera</p>
                  <p className="text-sm text-gray-300">
                    Developing expertise in MySQL database operations including
                    data creation, querying, and manipulation using SQL
                    statements and data types.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section
        ref={sectionRefs.certificates}
        id="certificates"
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black z-0"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <GradientText
              text="Certificates & Hackathons"
              className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
            />
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
          </div>

          <Tabs defaultValue="certificates" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <TabsTrigger
                  value="certificates"
                  className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
                >
                  Certificates
                </TabsTrigger>
                <TabsTrigger
                  value="hackathons"
                  className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
                >
                  Hackathons
                </TabsTrigger>
                <TabsTrigger
                  value="workshops"
                  className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
                >
                  Workshops
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="certificates" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CertificateCard
                  title="Programming in C"
                  issuer="Udemy"
                  date="2023"
                  image="/placeholder.svg?height=200&width=300"
                />
                <CertificateCard
                  title="Mastering DSA in C/C++"
                  issuer="Udemy"
                  date="2024"
                  image="/placeholder.svg?height=200&width=300"
                />
                <CertificateCard
                  title="Database Structures with MySQL"
                  issuer="Coursera"
                  date="2025"
                  image="/placeholder.svg?height=200&width=300"
                />
                <CertificateCard
                  title="CSS (Basic)"
                  issuer="HackerRank"
                  date="2025"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="hackathons" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CertificateCard
                  title="SheInnovates"
                  issuer="Women Techmakers Montreal"
                  date="2023"
                  image="/placeholder.svg?height=200&width=300"
                />
                <CertificateCard
                  title="Codefest"
                  issuer="SRM University"
                  date="2023"
                  image="/placeholder.svg?height=200&width=300"
                />
                <CertificateCard
                  title="Codefest"
                  issuer="SRM University"
                  date="2023"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CertificateCard
                  title="UI/UX Masterclass"
                  issuer="Gen-Y"
                  date="2023"
                  image="/placeholder.svg?height=200&width=300"
                />
                <CertificateCard
                  title="Go UX"
                  issuer="DEI"
                  date="2023"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">
              Extra-curricular Activities
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-200">
                    Event Coordinator
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    Aarush, SRM University
                  </p>
                  <p className="text-sm text-gray-300">
                    Led and coordinated events as Event Coordinator at Aarush,
                    SRM University.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-200">
                    Management Committee
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    Zephyr Literary Guild
                  </p>
                  <p className="text-sm text-gray-300">
                    Managed resource allocation as a member of the Management
                    Committee of the Zephyr Literary Guild.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-200">
                    Sports
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    Athletics & Martial Arts
                  </p>
                  <p className="text-sm text-gray-300">
                    Active participation in Athletics, Boxing, and Kickboxing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRefs.contact}
        id="contact"
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black z-0"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <GradientText
              text="Contact Me"
              className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
            />
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-200">
                Let's discuss your project
              </h3>
              <p className="text-gray-400">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Mail me at</p>
                    <p className="font-medium text-gray-200">
                      piyushisinghal24@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call me at</p>
                    <p className="font-medium text-gray-200">+91-7597995662</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium text-gray-200">Chennai, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-medium mb-4 text-gray-200">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.linkedin.com/in/piyushisinghal"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://github.com/akshpuri30"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <span className="sr-only">GitHub</span>
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/_piyushi._/?hl=en"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 relative">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="font-bold text-xl mr-2 text-gray-200">
                PIYUSHI'S PORTFOLIO
              </div>
              <Badge
                variant="outline"
                className="border-gray-700 text-gray-300"
              >
                UI/UX Designer
              </Badge>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#certificates"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Certificates
              </Link>
              <Link
                href="#contact"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Piyushi Singhal. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Designed and developed with ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


