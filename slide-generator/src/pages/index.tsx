import Image from 'next/image'
import { Inter } from 'next/font/google'
import Generator from '@/root/components/gpt-generator/GPT-Generator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Generator/>
    </main>
  )
}
