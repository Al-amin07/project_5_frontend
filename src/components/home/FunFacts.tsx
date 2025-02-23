"use client"

import { useState } from "react"
import { Coffee, Plane, Book, Music } from "lucide-react"

const funFacts = [
    { icon: Coffee, fact: "Coffee enthusiast, 3 cups a day" },
    { icon: Plane, fact: "Visited 20 countries" },
    { icon: Book, fact: "Read 50 books last year" },
    { icon: Music, fact: "Plays guitar in a local band" },
]

export default function FunFacts() {
    const [flippedCards, setFlippedCards] = useState<number[]>([])

    const toggleCard = (index: number) => {
        setFlippedCards((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
    }

    return (
        <section className=" text-white px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-100 dark:text-white">Fun Facts</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {funFacts.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg cursor-pointer transition-transform duration-500 ${flippedCards.includes(index) ? "rotate-y-180" : ""
                            }`}
                        onClick={() => toggleCard(index)}
                    >
                        <div className="h-40 relative">
                            <div className={`absolute inset-0 backface-hidden ${flippedCards.includes(index) ? "opacity-0" : ""}`}>
                                <div className="flex items-center justify-center h-full">
                                    <item.icon className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>
                            <div
                                className={`absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center p-4 text-center ${flippedCards.includes(index) ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <p className="text-gray-800 dark:text-white">{item.fact}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

