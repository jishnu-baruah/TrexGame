'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

interface InputProps {
  placeholder?: string; // Add any other properties you'll need here
}

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here (e.g., API call)
    console.log('Email submitted:', email)
    setEmail('')
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <header className="w-full py-4 px-6 flex justify-between items-center bg-gray-800/80 backdrop-blur-sm fixed top-0 z-10">
        <motion.div className="flex items-center" initial="hidden" animate="visible" variants={fadeIn}>
          <span className="text-2xl font-bold text-orange-500">TrexGame</span>
        </motion.div>
        <motion.nav className="hidden md:flex space-x-4" initial="hidden" animate="visible" variants={staggerChildren}>
          {['Features', 'How It Works', 'Community'].map((item, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-orange-500 transition-colors">
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </header>

      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <motion.div
            className="relative z-20 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold text-orange-500 mb-4" variants={fadeIn}>
              TrexGame: Unleash Your Inner Dinosaur!
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-gray-300 mb-8" variants={fadeIn}>
              Join the thrilling adventure of endless running and NFT evolution.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Sign Up for Early Access
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section id="features" className="py-16 px-4 bg-gray-800">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-500" variants={fadeIn}>
              Why Play TrexGame?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Endless Running Gameplay", description: "Experience the thrill of non-stop action as you navigate through challenging obstacles and terrains." },
                { title: "NFT Evolution", description: "Watch your T-Rex grow and evolve as you progress, with unique NFT skins and abilities." },
                { title: "Collectibles and Power-ups", description: "Discover rare items and power-ups to enhance your gameplay and boost your scores." },
                { title: "Multiplayer Competition", description: "Compete against players worldwide in exciting tournaments and leaderboards." },
                { title: "Play-to-Earn Rewards", description: "Earn cryptocurrency rewards for your achievements and contributions to the TrexGame ecosystem." },
                { title: "Cross-Platform Play", description: "Enjoy seamless gaming experience across desktop and mobile devices." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-2 text-orange-400">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="how-it-works" className="py-16 px-4 bg-gray-900">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-500" variants={fadeIn}>
              How to Get Started
            </motion.h2>
            <div className="space-y-8">
              {[
                { step: 1, title: "Sign Up", description: "Create your account and join the TrexGame community." },
                { step: 2, title: "Get Your T-Rex NFT", description: "Mint your unique T-Rex NFT to start your adventure." },
                { step: 3, title: "Join the Adventure", description: "Enter the game world and start running, collecting, and evolving." },
                { step: 4, title: "Earn Rewards", description: "Compete, win, and earn cryptocurrency rewards for your achievements." }
              ].map((step, index) => (
                <motion.div key={index} className="flex items-start" variants={fadeIn}>
                  <div className="flex-shrink-0 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-400">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="community" className="py-16 px-4 bg-gray-800">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500" variants={fadeIn}>
              Join the TrexGame Community
            </motion.h2>
            <motion.p className="text-xl mb-8 text-gray-300" variants={fadeIn}>
              Connect with fellow players, share strategies, and stay updated on the latest TrexGame news!
            </motion.p>
            <motion.div className="flex justify-center space-x-6" variants={fadeIn}>
              <Link href="#" className="text-orange-500 hover:text-orange-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-8 h-8" />
              </Link>
              <Link href="#" className="text-orange-500 hover:text-orange-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-8 h-8" />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-orange-500">TrexGame</span>
          </div>
          <nav className="flex space-x-4">
            <Link href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
          </nav>
          <form onSubmit={handleSubmit} className="flex mt-4 md:mt-0">
            <Input
              type="email"
              placeholder="Subscribe for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 rounded-l-md border border-gray-700 bg-gray-800 text-gray-100"
            />
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white rounded-r-md">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </footer>
    </div>
  )
}