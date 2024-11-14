import { redirect } from 'next/navigation'
import { draftMode } from 'next/headers'
import { validatePreviewUrl } from '@sanity/preview-url-secret'

import { client } from '@/sanity/lib/client'

const token = process.env.SANITY_API_READ_TOKEN

if (!token) {
  throw new Error(
    'A secret is provided but there is no `SANITY_API_READ_TOKEN` environment variable setup.'
  )
}

export async function GET(request: Request) {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    client.withConfig({ token }),
    request.url
  )
  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  ;(await draftMode()).enable()

  redirect(redirectTo)
}
