import React from 'react'

export default async function productDetailsPage({params}) {
    const productId = await params;
    return (
        <div c>{JSON.stringify(productId)}</div>
    )
}
