import type {Metadata} from 'next'

import {Roboto} from 'next/font/google'

import './globals.css'

const roboto = Roboto({subsets: ['latin'], weight: ['400', '500', '700']})

export const metadata: Metadata = {
  title: 'My app',
  description: 'Description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} antialiased`}>
        <main data-theme='default' className='min-h-screen w-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
