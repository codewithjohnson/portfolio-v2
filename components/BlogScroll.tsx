'use client'

import { useEffect, useState } from 'react'
import Link from '@/components/Link'
import { motion } from 'motion/react'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'
import { formatDate } from 'pliny/utils/formatDate'

type Props = {
  posts: CoreContent<Blog>[]
}

export default function BlogScroll({ posts }: Props) {
  const [isLoading, setIsLoading] = useState(true)

  // Set loading to false after component mounts
  useEffect(() => {
    if (posts && posts.length > 0) {
      setIsLoading(false)
    }
  }, [posts])

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Top fade effect */}
      <div className="absolute top-0 right-0 left-0 z-10 h-16 bg-gradient-to-b from-white to-transparent dark:from-gray-900"></div>

      <div className="scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent h-full overflow-y-auto px-4 py-2">
        <h2 className="mb-4 text-center text-xl font-bold text-purple-500 dark:text-purple-400">
          Latest Posts
        </h2>

        {isLoading ? (
          <div className="flex h-32 items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="space-y-6 pb-10">
            {posts.slice(0, 6).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="rounded-lg bg-white p-4 shadow-sm transition-all duration-200 hover:translate-y-[-2px] hover:shadow-md dark:bg-gray-800"
              >
                <Link href={`/blog/${post.slug}`} className="no-underline">
                  <h3 className="mb-1.5 line-clamp-2 text-base font-medium text-gray-900 transition-colors hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-400">
                    {post.title}
                  </h3>
                </Link>
                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                  {formatDate(post.date, 'en-US')}
                </p>
                {post.summary && (
                  <p className="mb-2 line-clamp-2 text-xs text-gray-600 dark:text-gray-300">
                    {post.summary}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-gray-100 px-1.5 py-0.5 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
            ))}

            <div className="pt-2 text-center">
              <Link
                href="/blog"
                className="inline-flex cursor-pointer items-center text-sm font-medium text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
              >
                View all posts
                <svg
                  className="ml-1.5 h-3.5 w-3.5"
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
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom fade effect */}
      <div className="absolute right-0 bottom-0 left-0 z-10 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-900"></div>
    </div>
  )
}
