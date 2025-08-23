import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function NextAuthProvider({ch}) {
  return (
    <SessionProvider>
    </SessionProvider>
  )
}
