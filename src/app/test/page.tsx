'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    text: "Education is not the filling of a pail, but the lighting of a fire.",
    author: "W.B. Yeats"
  },
  {
    text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    author: "Brian Herbert"
  }
];

const timelineEvents = [
  {
    year: "MMXIX",
    title: "Foundation",
    description: "Establishment of our digital atelier."
  },
  {
    year: "MMXX",
    title: "First Manuscripts",
    description: "Publication of our inaugural digital works."
  },
  {
    year: "MMXXI",
    title: "Global Recognition",
    description: "International acclaim for our digital craftsmanship."
  },
  {
    year: "MMXXII",
    title: "Innovation Award",
    description: "Honored for excellence in digital arts."
  }
];

const artifacts = [
  {
    id: 1,
    title: "Ancient Manuscript",
    year: "1842",
    description: "A rare illuminated manuscript featuring intricate calligraphy and gold leaf details. This piece exemplifies the marriage of scholarly pursuit and artistic excellence.",
    category: "Literature",
    origin: "Oxford University",
    condition: "Well-preserved",
    image: "/placeholder1.jpg"
  },
  {
    id: 2,
    title: "Scholar's Writing Desk",
    year: "1876",
    description: "Mahogany writing desk with hidden compartments and brass fittings. Once belonged to a prominent professor of Classical Studies.",
    category: "Furniture",
    origin: "Cambridge University",
    condition: "Restored",
    image: "/placeholder2.jpg"
  },
  {
    id: 3,
    title: "Vintage Telescope",
    year: "1899",
    description: "Brass astronomical telescope with original wooden tripod. Used for celestial observations and astronomical studies.",
    category: "Scientific Instrument",
    origin: "Royal Observatory",
    condition: "Excellent",
    image: "/placeholder3.jpg"
  },
  {
    id: 4,
    title: "First Edition Book",
    year: "1856",
    description: "First edition of a seminal work in Classical Literature, bound in leather with gold embossing and marbled endpapers.",
    category: "Literature",
    origin: "Private Collection",
    condition: "Good",
    image: "/placeholder4.jpg"
  },
];

