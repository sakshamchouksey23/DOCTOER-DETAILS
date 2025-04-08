"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, UserRound, MousePointerClick } from "lucide-react"

export function WorkflowSection() {
  const steps = [
    {
      icon: <Search className="h-6 w-6 text-pink-600" />,
      title: "Explore Doctors",
      description: "Browse a list of verified breast cancer specialists.",
    },
    {
      icon: <Filter className="h-6 w-6 text-pink-600" />,
      title: "Search & Filter",
      description: "Use smart filters to find the doctor that fits your needs.",
    },
    {
      icon: <UserRound className="h-6 w-6 text-pink-600" />,
      title: "View Profiles",
      description: "Read about experience, hospital, fees, and patient feedback.",
    },
    {
      icon: <MousePointerClick className="h-6 w-6 text-pink-600" />,
      title: "Take Action",
      description: "Click through to book an appointment via trusted platforms.",
    },
  ]

  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="mb-6 text-center text-2xl font-bold text-pink-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        How It Works
      </motion.h2>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <Card className="border-pink-200 bg-white shadow-sm">
              <CardContent className="flex items-start gap-4 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-900">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-pink-600">{step.icon}</span>
                    <h3 className="font-medium text-pink-900">{step.title}</h3>
                  </div>
                  <p className="text-sm text-pink-800/80">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
