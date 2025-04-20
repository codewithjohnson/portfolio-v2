import { genPageMetadata } from 'app/seo'
import ContactClient from '@/components/contact-client'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Contact() {
  return (
    <div className="">
      <ContactClient />
    </div>
  )
}
