import React from 'react'
import { MongoClient, ServerApiVersion } from 'mongodb';

export default function dbConnect() {
    const uri = process.env.MONGODB_URI;
  return (
    <div>dbConnect</div>
  )
}

