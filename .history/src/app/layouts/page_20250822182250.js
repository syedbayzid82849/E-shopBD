import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className=' h-screen border'>
                <h1>Welcome to the Layout</h1>
            </main>
            <Footer />
        </>
    )
}
