'use client'

import React from 'react'
import Link from '@/components/Link'
import { motion } from 'motion/react'

export default function Home() {
  const nameLetters = 'Johnson'.split('')

  return (
    <div className="flex min-h-[70vh] items-center px-4 sm:px-6">
      <div className="max-w-2xl">
        <div className="space-y-6">
          <h1 className="flex text-4xl font-light tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-purple-500"
            >
              .
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-sm text-gray-600 dark:text-gray-400"
          >
            Software Engineer • Researcher • Web Performance
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-3 pt-4"
          >
            <Link
              href="/about"
              className="group inline-flex items-center rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 transition-all hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50"
            >
              About me
              <svg
                className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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
              className="group inline-flex items-center rounded-lg bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 transition-all hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50"
            >
              Contact me
              <svg
                className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}