export default function TestPage() {
  const [scrollY, setScrollY] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isHoveringTimeline, setIsHoveringTimeline] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHoveringTimeline) {
      const timer = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHoveringTimeline]);

  return (
    <div className="min-h-screen font-serif">
      {/* Hero Section */}
      <section className="relative h-screen flex justify-center items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover z-0 opacity-40" 
          style={{
            backgroundImage: "url('/bg.jpg')",
            WebkitMaskImage: "url('/ink_lv2.gif')",
            WebkitMaskSize: "cover",
            WebkitMaskPosition: "center",
          }} 
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <div className="font-hallowed text-8xl md:text-9xl mb-6 tracking-wider">LUNDEV</div>
          <p className="text-xl mb-8 font-serif italic tracking-wide">Sapere Aude • Dare to Know</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#about" className="inline-block px-8 py-3 border-2 border-[#e6d5b8] rounded-none hover:bg-[#e6d5b8] hover:text-[#1a1a1a] transition-all tracking-widest uppercase text-sm">
              Explore Further
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen relative py-24 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-6 uppercase tracking-widest border-b-2 border-[#e6d5b8] pb-4 inline-block">Philosophia</h2>
              <p className="text-lg text-[#e6d5b8] opacity-90 leading-relaxed font-serif">
                In the pursuit of knowledge and artistic excellence, we delve deep into the realms of digital craftsmanship.
                Our work embodies the timeless principles of classical design merged with modern innovation.
              </p>
              <blockquote className="text-xl italic border-l-2 border-[#e6d5b8] pl-6 my-8">
                "The function of education is to teach one to think intensively and to think critically."
              </blockquote>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#work" className="inline-block px-8 py-3 border-2 border-[#e6d5b8] hover:bg-[#e6d5b8] hover:text-[#1a1a1a] transition-all uppercase tracking-widest text-sm">
                  View Collection
                </a>
              </motion.div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-[#2a2a2a] rounded-none relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/vintage-texture.jpg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 border border-[#e6d5b8] m-4"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#e6d5b8] bg-transparent z-[-1]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="min-h-screen relative py-24 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 uppercase tracking-widest text-center border-b-2 border-[#e6d5b8] pb-4 inline-block">
            Chronologia
          </h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#e6d5b8] opacity-30 md:block hidden" />
            
            {/* Timeline Events */}
            <div className="space-y-12 relative">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } items-center md:items-start gap-8 relative`}
                >
                  {/* Year Marker */}
                  <div className="md:w-1/2 flex md:justify-start justify-center">
                    <div className={`px-6 py-3 border-2 border-[#e6d5b8] relative ${
                      index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                    }`}>
                      <span className="font-mono text-xl">{event.year}</span>
                      {/* Connector Line */}
                      <div className="absolute top-1/2 -translate-y-1/2 w-8 h-px bg-[#e6d5b8] opacity-30 hidden md:block
                        ${index % 2 === 0 ? 'right-full' : 'left-full'}" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-3 tracking-wide">{event.title}</h3>
                    <p className="text-[#e6d5b8] opacity-80 leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Carousel */}
      <section id="quotes" className="py-24 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              <div className="text-6xl font-serif opacity-20">"</div>
              <p className="text-2xl md:text-3xl italic leading-relaxed px-4 md:px-12">
                {quotes[currentQuote].text}
              </p>
              <div className="text-lg text-[#e6d5b8] opacity-80">
                — {quotes[currentQuote].author}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quote Navigation */}
          <div className="flex justify-center mt-12 space-x-3">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full border-2 border-[#e6d5b8] transition-all ${
                  currentQuote === index ? 'bg-[#e6d5b8]' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery" className="py-24 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 uppercase tracking-widest text-center border-b-2 border-[#e6d5b8] pb-4 inline-block">
            Archival Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {artifacts.map((artifact) => (
              <motion.div
                key={artifact.id}
                className="group relative cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedArtifact(artifact)}
              >
                <div className="relative aspect-[4/3] overflow-hidden border-2 border-[#e6d5b8]">
                  <div className="absolute inset-0 bg-[#1a1a1a] group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity p-6">
                    <h3 className="text-2xl font-bold mb-2 text-[#e6d5b8]">{artifact.title}</h3>
                    <p className="text-[#e6d5b8] text-center italic mb-4">{artifact.year}</p>
                    <p className="text-[#e6d5b8] text-center text-sm">{artifact.description.substring(0, 100)}...</p>
                    <button className="mt-4 px-4 py-2 border border-[#e6d5b8] text-[#e6d5b8] hover:bg-[#e6d5b8] hover:text-[#1a1a1a] transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Artifact Detail Modal */}
        <AnimatePresence>
          {selectedArtifact && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedArtifact(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#1a1a1a] border-2 border-[#e6d5b8] p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-[#e6d5b8] hover:text-[#c4b397] transition-colors"
                  onClick={() => setSelectedArtifact(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="space-y-6">
                  <div className="border-b-2 border-[#e6d5b8] pb-4">
                    <h3 className="text-3xl font-bold text-[#e6d5b8] mb-2">{selectedArtifact.title}</h3>
                    <p className="text-[#e6d5b8] italic">{selectedArtifact.year}</p>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="aspect-[4/3] bg-[#2a2a2a] border border-[#e6d5b8] mb-4"></div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-[#e6d5b8] mb-2">Description</h4>
                          <p className="text-[#e6d5b8]">{selectedArtifact.description}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between border-b border-[#e6d5b8]/30 py-2">
                            <span className="text-[#e6d5b8] font-semibold">Category</span>
                            <span className="text-[#e6d5b8]">{selectedArtifact.category}</span>
                          </div>
                          <div className="flex justify-between border-b border-[#e6d5b8]/30 py-2">
                            <span className="text-[#e6d5b8] font-semibold">Origin</span>
                            <span className="text-[#e6d5b8]">{selectedArtifact.origin}</span>
                          </div>
                          <div className="flex justify-between border-b border-[#e6d5b8]/30 py-2">
                            <span className="text-[#e6d5b8] font-semibold">Condition</span>
                            <span className="text-[#e6d5b8]">{selectedArtifact.condition}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 px-4 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="border-2 border-[#e6d5b8] p-12 md:p-16 text-center relative">
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#e6d5b8] -translate-x-2 -translate-y-2" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#e6d5b8] translate-x-2 -translate-y-2" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#e6d5b8] -translate-x-2 translate-y-2" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#e6d5b8] translate-x-2 translate-y-2" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-widest">
              Subscribe to Our Chronicles
            </h2>
            <p className="text-[#e6d5b8] opacity-80 mb-8 max-w-2xl mx-auto font-serif">
              Receive our latest manuscripts and scholarly observations directly to your correspondence box.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-grow px-4 py-3 bg-transparent border border-[#e6d5b8] focus:outline-none focus:border-[#e6d5b8] text-[#e6d5b8] placeholder-[#e6d5b8] placeholder-opacity-50"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#e6d5b8] text-[#1a1a1a] uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen relative py-24 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-16 uppercase tracking-widest text-center border-b-2 border-[#e6d5b8] pb-4 inline-block">Collected Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Antiquarian Studies", desc: "A journey through classical design principles" },
                { title: "Modern Manuscripts", desc: "Where tradition meets digital innovation" },
                { title: "Digital Artifacts", desc: "Preserving knowledge in the digital age" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-[#2a2a2a] border border-[#e6d5b8] p-6 group"
                >
                  <div className="aspect-[4/5] bg-[#1a1a1a] mb-6 overflow-hidden">
                    <div className="w-full h-full bg-[url('/vintage-texture.jpg')] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-[#e6d5b8] opacity-80 font-serif italic">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen relative py-24 px-4 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 border border-[#e6d5b8] -m-4 z-0"></div>
            <div className="relative z-10 p-12 bg-[#1a1a1a]">
              <h2 className="text-4xl font-bold mb-6 uppercase tracking-widest">Correspondence</h2>
              <p className="text-lg text-[#e6d5b8] opacity-90 mb-12 font-serif leading-relaxed">
                For inquiries regarding collaborations or to discuss the finer points of digital craftsmanship,
                we welcome your correspondence.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="mailto:contact@example.com" className="inline-block px-12 py-4 border-2 border-[#e6d5b8] hover:bg-[#e6d5b8] hover:text-[#1a1a1a] transition-all uppercase tracking-widest text-sm">
                  Send a Message
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer" className="bg-[#1a1a1a] border-t border-[#e6d5b8] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="font-hallowed text-3xl tracking-wider">LUNDEV</div>
              <p className="font-serif text-[#e6d5b8] opacity-80 leading-relaxed">
                Cultivating digital excellence through timeless design principles and modern innovation.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg uppercase tracking-widest mb-6 border-b border-[#e6d5b8] pb-2 inline-block">
                Index of Contents
              </h3>
              <ul className="space-y-3 font-serif">
                <li>
                  <a href="#top" className="hover:text-[#e6d5b8] transition-colors opacity-80 hover:opacity-100">
                    Frontispiece
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#e6d5b8] transition-colors opacity-80 hover:opacity-100">
                    Philosophia
                  </a>
                </li>
                <li>
                  <a href="#work" className="hover:text-[#e6d5b8] transition-colors opacity-80 hover:opacity-100">
                    Collected Works
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#e6d5b8] transition-colors opacity-80 hover:opacity-100">
                    Correspondence
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg uppercase tracking-widest mb-6 border-b border-[#e6d5b8] pb-2 inline-block">
                Bureau of Correspondence
              </h3>
              <div className="space-y-3 font-serif text-[#e6d5b8] opacity-80">
                <p>No. 42 Digital Avenue</p>
                <p>Knowledge Quarter</p>
                <p>Academia District</p>
                <a href="mailto:contact@example.com" className="hover:text-[#e6d5b8] transition-colors hover:opacity-100 block">
                  contact@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-[#e6d5b8] opacity-60 text-center font-serif text-sm">
            <p> Anno MMXXIII LUNDEV. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Navigation Dots */}
      <div className="fixed md:right-8 md:top-1/2 md:-translate-y-1/2 bottom-8 right-1/2 -translate-x-1/2 z-50">
        <div className="md:flex md:flex-col md:space-y-6 flex flex-row space-x-4 md:space-x-0">
          {[
            { href: '#top', label: 'Hero' },
            { href: '#about', label: 'About' },
            { href: '#timeline', label: 'Timeline' },
            { href: '#quotes', label: 'Quotes' },
            { href: '#gallery', label: 'Gallery' },
            { href: '#newsletter', label: 'Newsletter' },
            { href: '#work', label: 'Work' },
            { href: '#contact', label: 'Contact' },
            { href: '#footer', label: 'Footer' }
          ].map(({ href, label }, index) => (
            <div key={href} className="relative group">
              <a
                href={href}
                className={`block w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 border-[#e6d5b8] transition-all ${
                  (index === 8 && scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) ||
                  (scrollY >= index * window.innerHeight * 0.8 && scrollY < (index + 1) * window.innerHeight * 0.8)
                    ? 'bg-[#e6d5b8]'
                    : 'bg-transparent'
                }`}
                aria-label={label}
              />
              <span className="absolute md:right-full md:mr-8 md:top-1/2 md:-translate-y-1/2 
                left-1/2 -translate-x-1/2 bottom-full mb-2
                px-2 py-1 bg-[#1a1a1a] border border-[#e6d5b8] text-[#e6d5b8] text-xs 
                whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}