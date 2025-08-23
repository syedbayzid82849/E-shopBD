import React from 'react'

export default async function productDetailsPage({params}) {
    console.log(params);
    return (
        <div>productDetailsPage: {await params.id}</div>
    )
}
