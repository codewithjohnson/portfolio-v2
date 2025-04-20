'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Custom hook for color themes
const useThemeColors = () => {
  const colors = [
    { primary: '#F97316', secondary: 'rgba(249, 115, 22, 0.2)' }, // orange
    { primary: '#8B5CF6', secondary: 'rgba(139, 92, 246, 0.2)' }, // violet
    { primary: '#EC4899', secondary: 'rgba(236, 72, 153, 0.2)' }, // pink
  ]

  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    setColorIndex(Math.floor(Math.random() * colors.length))
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 8000)

    return () => clearInterval(intervalId)
  }, [])

  return colors[colorIndex]
}

// Custom highlight component
const HighlightText = ({ children }: { children: React.ReactNode }) => {
  const { primary, secondary } = useThemeColors()

  return (
    <span
      className="relative mx-2 inline-block cursor-pointer transition-transform hover:scale-105"
      style={{
        textDecoration: 'none',
        color: 'currentColor',
        zIndex: 1,
      }}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute bottom-0 left-0 h-[30%] w-full transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: secondary,
          zIndex: -1,
        }}
      />
      <span
        className="absolute bottom-0 left-0 h-[30%] w-0 transition-all duration-300 ease-in-out group-hover:w-full"
        style={{
          backgroundColor: primary,
          zIndex: -1,
          opacity: 0.3,
        }}
      />
    </span>
  )
}

export default function ContactClient() {
  const [copied, setCopied] = useState(false)
  const emailAddress = 'codewithjohnson@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scheduleCall = () => {
    window.open('https://calendly.com/codewithjohnson', '_blank')
  }

  return (
    <div className="fade-in max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-6xl dark:text-gray-100">
          Connect
        </h1>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="prose dark:prose-invert max-w-none py-8">
          <p className="text-lg">
            Got a project idea or just want to chat? I'd love to hear from you.
          </p>

          <div className="my-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={scheduleCall}
                className="group inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm transition-all duration-300 hover:bg-indigo-700 focus:outline-none"
              >
                <HighlightText>Schedule a meeting</HighlightText>
                <svg
                  className="-mr-1 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <div className="relative inline-block">
                <button
                  onClick={copyEmail}
                  className="flex items-center px-4 py-2 text-sm text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <span className="mr-2">{emailAddress}</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>

                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-xs text-white">
                    Copied!
                  </span>
                )}
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Link
                href="https://linkedin.com/in/muyiwa-johnson"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/muyiwa-johnson"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/muyiwa_johnson"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
            <h2 className="mb-3 text-xl font-bold">Quick FAQ</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-medium">Project types</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Full-stack web apps, education platforms, fintech solutions
                </p>
              </div>
              <div>
                <h3 className="font-medium">Collaboration style</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Clear communication, agile processes, regular updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
