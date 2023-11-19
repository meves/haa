import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import { ReduxProvider } from '@/app/_providers/ReduxProvider'
import '../styles/index.scss'
import { Header } from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({subsets: ['latin', 'cyrillic']})

export const metadata: Metadata = {
  title: 'TalkAboutHire',
  description: 'Service for employers and job seekers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={openSans.className}>
        <ReduxProvider>
          <Header/>
          { children }
        </ReduxProvider>
      </body>
    </html>
  )
}