import React from 'react'

export default async function productDetailsPage({params}) {
    const productId = await params;
    return (
        <div className='mt-16 bor'>{JSON.stringify(productId)}</div>
    )
}
