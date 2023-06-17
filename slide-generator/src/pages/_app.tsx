import { SlideProvider } from '@/context/slide.context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SlideProvider>
      <Component {...pageProps} />
    </SlideProvider>
  )
}