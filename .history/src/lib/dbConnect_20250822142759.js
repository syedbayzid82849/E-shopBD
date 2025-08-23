import React from 'react'
import { MongoClient, ServerApiVersion } from 'mongodb';



export default function dbConnect() {
    const uri = process.env.MONGODB_URI;
  return (
    <div>dbConnect</div>
  )
}

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});