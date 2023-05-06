"use client"

import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {
  signIn,
  signOut,
  useSession,
  getProviders
} from 'next-auth/react'

interface Provider {
  id: string
  name: string
  category: string
  description: string
  logoUrl: string
  isActive: boolean
}

const Nav = () => {
  const [providers, setProviders] = useState<Provider[] | null>(null)
  const isUserLoggedIn = true

  const handleSignIn = (providerId: string) => () => signIn(providerId)
  const handleSignOut = () => {
    signOut()
  }

  // useEffect(() => {
  //   (async (): Promise<void> => {
  //     const res = await getProviders();
  //     setProviders(res);
  //   })();
  // }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link className="flex gap-2 flex-center" href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="Prompto Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Prompto</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href="/create-prompt">
              Create Prompt
            </Link>

            <button type="button" onClick={handleSignOut} className="outline_btn">Sign Out</button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="Profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button
                key={provider.name}
                type="button"
                onClick={handleSignIn(provider.id)}
                className="outline_btn"
              >
                Sign in with {provider.name}
              </button>
            ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn}
      </div>
    </nav>
  )
}

export default Nav