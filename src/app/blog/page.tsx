import Image from 'next/image'
import Link from 'next/link'
import Newsletter from '@/components/home/Newsletter'

export const metadata = {
  title: 'Blog - Your App',
  description: 'Latest news, updates, and insights from our team.',
}

const blogPosts = [
  {
    id: 1,
    title: 'Introducing New Features for Enhanced Productivity',
    excerpt: 'Discover the latest updates that will help you work smarter and faster.',
    date: 'Mar 15, 2024',
    author: 'Sarah Chen',
    category: 'Product Updates',
    image: '/images/hero-image.png',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Best Practices for Remote Team Collaboration',
    excerpt: 'Learn how to keep your team productive and connected while working remotely.',
    date: 'Mar 12, 2024',
    author: 'Mark Thompson',
    category: 'Tips & Tricks',
    image: '/images/hero-image.png',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'The Future of Work: AI and Automation',
    excerpt: 'Explore how artificial intelligence is shaping the future of workplace productivity.',
    date: 'Mar 10, 2024',
    author: 'Chris Harrison',
    category: 'Industry Insights',
    image: '/images/hero-image.png',
    readTime: '8 min read'
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4">Latest Updates</h1>
              <p className="text-xl text-gray-600">
                Stay up to date with the latest news, product updates, and insights from our team.
              </p>
            </div>

            {/* Blog posts */}
            <div className="max-w-sm mx-auto md:max-w-none">
              <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {blogPosts.map((post) => (
                  <article key={post.id} className="flex flex-col h-full" data-aos="zoom-y-out">
                    <header>
                      <Link href={`/blog/${post.id}`} className="block mb-6">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <Image
                            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                            src={post.image}
                            width={352}
                            height={198}
                            alt={post.title}
                          />
                        </figure>
                      </Link>
                      <div className="mb-3">
                        <ul className="flex flex-wrap text-xs font-medium -m-1">
                          <li className="m-1">
                            <span className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                              {post.category}
                            </span>
                          </li>
                          <li className="m-1">
                            <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100">
                              {post.readTime}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 className="h4 mb-2">
                        <Link href={`/blog/${post.id}`} className="hover:text-gray-900 transition duration-150 ease-in-out">
                          {post.title}
                        </Link>
                      </h3>
                    </header>
                    <p className="text-lg text-gray-600 grow">{post.excerpt}</p>
                    <footer className="flex items-center mt-4">
                      <div>
                        <span className="text-gray-600">{post.date}</span>
                        <span className="text-gray-600"> · </span>
                        <span className="text-gray-600">{post.author}</span>
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
