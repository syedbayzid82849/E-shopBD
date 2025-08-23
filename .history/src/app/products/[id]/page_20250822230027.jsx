import React from 'react'

export default async function productDetailsPage({params}) {
    const productId = await params;
    return (
        <div children>{JSON.stringify(productId)}</div>
    )
}
