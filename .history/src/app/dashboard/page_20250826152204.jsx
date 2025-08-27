"use client";

export default function Dashboard\() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-gray-700 mb-6">
        This is your dashboard home. Use the sidebar to navigate between pages.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-lg">Add New Product</h2>
          <p className="text-gray-600 mt-2">
            Click "Add Product" in the sidebar to add a new product.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-lg">Manage Products</h2>
          <p className="text-gray-600 mt-2">
            You can view or edit your products (feature can be added later).
          </p>
        </div>
      </div>
    </div>
  );
}
