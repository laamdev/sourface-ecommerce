import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'

import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'

import { SanityLive } from '@/sanity/lib/live'
import { BasketStoreProvider } from '@/store/provider'

import { DisableDraftMode } from '@/components/globals/disable-draft-mode'

export default async function PublicLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <BasketStoreProvider>
      <body>
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}

        <main>
          <Header />
          {children}
          <Footer />
        </main>

        <SanityLive />
      </body>
    </BasketStoreProvider>
  )
}