import React from 'react'

export default async function productDetailsPage({params}) {
    const productId = await params;
    return (
        <div className=''>{JSON.stringify(productId)}</div>
    )
}
