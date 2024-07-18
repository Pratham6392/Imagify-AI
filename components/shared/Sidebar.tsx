"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { Sign } from 'crypto'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
        </Link>
         
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>

      
            {/* <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })} */}

              {/* <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName />
              </li> */}
            {/* </ul> */}
            <SignOutButton>
              <Button asChild className="button bg-purple-gradient bg-cover">
                <Link href="/">Logout</Link>
              </Button>
            </SignOutButton>
            </SignedIn>

           <SignedOut>
            <SignInButton>
            <Button asChild className="logout-btn bg-purple-gradient text-white py-2 px-4 rounded-lg shadow-lg font-bold transition-all duration-300 ease-out-expo transform hover:scale-105 hover:bg-#4F46E5 focus:outline-none focus:ring-4 focus:ring-#A5B4FC active:animate-wiggle">
              <Link href="/">Login</Link>
            </Button>
            </SignInButton>
          </SignedOut> 
          
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar