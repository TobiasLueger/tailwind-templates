'use client'

import { useState } from 'react'

export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 mb-4">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your needs. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing toggle */}
          <div className="flex justify-center max-w-xs mx-auto mb-16">
            <div className="relative flex w-full mx-6 p-1 bg-gray-200 rounded-full">
              <span
                className="absolute inset-0 m-1 pointer-events-none"
                aria-hidden="true"
              >
                <span
                  className={`absolute inset-0 w-1/2 bg-white rounded-full shadow transform transition duration-150 ease-in-out ${
                    annual ? 'translate-x-0' : 'translate-x-full'
                  }`}
                ></span>
              </span>
              <button
                className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${
                  annual ? 'text-gray-900' : 'text-gray-500'
                }`}
                onClick={() => setAnnual(true)}
              >
                Annual <span className="text-green-500">-20%</span>
              </button>
              <button
                className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${
                  annual ? 'text-gray-500' : 'text-gray-900'
                }`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Pricing tables */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* Basic price */}
            <div className="relative flex flex-col h-full p-6 bg-white" data-aos="fade-up">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="h4 mb-1">Basic</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-2xl md:text-3xl font-medium text-gray-900">$</span>
                  <span className="h2">{annual ? '29' : '35'}</span>
                  <span className="font-medium text-gray-600">/mo</span>
                </div>
                <div className="text-gray-600">For individuals and small teams.</div>
              </div>
              <div className="flex-grow">
                <ul className="text-gray-600 -mb-2 flex-grow">
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>5 team members</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>20GB storage</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" href="#0">
                  Start free trial
                </a>
              </div>
            </div>

            {/* Pro price */}
            <div className="relative flex flex-col h-full p-6 bg-white shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute top-0 right-0 mr-6 -mt-4">
                <div className="inline-flex items-center text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Most Popular</div>
              </div>
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="h4 mb-1">Pro</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-2xl md:text-3xl font-medium text-gray-900">$</span>
                  <span className="h2">{annual ? '59' : '75'}</span>
                  <span className="font-medium text-gray-600">/mo</span>
                </div>
                <div className="text-gray-600">For growing businesses.</div>
              </div>
              <div className="flex-grow">
                <ul className="text-gray-600 -mb-2 flex-grow">
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>20 team members</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>100GB storage</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Advanced analytics</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" href="#0">
                  Start free trial
                </a>
              </div>
            </div>

            {/* Enterprise price */}
            <div className="relative flex flex-col h-full p-6 bg-white" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="h4 mb-1">Enterprise</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-2xl md:text-3xl font-medium text-gray-900">$</span>
                  <span className="h2">{annual ? '129' : '159'}</span>
                  <span className="font-medium text-gray-600">/mo</span>
                </div>
                <div className="text-gray-600">For large organizations.</div>
              </div>
              <div className="flex-grow">
                <ul className="text-gray-600 -mb-2 flex-grow">
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited everything</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>99.99% uptime SLA</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" href="#0">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
