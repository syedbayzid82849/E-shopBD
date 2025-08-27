import React from 'react'

export default function AddProducts() {
  return (
    <div>Add Products
        <p>Here you can add new products.</p>
        <form>
            <input type="text" placeholder="Product Name" required />
            <input type="number" placeholder="Price" required />
            <textarea placeholder="Description" required></textarea>
            <button type="submit">Add Product</button>
        </form>
    </div>
  )
}
