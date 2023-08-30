import { Hero } from '@/components'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero acts as the display to home page to user to give brief information */}
      <Hero/>
    </main>
  )
}
