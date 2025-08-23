import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function productDetailsPage({params}) {
    const p = await params;
    const productsCollection = dbConnect(collectionNames.productsCollection);
    const data = productsCollection.findOne({_id: new ObjectId(p.id)});
    console.log(data);
    return (
<div>
    
</div>    )
}
