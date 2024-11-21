import Image from 'next/image'
import Newsletter from '@/components/home/Newsletter'

export const metadata = {
  title: 'About Us - Your App',
  description: 'Learn about our mission, our team, and why we built this amazing product.',
}

export default function AboutPage() {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4">About Us</h1>
              <p className="text-xl text-gray-600">
                We're on a mission to help businesses work smarter and grow faster.
              </p>
            </div>

            {/* Team section */}
            <div className="max-w-3xl mx-auto">
              <h2 className="h2 mb-4">Our Team</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {[1, 2, 3, 4].map((member) => (
                  <div key={member} className="text-center">
                    <div className="relative inline-flex mb-4">
                      <Image
                        className="rounded-full"
                        src="/images/hero-image.png"
                        width={120}
                        height={120}
                        alt={`Team member ${member}`}
                      />
                      <div className="absolute inset-0 border-2 border-blue-500 rounded-full transform hover:scale-105 transition duration-150 ease-in-out"></div>
                    </div>
                    <h4 className="text-xl font-bold mb-1">Team Member</h4>
                    <div className="text-gray-600">Position</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission section */}
            <div className="max-w-3xl mx-auto mt-20">
              <h2 className="h2 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8">
                We believe in creating tools that empower businesses to achieve their full potential.
                Our platform is built with the latest technology and designed with user experience in mind.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2015</div>
                  <div className="text-lg text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
                  <div className="text-lg text-gray-600">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-lg text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
