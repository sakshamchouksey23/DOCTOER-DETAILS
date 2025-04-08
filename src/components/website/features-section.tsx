"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Hospital, Users, ExternalLink } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-pink-600" />,
      title: "Curated Specialists",
      description: "Curated list of experienced breast cancer specialists.",
    },
    {
      icon: <Hospital className="h-6 w-6 text-pink-600" />,
      title: "Verified Affiliations",
      description: "Verified hospital affiliations and patient stories.",
    },
    {
      icon: <Users className="h-6 w-6 text-pink-600" />,
      title: "Smart Search",
      description: "Easy search based on name, specialization, and hospital.",
    },
    {
      icon: <ExternalLink className="h-6 w-6 text-pink-600" />,
      title: "Trusted Links",
      description: "Direct links to trusted medical platforms for appointments.",
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
        How Our Platform Supports You
      </motion.h2>

      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full border-pink-200 bg-white shadow-sm">
              <CardContent className="flex flex-col items-start p-4">
                <div className="mb-2 rounded-full bg-pink-100 p-2">{feature.icon}</div>
                <h3 className="mb-1 font-medium text-pink-900">{feature.title}</h3>
                <p className="text-sm text-pink-800/80">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
