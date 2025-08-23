import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function NextAuthProvider({chi}) {
  return (
    <SessionProvider>
    </SessionProvider>
  )
}
