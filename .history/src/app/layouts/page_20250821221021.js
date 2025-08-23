import React from 'react'
import Navbar from '../components/Navbar'
import { Main } from 'next/document'
import Footer from '../components/Footer'

export default function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <h1>Welcome to the Layout</h1>
            </main>
            <Footer></Footer>
        </>
    )
}
