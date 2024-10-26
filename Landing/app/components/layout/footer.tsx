
// components/layout/footer.tsx
'use client'
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from 'react'

export default function Footer() {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Email submitted:', email)
        setEmail('')
    }

    return (
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
    )
}
