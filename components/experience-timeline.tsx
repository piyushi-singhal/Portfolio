"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export function ExperienceTimeline() {
  const experiences = [
    {
      title: "Senior UI/UX Designer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Leading the design team in creating user-centered digital experiences for enterprise clients. Responsible for establishing design systems and ensuring consistent user experience across multiple platforms.",
    },
    {
      title: "UI/UX Designer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Designed user interfaces for web and mobile applications. Conducted user research and usability testing to improve product experiences. Collaborated with development teams to ensure design implementation.",
    },
    {
      title: "Junior UI Designer",
      company: "Creative Agency",
      period: "2018 - 2020",
      description:
        "Created visual designs for websites and digital marketing campaigns. Assisted in developing brand identities and style guides. Collaborated with marketing teams to create engaging user experiences.",
    },
  ]

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-0.5"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center md:left-1/2 md:-ml-4">
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="ml-16 md:ml-0 p-6 bg-background rounded-lg border shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

