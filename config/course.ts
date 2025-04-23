export type CourseContent = {
  name: string
  slug?: string
  description?: string
  content?: CourseContent[]
}

export interface Course {
  title: string
  slug: string
  banner: string
  description: string
  content: CourseContent[]
}

export const courseSlugMap = {
  pwa: 'Progressive Web Apps',
  'browser-web-storage': 'Browser Web Storage',
}

export const courses: Course[] = []
