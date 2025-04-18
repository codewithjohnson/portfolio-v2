'use client'

import React from 'react'
import Link from '@/components/Link'

export default function Home() {
  return (
    <div className="fade-in flex min-h-[70vh] items-center px-4 sm:px-6">
      <div className="max-w-3xl">
        <div className="fade-in banner flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            Hi, I am Johnson
          </h1>
          <p className="my-2 font-mono text-xs text-gray-700 md:my-4 md:text-sm dark:text-gray-300">
            Software Engineer • Researcher • Scientist • Web Performance
          </p>

          <div className="mt-3 flex flex-wrap gap-2 md:mt-4 md:gap-4">
            <Link
              href="/about"
              className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:ring-2 hover:ring-gray-300 md:px-4 md:py-2 md:text-base dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:ring-gray-600"
            >
              About me
              <svg
                className="ml-1.5 h-3.5 w-3.5 md:ml-2 md:h-4 md:w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:ring-2 hover:ring-gray-300 md:px-4 md:py-2 md:text-base dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:ring-gray-600"
            >
              Contact me
              <svg
                className="ml-1.5 h-3.5 w-3.5 md:ml-2 md:h-4 md:w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-gray-50 px-4 py-4 shadow-sm md:mt-12 md:rounded-xl md:px-6 md:py-6 dark:bg-gray-800/60">
          <div className="mb-3 flex items-center justify-between md:mb-4">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-gray-100">
              Skills
            </h2>
            <Link
              href="/about"
              className="text-primary-500 dark:text-primary-400 flex items-center text-xs font-medium hover:underline md:text-sm"
            >
              Show more
              <svg
                className="ml-1 h-3 w-3 md:h-4 md:w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 md:text-sm dark:bg-blue-900/30 dark:text-blue-300">
              Go
            </span>
            <span className="rounded-md bg-cyan-50 px-2 py-0.5 text-xs font-medium text-cyan-700 md:text-sm dark:bg-cyan-900/30 dark:text-cyan-300">
              React Native
            </span>
            <span className="rounded-md bg-yellow-50 px-2 py-0.5 text-xs font-medium text-yellow-700 md:text-sm dark:bg-yellow-900/30 dark:text-yellow-300">
              JavaScript
            </span>
            <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 md:text-sm dark:bg-indigo-900/30 dark:text-indigo-300">
              TypeScript
            </span>
            <span className="rounded-md bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 md:text-sm dark:bg-green-900/30 dark:text-green-300">
              Python
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
