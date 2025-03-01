import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Theme variables first
import '@/styles/themes/variables.css';

// Base styles
import '@/styles/base/reset.css';
import '@/styles/base/typography.css';
import '@/styles/base/layout.css';

// Animations
import '@/styles/animations/keyframes.css';

// Components
import '@/styles/components/side-scroll-button.css';
import '@/styles/components/sections.css';

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
