import dbConnect, { collectionNames } from '@/lib/dbConnect';
import React from 'react'

export default async function productDetailsPage({params}) {
    const p = await params;
    const productsCollection = dbConnect(collectionNames.productsCollection);
    const data = productsCollection.findOn({_id: new Obje})
    return (
        <div className='text-black pt-14'>{JSON.stringify(productId)}</div>
    )
}
