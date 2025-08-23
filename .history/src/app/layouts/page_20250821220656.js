import React from 'react'
import Navbar from '../components/Navbar'
import { Main } from 'next/document'

export default function Layout() {
    return (
        <Navbar></Navbar>
        <Main>
            <h1>Welcome to the Layout</h1>
        </main>

    )
}
