import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  X,
  Mastodon,
  Threads,
  Instagram,
  Medium,
  Bluesky,
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
  medium: Medium,
  bluesky: Bluesky,
}

// Brand colors for social icons with default, hover, and light variations
const brandColors = {
  youtube: {
    default: 'text-[#FF0000] dark:text-[#FF0000]', 
    hover: 'hover:text-[#FF0000] dark:hover:text-[#FF0000]', 
    light: 'hover:text-[#ff3333] dark:hover:text-[#ff3333]'
  },
  facebook: {
    default: 'text-[#1877F2] dark:text-[#1877F2]',
    hover: 'hover:text-[#1877F2] dark:hover:text-[#1877F2]',
    light: 'hover:text-[#4293fb] dark:hover:text-[#4293fb]'
  },
  twitter: {
    default: 'text-[#1DA1F2] dark:text-[#1DA1F2]',
    hover: 'hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2]',
    light: 'hover:text-[#4db5f5] dark:hover:text-[#4db5f5]'
  },
  linkedin: {
    default: 'text-[#0A66C2] dark:text-[#0A66C2]',
    hover: 'hover:text-[#0A66C2] dark:hover:text-[#0A66C2]',
    light: 'hover:text-[#0e84fa] dark:hover:text-[#0e84fa]'
  },
  instagram: {
    default: 'text-[#E4405F] dark:text-[#E4405F]',
    hover: 'hover:text-[#E4405F] dark:hover:text-[#E4405F]',
    light: 'hover:text-[#ea6d83] dark:hover:text-[#ea6d83]'
  },
  github: {
    default: 'text-gray-900 dark:text-white',
    hover: 'hover:text-gray-900 dark:hover:text-white',
    light: 'hover:text-gray-700 dark:hover:text-gray-200'
  },
  x: {
    default: 'text-black dark:text-white',
    hover: 'hover:text-black dark:hover:text-white',
    light: 'hover:text-gray-800 dark:hover:text-gray-200'
  },
  mail: {
    default: 'text-gray-600 dark:text-gray-400',
    hover: 'hover:text-gray-900 dark:hover:text-white',
    light: 'hover:text-gray-700 dark:hover:text-gray-300'
  },
  mastodon: {
    default: 'text-[#6364FF] dark:text-[#6364FF]',
    hover: 'hover:text-[#6364FF] dark:hover:text-[#6364FF]',
    light: 'hover:text-[#8a8bff] dark:hover:text-[#8a8bff]'
  },
  threads: {
    default: 'text-black dark:text-white',
    hover: 'hover:text-black dark:hover:text-white',
    light: 'hover:text-gray-700 dark:hover:text-gray-300'
  },
  medium: {
    default: 'text-black dark:text-white',
    hover: 'hover:text-black dark:hover:text-white',
    light: 'hover:text-gray-700 dark:hover:text-gray-300'
  },
  bluesky: {
    default: 'text-[#0085FF] dark:text-[#0085FF]',
    hover: 'hover:text-[#0085FF] dark:hover:text-[#0085FF]',
    light: 'hover:text-[#339dff] dark:hover:text-[#339dff]'
  }
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
  className?: string
  useBrandColor?: boolean
  colorStyle?: 'default' | 'hover' | 'light' 
}

const SocialIcon = ({ 
  kind, 
  href, 
  size = 8, 
  className, 
  useBrandColor = true, // Changed default to true to use brand colors by default
  colorStyle = 'default' // Changed default to 'default' to show brand colors
}: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  const SocialSvg = components[kind]

  // Default SVG classes if no custom className is provided
  let defaultSvgClasses = `fill-current h-${size} w-${size}`
  
  // Add color effect based on settings
  if (useBrandColor && kind in brandColors) {
    // Use the requested color style if available, fallback to default
    const brandColorObj = brandColors[kind as keyof typeof brandColors]
    // Apply both default and hover states
    defaultSvgClasses += ` ${brandColorObj['default']} ${brandColorObj['hover']}`
  } else {
    // Default theme colors when brand colors are not used
    defaultSvgClasses += ' text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400'
  }
  
  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={className || defaultSvgClasses}
      />
    </a>
  )
}

export default SocialIcon