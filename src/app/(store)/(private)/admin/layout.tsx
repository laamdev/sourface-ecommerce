import { Metadata } from 'next'

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AdminSidebar } from '@/components/admin/admin-sidebar'
import { AdminContainer } from '@/components/admin/admin-container'

export const metadata: Metadata = {
  title: 'Admin'
}

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <body>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarTrigger />
        <AdminContainer>{children}</AdminContainer>
      </SidebarProvider>
    </body>
  )
}
