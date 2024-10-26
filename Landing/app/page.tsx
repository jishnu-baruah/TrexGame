// app/page.tsx
import Header from './components/layout/header'
import Hero from './components/sections/hero'
import Features from './components/sections/features'
import HowItWorks from './components/sections/how-it-works'
import Community from './components/sections/community'
import Footer from './components/layout/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Community />
      </main>
      <Footer />
    </div>
  )
}