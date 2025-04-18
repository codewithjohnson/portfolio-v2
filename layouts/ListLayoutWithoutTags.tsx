'use client'

import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex items-center justify-between">
        {!prevPage && (
          <button
            className="flex cursor-auto items-center text-gray-400 opacity-50 dark:text-gray-600"
            disabled={!prevPage}
          >
            <svg
              className="mr-1 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="hover:text-primary-600 dark:hover:text-primary-400 after:bg-primary-500 relative flex items-center font-medium text-gray-700 transition-all duration-300 after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:translate-x-[-2px] hover:after:w-full dark:text-gray-300"
          >
            <svg
              className="mr-1 h-5 w-5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous
          </Link>
        )}
        <span className="rounded-md bg-gray-100 px-3 py-1 font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="flex cursor-auto items-center text-gray-400 opacity-50 dark:text-gray-600"
            disabled={!nextPage}
          >
            Next
            <svg
              className="ml-1 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        {nextPage && (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="hover:text-primary-600 dark:hover:text-primary-400 after:bg-primary-500 relative flex items-center font-medium text-gray-700 transition-all duration-300 after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:translate-x-[2px] hover:after:w-full dark:text-gray-300"
          >
            Next
            <svg
              className="ml-1 h-5 w-5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithOutTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div className="fade-in">
        <div className="pt-8 pb-8">
          <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:from-white dark:to-gray-300">
            {title}
          </h1>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-4 md:space-y-3">
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          {!posts.length && (
            <div className="py-10 text-center text-gray-500 dark:text-gray-400">
              <svg
                className="mx-auto mb-4 h-20 w-20 text-gray-300 dark:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 9v2m0 4h.01m-6.938-9h13.856c1.54 0 2.502 1.667 1.732 3L13.732 15c-.77 1.333-2.694 1.333-3.464 0L3.34 5c-.77-1.333.192-3 1.732-3z"
                />
              </svg>
              <p>No posts found.</p>
            </div>
          )}
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {posts.map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li
                  key={slug}
                  className="group -mx-4 rounded-lg px-4 py-10 transition-all duration-300 hover:bg-gray-50/50 dark:hover:bg-gray-800/20"
                >
                  <article className="space-y-6">
                    <div className="space-y-5 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="flex items-center text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                          <svg
                            className="mr-1 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-3">
                          <div>
                            <h2 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-2xl leading-8 font-bold tracking-tight transition-colors duration-300">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="mt-2 -ml-1 flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose line-clamp-3 max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                          <div className="pt-2">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-primary-600 dark:text-primary-400 inline-flex items-center text-sm font-medium transition-all duration-200 hover:translate-x-1"
                            >
                              Read more
                              <svg
                                className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </div>
    </>
  )
}
