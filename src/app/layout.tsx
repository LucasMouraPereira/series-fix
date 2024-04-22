import type { Metadata } from 'next'
import { ResponsiveBox } from 'src/components/ResponsiveBox'
import { NavBar } from 'src/components/NavBar'
import { Nunito } from 'next/font/google'

import 'src/utils/styles/globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Series Flix - Tudo sobre suas series favoritas',
  description: 'Tudo sobre suas series favoritas você acha aqui!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={nunito.className}>
        <NavBar />
        <ResponsiveBox>{children}</ResponsiveBox>
      </body>
    </html>
  )
}
