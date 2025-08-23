import React from 'react'

export default async function productDetailsPage({params}) {
    const p = await params;
    return (
        <div className='tex'>{JSON.stringify(productId)}</div>
    )
}
