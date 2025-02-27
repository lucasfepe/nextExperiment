import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Script from 'next/script'
import '@/app/globals.css'
import '@/styles/variables.css'
import '@/styles/base.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luke Ferrari',
  description: 'Portfolio website of Luke Ferrari',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        {/* <Script
          src="https://cdn.example.com/script.js"
          strategy="lazyOnload"
        /> */}
      </body>
    </html>
  )
}
