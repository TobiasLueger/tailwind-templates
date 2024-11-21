'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const [autorotateTiming] = useState<number>(7000)
  const testimonials = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === testimonialItems.length ? 0 : active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate, autorotateTiming])

  const testimonialItems = [
    {
      img: '/images/hero-image.png',
      quote: "The app has completely transformed how I manage my business. It's intuitive, powerful, and the support team is fantastic!",
      name: 'Mark Thompson',
      role: 'Founder of Tech Innovate'
    },
    {
      img: '/images/hero-image.png',
      quote: "I've tried many similar solutions, but this one stands out. The features are exactly what we needed, and it's incredibly easy to use.",
      name: 'Sarah Chen',
      role: 'Product Manager at StartUp Co'
    },
    {
      img: '/images/hero-image.png',
      quote: "The ROI we've seen since implementing this solution has been remarkable. I highly recommend it to any growing business.",
      name: 'Chris Harrison',
      role: 'CEO at GrowthCorp'
    }
  ]

  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Trusted by thousands of users</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it — hear from some of our satisfied customers
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto">
            <div className="relative flex items-start" ref={testimonials}>
              {testimonialItems.map((item, index) => (
                <div
                  key={index}
                  className="text-center px-12 py-8 pt-20 mx-4 md:mx-0"
                  style={{
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    transform: `translateX(${100 * (index - active)}%)`,
                    opacity: index === active ? 1 : 0,
                    transition: 'all 0.5s ease-in-out',
                    zIndex: index === active ? 1 : 0,
                  }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8">
                    <Image className="relative rounded-full" src={item.img} width={64} height={64} alt={`Testimonial ${index + 1}`} />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    "{item.quote}"
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">{item.name}</cite>
                  <div className="text-gray-600">
                    <span>{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bullets */}
          <div className="flex justify-center mt-20">
            {testimonialItems.map((item, index) => (
              <button
                key={index}
                className={`p-1 group ${index !== active ? 'opacity-50' : ''}`}
                onClick={() => { setActive(index); setAutorotate(false); }}
              >
                <span className={`block w-2 h-2 rounded-full ${index === active ? 'bg-gray-800' : 'bg-gray-400 group-hover:bg-gray-600'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
