import '@/app/globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ClerkProvider } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { COMPANY_DESCRIPTION, COMPANY_NAME, SITE_URL } from '@/lib/constants'

const rader = localFont({
  src: [
    {
      path: '../../../public/fonts/rader/hairline.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/rader/hairline-italic.woff2',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/rader/thin.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/rader/thin-italic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/rader/extralight.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/rader/extralight-italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/rader/light.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/rader/light-italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/rader/regular.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/rader/italic.woff2',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/rader/medium.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/rader/medium-italic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/rader/semibold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/rader/semibold-italic.woff2',
      weight: '800',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/rader/bold.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/rader/bold-italic.woff2',
      weight: '900',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-rader'
})

const neueMontreal = localFont({
  src: [
    {
      path: '../../../public/fonts/neue-montreal/thin.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/neue-montreal/thin-italic.woff2',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/neue-montreal/light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/neue-montreal/light-italic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/neue-montreal/book.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/neue-montreal/book-italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/neue-montreal/regular.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/neue-montreal/italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/neue-montreal/medium.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/neue-montreal/medium-italic.woff2',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/neue-montreal/semibold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/neue-montreal/bold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/neue-montreal/bold-italic.woff2',
      weight: '800',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-neue-montreal'
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: COMPANY_NAME,
    template: `%s | ${COMPANY_NAME}`
  },
  description: COMPANY_DESCRIPTION,
  openGraph: {
    title: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: [
      {
        url: `${SITE_URL}/images/og.png`,
        width: 1200,
        height: 630
      }
    ],
    locale: 'es-ES',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: COMPANY_NAME,
    site: COMPANY_NAME,
    card: 'summary_large_image',
    description: COMPANY_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/og.png`,
        alt: `${COMPANY_NAME} logo`,
        width: 1200,
        height: 630
      }
    ]
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/apple-icon.png'
  }
}

export default async function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider dynamic>
      <html
        lang='en'
        className={cn(
          rader.variable,
          neueMontreal.variable,
          'bg-background font-sans text-foreground antialiased'
        )}
      >
        {children}
      </html>
    </ClerkProvider>
  )
}
