import React from 'react'

export default async function productDetailsPage({params}) {
    const productId = await params;
    return (
        <div className='mt-16 b'>{JSON.stringify(productId)}</div>
    )
}
