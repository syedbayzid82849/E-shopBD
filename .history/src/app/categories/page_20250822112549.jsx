import React from 'react';

// products.json ফাইল থেকে ডেটা ইম্পোর্ট করা হচ্ছে।
// এই ফাইলটি আপনার প্রজেক্টে থাকা উচিত।
// তবে, এই ডেমো কোডে, আমরা JSON ডেটাকে সরাসরি একটি ভেরিয়েবলে ব্যবহার করছি।
const productsData = [
  { "category": "Home & Living", "thumbnail": "https://www.google.com/imgres?q=Home%20%26%20Living%20imgbb&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1990444472%2Fphoto%2Fscandinavian-style-cozy-living-room-interior.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3Dqgzrs_4vKDrOVo6gVc0EVb9-PziE-REbV9DcM5ZAfig%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fhome-living-room&docid=Le8yrJioE_yVFM&tbnid=QboUbn38grernM&vet=12ahUKEwjGiszy1p2PAxVYyDgGHQX4CF8QM3oECBcQAA..i&w=612&h=344&hcb=2&ved=2ahUKEwjGiszy1p2PAxVYyDgGHQX4CF8QM3oECBcQAA" },
  { "category": "Men's Fashion", "thumbnail": "https://imrs.cartup.com/api/v1/image-resize?imageUrl=https://sl-dev-s3.s3.amazonaws.com/admin/resources/alt-men-s-fashion-1739454090154.png&width=180" },
  { "category": "TV & Home Appliances", "thumbnail": "https://images.unsplash.com/photo-1571176288869-703348c4547c?ixlib=rb-1.2.1&auto=format&fit=crop" },
  { "category": "Groceries & Pet Supplies", "thumbnail": "https://images.unsplash.com/photo-1542838132-92c90c33a92b?ixlib=rb-1.2.1&auto=format&fit=crop" },
  { "category": "Electronic Accessories", "thumbnail": "https://images.unsplash.com/photo-1550529555-ff3d0859c836?ixlib=rb-1.2.1&auto=format&fit=crop" },
  { "category": "Computing & Gaming", "thumbnail": "https://images.unsplash.com/photo-1587829744585-780c103986c7?ixlib=rb-1.2.1&auto=format&fit=crop" },
  { "category": "Watches & Bags", "thumbnail": "https://images.unsplash.com/photo-1523275371286-6215a7732a3d?ixlib=rb-1.2.1&auto=format&fit=crop" },
  { "category": "Phones & Accessories", "thumbnail": "https://images.unsplash.com/photo-1601701384074-98c9f0a51c4a?ixlib=rb-1.2.1&auto=format&fit=crop" }
];

// এই ফাংশনটি অনন্য ক্যাটাগরিগুলো বের করে
const getUniqueCategories = (data) => {
  const categories = {};
  data.forEach(product => {
    if (!categories[product.category]) {
      categories[product.category] = product.thumbnail;
    }
  });
  return Object.keys(categories).map(key => ({
    name: key,
    image: categories[key]
  }));
};

export default function Categories() {
  const uniqueCategories = getUniqueCategories(productsData);

  return (
    <div className="bg-white p-8 sm:p-12 md:p-16 lg:p-20 font-sans w">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
        Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10">
        {uniqueCategories.map((category, index) => (
          // প্রতিটি ক্যাটাগরি রেন্ডার করা হচ্ছে।
          <div key={index} className="flex flex-col items-center text-center cursor-pointer group">
            {/* ক্যাটাগরি আইকন ইমেজ */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-2 shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* ক্যাটাগরির নাম */}
            <h3 className="text-sm sm:text-base font-medium text-gray-700 mt-2">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
