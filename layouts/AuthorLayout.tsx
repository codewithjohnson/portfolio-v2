import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  // Skills data - you can move this to your content model if needed
  const skills = [
    { name: 'Go', bgClass: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
    {
      name: 'Postgres',
      bgClass: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
    },
    {
      name: 'JavaScript',
      bgClass: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
    },
    {
      name: 'TypeScript',
      bgClass: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
    },
    {
      name: 'Python',
      bgClass: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    },
    { name: 'React', bgClass: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
    {
      name: 'Node.js',
      bgClass: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    },
    { name: 'Docker', bgClass: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
    {
      name: 'AWS',
      bgClass: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
    },
    {
      name: 'Cloud',
      bgClass: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
    },
  ]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
          <div className="flex flex-col items-center pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>

            <div className="flex space-x-3 pt-6 pb-4">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="bluesky" href={bluesky} />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            {children}

            {/* Skills Section */}
            <div className="mt-6 w-full">
              <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-md px-2.5 py-1 text-sm font-medium ${skill.bgClass}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
