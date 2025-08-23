import React from 'react'

export default async function productDetailsPage({params}) {
    const productId = await params;
    return (
        <div childr>{JSON.stringify(productId)}</div>
    )
}
