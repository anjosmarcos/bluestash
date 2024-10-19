import {Roboto} from 'next/font/google'

import type {Metadata} from 'next'

import './globals.css'

const roboto = Roboto({subsets: ['latin'], weight: ['400', '500', '700']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
