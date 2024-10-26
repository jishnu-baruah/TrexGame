// components/sections/Hero.tsx
'use client'
import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ChevronDown, Gamepad2, Trophy, Coins } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 300], [1, 0])
    const y = useTransform(scrollY, [0, 300], [0, 100])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) * 0.05,
                y: (e.clientY - window.innerHeight / 2) * 0.05
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Parallax background shapes
    const shapes = Array.from({ length: 20 }).map((_, i) => ({
        size: Math.random() * 20 + 10,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: i * 0.1,
    }))

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.4, 0.03, 0.17, 0.95] }
        }
    }

    const statsVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    }

    const floatingAnimation = {
        y: [-10, 10],
        transition: {
            y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    }

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                {shapes.map((shape, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-orange-500/10"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            left: shape.left,
                            top: shape.top,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.5, scale: 1 }}
                        transition={{
                            delay: shape.delay,
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/90 z-10" />

            <motion.div
                className="relative z-20 container mx-auto px-4 h-screen flex flex-col justify-center items-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ y }}
            >
                {/* Hero content */}
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    style={{
                        x: mousePosition.x,
                        y: mousePosition.y,
                    }}
                >
                    <motion.div
                        className="mb-6 inline-block"
                        animate={floatingAnimation}
                    >
                        <span className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-sm font-semibold">
                            🎮 Web3 Gaming Reimagined
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-7xl font-bold mb-6"
                        variants={itemVariants}
                    >
                        <span className="bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">
                            TrexGame:
                        </span>
                        <br />
                        <span className="text-white">
                            Unleash Your Inner Dinosaur!
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                        variants={itemVariants}
                    >
                        Join the thrilling adventure of endless running and NFT evolution.
                        <br />
                        Compete, collect, and earn in the ultimate Web3 gaming experience.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
                        variants={itemVariants}
                    >
                        <Button
                            size="lg"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg group relative overflow-hidden"
                        >
                            <span className="relative z-10">Play Now</span>
                            <motion.div
                                className="absolute inset-0 bg-orange-600"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ type: "tween", ease: "easeInOut" }}
                            />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-orange-500 text-orange-500 hover:bg-orange-500/10 px-8 py-6 text-lg"
                        >
                            Learn More
                        </Button>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
                        variants={containerVariants}
                    >
                        {[
                            { icon: Gamepad2, label: "Active Players", value: "50K+" },
                            { icon: Trophy, label: "Tournaments", value: "1000+" },
                            { icon: Coins, label: "Rewards Earned", value: "$2M+" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20"
                                variants={statsVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                                <p className="text-gray-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ opacity }}
                >
                    <ChevronDown className="w-6 h-6 text-orange-500" />
                </motion.div>
            </motion.div>

            {/* Game features preview (optional) */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            />
        </section>
    )
}