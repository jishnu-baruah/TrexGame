// components/sections/Hero.tsx
'use client'
import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ChevronDown, Gamepad2, Trophy, Coins, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 300], [1, 0])
    const y = useTransform(scrollY, [0, 300], [0, 100])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) * 0.02, // Reduced movement intensity
                y: (e.clientY - window.innerHeight / 2) * 0.02
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Refined background shapes
    const shapes = Array.from({ length: 15 }).map((_, i) => ({
        size: Math.random() * 30 + 20, // Larger shapes
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: i * 0.15,
        duration: 3 + Math.random() * 2, // Random durations
    }))

    // Enhanced animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
                duration: 1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1.0] // Improved easing
            }
        }
    }

    const statsVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 1
            }
        }
    }

    return (
        <section className="relative min-h-[100dvh] overflow-hidden">
            {/* Enhanced background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                {shapes.map((shape, i) => (
                    <motion.div
                        key={i}
                        className={cn(
                            "absolute rounded-full",
                            "bg-gradient-to-r from-orange-500/20 to-orange-300/10"
                        )}
                        style={{
                            width: shape.size,
                            height: shape.size,
                            left: shape.left,
                            top: shape.top,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1],
                            y: [-20, 20, -20]
                        }}
                        transition={{
                            duration: shape.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: shape.delay,
                        }}
                    />
                ))}
            </div>

            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-gray-900/80 to-gray-900/90 z-10" />

            {/* Main content container */}
            <motion.div
                className="relative z-20 container-custom h-[100dvh] flex flex-col justify-center items-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Hero content wrapper */}
                <motion.div
                    className="text-center max-w-4xl mx-auto px-4"
                    style={{
                        x: mousePosition.x,
                        y: mousePosition.y,
                    }}
                >
                    {/* Badge */}
                    <motion.div
                        className="mb-8 inline-block"
                        animate={{
                            y: [-5, 5, -5],
                            scale: [1, 1.02, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-orange-300/10 rounded-full backdrop-blur-sm border border-orange-500/20">
                            <span className="text-orange-400 font-semibold tracking-wide">
                                🎮 Web3 Gaming Reimagined
                            </span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-4 mb-8"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">
                                TrexGame:
                            </span>
                            <br />
                            <span className="inline-block text-white mt-2">
                                Unleash Your Inner Dinosaur!
                            </span>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl lg:text-2xl text-gray-300/90 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Join the thrilling adventure of endless running and NFT evolution.
                        <br className="hidden md:block" />
                        Compete, collect, and earn in the ultimate Web3 gaming experience.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
                    >
                        <Button
                            size="lg"
                            className="relative group h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white"
                        >
                            <span className="relative z-10 flex items-center text-lg font-medium">
                                Play Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-orange-600"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 text-lg font-medium"
                        >
                            Learn More
                        </Button>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                        variants={containerVariants}
                    >
                        {[
                            { icon: Gamepad2, label: "Active Players", value: "50K+" },
                            { icon: Trophy, label: "Tournaments", value: "1000+" },
                            { icon: Coins, label: "Rewards Earned", value: "$2M+" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className={cn(
                                    "group relative p-6 rounded-2xl overflow-hidden",
                                    "bg-gray-800/40 backdrop-blur-sm",
                                    "border border-orange-500/20",
                                    "hover:bg-gray-800/60 transition-all duration-300"
                                )}
                                variants={statsVariants}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="relative z-10">
                                    <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                                    <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                                    <p className="text-gray-400">{stat.label}</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.button
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-orange-500/80 hover:text-orange-500 transition-colors"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ opacity }}
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <span className="text-sm font-medium mb-2">Scroll to explore</span>
                    <ChevronDown className="w-6 h-6" />
                </motion.button>
            </motion.div>

            {/* Enhanced bottom gradient */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            />
        </section>
    )
}