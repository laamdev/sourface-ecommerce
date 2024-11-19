import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { SignOutButton } from '@clerk/nextjs'
import {
  Gauge,
  Gear,
  MagnifyingGlass,
  ShoppingCart,
  SignOut,
  User
} from '@phosphor-icons/react/dist/ssr'

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '/admin',
    icon: Gauge
  },
  {
    title: 'Customers',
    url: '/admin/customers',
    icon: User
  },
  {
    title: 'Orders',
    url: '/admin/orders',
    icon: ShoppingCart
  }

  // // {
  // //   title: 'Settings',
  // //   url: '#',
  // //   icon: Gear
  // // }
]

export const AdminSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>SourFace Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <SignOutButton>
                    <div className='cursor-pointer'>
                      <SignOut />
                      Sign Out
                    </div>
                  </SignOutButton>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
