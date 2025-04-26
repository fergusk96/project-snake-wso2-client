import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/login-button"
import { Shield, Sword, Map, Users, Trophy, ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-red-500" />
          <span className="text-xl font-bold">StrategyQuest</span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link to="#features" className="text-sm hover:text-red-400 transition-colors">
              Features
            </Link>
            <Link to="#gameplay" className="text-sm hover:text-red-400 transition-colors">
              Gameplay
            </Link>
            <Link to="#about" className="text-sm hover:text-red-400 transition-colors">
              About
            </Link>
          </nav>
          <LoginButton />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Master Strategy.
          <br />
          Conquer Worlds.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          Command armies, forge alliances, and outmaneuver your opponents in the ultimate test of strategic brilliance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Play Now <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
            Watch Trailer
          </Button>
        </div>
        <div className="mt-16 relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden border-2 border-gray-800 shadow-2xl">
          <img src="/placeholder.svg?height=1080&width=1920" alt="Game Screenshot" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Game Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Map className="h-10 w-10 text-red-500" />}
            title="Vast World"
            description="Explore diverse terrains across multiple continents, each with unique strategic advantages."
          />
          <FeatureCard
            icon={<Sword className="h-10 w-10 text-red-500" />}
            title="Epic Battles"
            description="Command armies in real-time tactical combat with hundreds of units on screen."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-red-500" />}
            title="Multiplayer"
            description="Form alliances or wage war against players from around the world."
          />
        </div>
      </section>

      {/* Gameplay Section */}
      <section id="gameplay" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Strategic Gameplay</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Master the Art of War</h3>
              <ul className="space-y-4">
                <GameplayFeature>Resource management and economy building</GameplayFeature>
                <GameplayFeature>Diplomatic relations with AI factions</GameplayFeature>
                <GameplayFeature>Research and technology advancement</GameplayFeature>
                <GameplayFeature>Unit customization and army composition</GameplayFeature>
              </ul>
              <Button className="mt-8 bg-red-600 hover:bg-red-700">Learn More</Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-gray-800 shadow-xl">
              <img
                src="/placeholder.svg?height=720&width=1280"
                alt="Gameplay Screenshot"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Player Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The depth of strategy in this game is unmatched. Every decision feels meaningful."
            author="StrategyMaster92"
            rating={5}
          />
          <TestimonialCard
            quote="I've spent hundreds of hours and still discover new tactics. Absolutely addictive!"
            author="CommanderElite"
            rating={5}
          />
          <TestimonialCard
            quote="The multiplayer alliances create a fascinating social dynamic. Best strategy game of the year."
            author="TacticalGenius"
            rating={4}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/40 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Conquest?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Join thousands of players already battling for supremacy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Play Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Shield className="h-6 w-6 text-red-500" />
              <span className="text-lg font-bold">StrategyQuest</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-8">
              <Link to="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-white">
                Contact
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-white">
                Support
              </Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} StrategyQuest. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

// Helper Components
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function GameplayFeature({ children }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 bg-red-500/20 p-1 rounded-full">
        <Trophy className="h-4 w-4 text-red-500" />
      </div>
      <span>{children}</span>
    </li>
  )
}

function TestimonialCard({ quote, author, rating }) {
  return (
    <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Trophy key={i} className="h-4 w-4 text-yellow-500" />
        ))}
      </div>
      <p className="italic mb-4 text-gray-300">"{quote}"</p>
      <p className="text-sm text-gray-400">- {author}</p>
    </div>
  )
}
