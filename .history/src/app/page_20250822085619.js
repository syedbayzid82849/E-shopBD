import Image from "next/image";
import styles from "./page.module.css";
import Layout from "./layouts/page";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className='border max-w-7xl mx-auto [
  {
    "sku": "SKU-100001",
    "title": "Memory Foam Pillow",
    "slug": "memory-foam-pillow-1",
    "category": "Home & Living",
    "brand": "Skyline",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 30885,
      "current": 21933,
      "discountPercent": 29
    },
    "stock": 141,
    "rating": {
      "average": 4.0,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p1-1.jpg",
      "/images/products/p1-2.jpg",
      "/images/products/p1-3.jpg"
    ],
    "thumbnail": "/images/products/p1-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Red",
        "Black"
      ]
    },
    "badges": [
      "official-store",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ritu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-04-06"
      },
      {
        "user": "Shila",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-25"
      },
      {
        "user": "Fahim",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-06-28"
      },
      {
        "user": "Ritu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-05-02"
      }
    ],
    "questions": [
      {
        "question": "Is there any warranty?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Nafis",
        "date": "2025-07-24"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000075Z",
    "updatedAt": "2025-08-22T02:51:20.000081Z",
    "status": "active"
  },
  {
    "sku": "SKU-100002",
    "title": "Classic Cotton T‑Shirt",
    "slug": "classic-cotton-t‑shirt-2",
    "category": "Men's Fashion",
    "brand": "Skyline",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 23669,
      "current": 16497,
      "discountPercent": 30
    },
    "stock": 24,
    "rating": {
      "average": 4.3,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p2-1.jpg",
      "/images/products/p2-2.jpg",
      "/images/products/p2-3.jpg"
    ],
    "thumbnail": "/images/products/p2-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Green",
        "Black",
        "Gray"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "official-store",
      "hot"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Fahim",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-07-22"
      },
      {
        "user": "Fahim",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-02-28"
      },
      {
        "user": "Ritu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-26"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Mitu",
        "date": "2025-06-08"
      },
      {
        "question": "What is the return policy?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Ovi",
        "date": "2025-07-21"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000156Z",
    "updatedAt": "2025-08-22T02:51:20.000158Z",
    "status": "active"
  },
  {
    "sku": "SKU-100003",
    "title": "Smart LED TV 43\" FHD",
    "slug": "smart-led-tv-43\"-fhd-3",
    "category": "TV & Home Appliances",
    "brand": "Pulse",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 20212,
      "current": 13508,
      "discountPercent": 33
    },
    "stock": 131,
    "rating": {
      "average": 5.0,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p3-1.jpg",
      "/images/products/p3-2.jpg",
      "/images/products/p3-3.jpg"
    ],
    "thumbnail": "/images/products/p3-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "power": "220–240V",
      "energyRating": "A+"
    },
    "variants": {
      "color": [
        "Red",
        "White"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "best-seller",
      "hot"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Fahim",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-04-17"
      },
      {
        "user": "Mitu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-06-09"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Ritu",
        "date": "2025-05-16"
      },
      {
        "question": "Is this original brand?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Shila",
        "date": "2025-06-06"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000225Z",
    "updatedAt": "2025-08-22T02:51:20.000228Z",
    "status": "active"
  },
  {
    "sku": "SKU-100004",
    "title": "Premium Basmati Rice 5kg",
    "slug": "premium-basmati-rice-5kg-4",
    "category": "Groceries & Pet Supplies",
    "brand": "Awei",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 5607,
      "current": 4455,
      "discountPercent": 21
    },
    "stock": 114,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p4-1.jpg",
      "/images/products/p4-2.jpg",
      "/images/products/p4-3.jpg"
    ],
    "thumbnail": "/images/products/p4-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "weight": "1kg",
      "shelfLife": "12 months"
    },
    "variants": {
      "color": [
        "Blue",
        "Red"
      ]
    },
    "badges": [
      "best-seller",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Mitu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-02-24"
      },
      {
        "user": "Nafis",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-02-23"
      }
    ],
    "questions": [
      {
        "question": "Is this original brand?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Joya",
        "date": "2025-08-07"
      },
      {
        "question": "What is the return policy?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Priya",
        "date": "2025-05-15"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000291Z",
    "updatedAt": "2025-08-22T02:51:20.000293Z",
    "status": "active"
  },
  {
    "sku": "SKU-100005",
    "title": "FastCharge Power Bank 20000mAh",
    "slug": "fastcharge-power-bank-20000mah-5",
    "category": "Electronic Accessories",
    "brand": "Skyline",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 21768,
      "current": 15664,
      "discountPercent": 28
    },
    "stock": 106,
    "rating": {
      "average": 4.7,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p5-1.jpg",
      "/images/products/p5-2.jpg",
      "/images/products/p5-3.jpg"
    ],
    "thumbnail": "/images/products/p5-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "capacity": "20000mAh",
      "ports": "USB-A x2, USB-C x1"
    },
    "variants": {
      "color": [
        "Blue",
        "Red"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "hot",
      "official-store"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Mitu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-08-01"
      },
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-05-11"
      },
      {
        "user": "Hasan",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-05-03"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Priya",
        "date": "2025-05-29"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000365Z",
    "updatedAt": "2025-08-22T02:51:20.000367Z",
    "status": "active"
  },
  {
    "sku": "SKU-100006",
    "title": "LiteBook 14\" Laptop",
    "slug": "litebook-14\"-laptop-6",
    "category": "Computing & Gaming",
    "brand": "Acme",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 42086,
      "current": 37354,
      "discountPercent": 11
    },
    "stock": 13,
    "rating": {
      "average": 4.5,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p6-1.jpg",
      "/images/products/p6-2.jpg",
      "/images/products/p6-3.jpg"
    ],
    "thumbnail": "/images/products/p6-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "cpu": "Intel i5 / Ryzen 5",
      "ram": "8GB",
      "storage": "512GB SSD"
    },
    "variants": {
      "color": [
        "Red",
        "Green"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "new",
      "official-store"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ovi",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-06-10"
      },
      {
        "user": "Hasan",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-05-06"
      },
      {
        "user": "Joya",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-30"
      },
      {
        "user": "Hasan",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-02-26"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Mitu",
        "date": "2025-06-01"
      },
      {
        "question": "What is the return policy?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Priya",
        "date": "2025-08-13"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000423Z",
    "updatedAt": "2025-08-22T02:51:20.000425Z",
    "status": "active"
  },
  {
    "sku": "SKU-100007",
    "title": "LiteBook 14\" Laptop",
    "slug": "litebook-14\"-laptop-7",
    "category": "Computing & Gaming",
    "brand": "Awei",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 12089,
      "current": 8165,
      "discountPercent": 32
    },
    "stock": 93,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p7-1.jpg",
      "/images/products/p7-2.jpg",
      "/images/products/p7-3.jpg"
    ],
    "thumbnail": "/images/products/p7-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "cpu": "Intel i5 / Ryzen 5",
      "ram": "8GB",
      "storage": "512GB SSD"
    },
    "variants": {
      "color": [
        "Green",
        "Black"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "free-delivery",
      "hot"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Joya",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-08-08"
      },
      {
        "user": "Nafis",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-29"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Ovi",
        "date": "2025-07-08"
      },
      {
        "question": "Is this original brand?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Ritu",
        "date": "2025-08-07"
      },
      {
        "question": "What is the return policy?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Mitu",
        "date": "2025-06-21"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000470Z",
    "updatedAt": "2025-08-22T02:51:20.000472Z",
    "status": "active"
  },
  {
    "sku": "SKU-100008",
    "title": "FastCharge Power Bank 20000mAh",
    "slug": "fastcharge-power-bank-20000mah-8",
    "category": "Electronic Accessories",
    "brand": "ZenWear",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 10942,
      "current": 9717,
      "discountPercent": 11
    },
    "stock": 92,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p8-1.jpg",
      "/images/products/p8-2.jpg",
      "/images/products/p8-3.jpg"
    ],
    "thumbnail": "/images/products/p8-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "capacity": "20000mAh",
      "ports": "USB-A x2, USB-C x1"
    },
    "variants": {
      "color": [
        "White",
        "Green"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "free-delivery",
      "best-seller"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ovi",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-04-21"
      },
      {
        "user": "Fahim",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-08-16"
      }
    ],
    "questions": [
      {
        "question": "Is there any warranty?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Fahim",
        "date": "2025-07-06"
      },
      {
        "question": "Does it support fast charging?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Priya",
        "date": "2025-06-14"
      },
      {
        "question": "Is this original brand?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Joya",
        "date": "2025-05-10"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000540Z",
    "updatedAt": "2025-08-22T02:51:20.000542Z",
    "status": "active"
  },
  {
    "sku": "SKU-100009",
    "title": "Smart LED TV 43\" FHD",
    "slug": "smart-led-tv-43\"-fhd-9",
    "category": "TV & Home Appliances",
    "brand": "Aurora",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 18143,
      "current": 14934,
      "discountPercent": 18
    },
    "stock": 88,
    "rating": {
      "average": 4.3,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p9-1.jpg",
      "/images/products/p9-2.jpg",
      "/images/products/p9-3.jpg"
    ],
    "thumbnail": "/images/products/p9-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "power": "220–240V",
      "energyRating": "A+"
    },
    "variants": {
      "color": [
        "Red",
        "Blue"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "best-seller",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Priya",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-04-11"
      },
      {
        "user": "Shila",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-08-14"
      },
      {
        "user": "Ovi",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-04-23"
      }
    ],
    "questions": [
      {
        "question": "Is there any warranty?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Mitu",
        "date": "2025-07-27"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000592Z",
    "updatedAt": "2025-08-22T02:51:20.000595Z",
    "status": "active"
  },
  {
    "sku": "SKU-100010",
    "title": "Memory Foam Pillow",
    "slug": "memory-foam-pillow-10",
    "category": "Home & Living",
    "brand": "Aurora",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 41216,
      "current": 30217,
      "discountPercent": 27
    },
    "stock": 101,
    "rating": {
      "average": 4.5,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p10-1.jpg",
      "/images/products/p10-2.jpg",
      "/images/products/p10-3.jpg"
    ],
    "thumbnail": "/images/products/p10-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Red",
        "Gray"
      ]
    },
    "badges": [
      "free-delivery",
      "hot"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-07"
      },
      {
        "user": "Ritu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-05"
      },
      {
        "user": "Arman",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-07-01"
      },
      {
        "user": "Hasan",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-05-02"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Hasan",
        "date": "2025-06-07"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000655Z",
    "updatedAt": "2025-08-22T02:51:20.000657Z",
    "status": "active"
  },
  {
    "sku": "SKU-100011",
    "title": "Premium Basmati Rice 5kg",
    "slug": "premium-basmati-rice-5kg-11",
    "category": "Groceries & Pet Supplies",
    "brand": "Skyline",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 42844,
      "current": 30128,
      "discountPercent": 30
    },
    "stock": 128,
    "rating": {
      "average": 4.5,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p11-1.jpg",
      "/images/products/p11-2.jpg",
      "/images/products/p11-3.jpg"
    ],
    "thumbnail": "/images/products/p11-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "weight": "1kg",
      "shelfLife": "12 months"
    },
    "variants": {
      "color": [
        "White",
        "Green"
      ]
    },
    "badges": [
      "best-seller",
      "official-store"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Shila",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-13"
      },
      {
        "user": "Nafis",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-08-18"
      },
      {
        "user": "Fahim",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-07-17"
      },
      {
        "user": "Priya",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-06-28"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Nafis",
        "date": "2025-04-27"
      },
      {
        "question": "Is this original brand?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Joya",
        "date": "2025-05-09"
      },
      {
        "question": "What is the return policy?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Fahim",
        "date": "2025-08-02"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000712Z",
    "updatedAt": "2025-08-22T02:51:20.000714Z",
    "status": "active"
  },
  {
    "sku": "SKU-100012",
    "title": "Running Sneakers",
    "slug": "running-sneakers-12",
    "category": "Sports & Outdoors",
    "brand": "Acme",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 37068,
      "current": 29251,
      "discountPercent": 21
    },
    "stock": 83,
    "rating": {
      "average": 4.0,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p12-1.jpg",
      "/images/products/p12-2.jpg",
      "/images/products/p12-3.jpg"
    ],
    "thumbnail": "/images/products/p12-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "material": "Polyester",
      "size": "M/L/XL"
    },
    "variants": {
      "color": [
        "Gray",
        "Green",
        "Red"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "free-delivery",
      "official-store"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Hasan",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-07-08"
      },
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-16"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Nafis",
        "date": "2025-05-15"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000750Z",
    "updatedAt": "2025-08-22T02:51:20.000752Z",
    "status": "active"
  },
  {
    "sku": "SKU-100013",
    "title": "Floral Maxi Dress",
    "slug": "floral-maxi-dress-13",
    "category": "Women's Fashion",
    "brand": "Awei",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 44747,
      "current": 38117,
      "discountPercent": 15
    },
    "stock": 129,
    "rating": {
      "average": 4.0,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p13-1.jpg",
      "/images/products/p13-2.jpg",
      "/images/products/p13-3.jpg"
    ],
    "thumbnail": "/images/products/p13-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "White",
        "Green",
        "Blue"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "official-store",
      "hot"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-05-30"
      },
      {
        "user": "Ovi",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-04-28"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Ritu",
        "date": "2025-07-02"
      },
      {
        "question": "What is the return policy?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Ritu",
        "date": "2025-05-28"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000791Z",
    "updatedAt": "2025-08-22T02:51:20.000792Z",
    "status": "active"
  },
  {
    "sku": "SKU-100014",
    "title": "LiteBook 14\" Laptop",
    "slug": "litebook-14\"-laptop-14",
    "category": "Computing & Gaming",
    "brand": "ViewCore",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 6827,
      "current": 6089,
      "discountPercent": 11
    },
    "stock": 56,
    "rating": {
      "average": 5.0,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p14-1.jpg",
      "/images/products/p14-2.jpg",
      "/images/products/p14-3.jpg"
    ],
    "thumbnail": "/images/products/p14-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "cpu": "Intel i5 / Ryzen 5",
      "ram": "8GB",
      "storage": "512GB SSD"
    },
    "variants": {
      "color": [
        "Gray",
        "Black"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "new",
      "official-store"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ritu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-13"
      },
      {
        "user": "Hasan",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-06-18"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Arman",
        "date": "2025-06-17"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000827Z",
    "updatedAt": "2025-08-22T02:51:20.000828Z",
    "status": "active"
  },
  {
    "sku": "SKU-100015",
    "title": "Chrono Steel Watch",
    "slug": "chrono-steel-watch-15",
    "category": "Watches & Bags",
    "brand": "CareGlow",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 34064,
      "current": 25893,
      "discountPercent": 24
    },
    "stock": 4,
    "rating": {
      "average": 5.0,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p15-1.jpg",
      "/images/products/p15-2.jpg",
      "/images/products/p15-3.jpg"
    ],
    "thumbnail": "/images/products/p15-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Red",
        "Blue"
      ]
    },
    "badges": [
      "official-store",
      "best-seller"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Shila",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-29"
      },
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-05-27"
      }
    ],
    "questions": [
      {
        "question": "Is there any warranty?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Priya",
        "date": "2025-05-01"
      },
      {
        "question": "Is there any warranty?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Ovi",
        "date": "2025-07-18"
      },
      {
        "question": "Is there any warranty?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Ovi",
        "date": "2025-05-17"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000871Z",
    "updatedAt": "2025-08-22T02:51:20.000872Z",
    "status": "active"
  },
  {
    "sku": "SKU-100016",
    "title": "Acoustic Guitar 38\"",
    "slug": "acoustic-guitar-38\"-16",
    "category": "Lifestyle & Hobbies",
    "brand": "ViewCore",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 49394,
      "current": 43162,
      "discountPercent": 13
    },
    "stock": 68,
    "rating": {
      "average": 5.0,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p16-1.jpg",
      "/images/products/p16-2.jpg",
      "/images/products/p16-3.jpg"
    ],
    "thumbnail": "/images/products/p16-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Black",
        "Gray"
      ]
    },
    "badges": [
      "best-seller",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Hasan",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-04-06"
      },
      {
        "user": "Shila",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-30"
      },
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-02-26"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Ovi",
        "date": "2025-05-03"
      },
      {
        "question": "Is there any warranty?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Nafis",
        "date": "2025-07-09"
      },
      {
        "question": "What is the return policy?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Joya",
        "date": "2025-08-05"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000920Z",
    "updatedAt": "2025-08-22T02:51:20.000921Z",
    "status": "active"
  },
  {
    "sku": "SKU-100017",
    "title": "Classic Cotton T‑Shirt",
    "slug": "classic-cotton-t‑shirt-17",
    "category": "Men's Fashion",
    "brand": "RoadPro",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 8645,
      "current": 7261,
      "discountPercent": 16
    },
    "stock": 74,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p17-1.jpg",
      "/images/products/p17-2.jpg",
      "/images/products/p17-3.jpg"
    ],
    "thumbnail": "/images/products/p17-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Red",
        "Green",
        "White"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "best-seller",
      "official-store"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-06"
      },
      {
        "user": "Ovi",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-14"
      }
    ],
    "questions": [
      {
        "question": "Is this original brand?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Nafis",
        "date": "2025-08-19"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.000959Z",
    "updatedAt": "2025-08-22T02:51:20.000960Z",
    "status": "active"
  },
  {
    "sku": "SKU-100018",
    "title": "Car Phone Holder",
    "slug": "car-phone-holder-18",
    "category": "Automotives & Motorbikes",
    "brand": "Aurora",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 42841,
      "current": 38369,
      "discountPercent": 10
    },
    "stock": 87,
    "rating": {
      "average": 4.7,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p18-1.jpg",
      "/images/products/p18-2.jpg",
      "/images/products/p18-3.jpg"
    ],
    "thumbnail": "/images/products/p18-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "compatibility": "Universal 12V",
      "material": "ABS"
    },
    "variants": {
      "color": [
        "White",
        "Gray"
      ]
    },
    "badges": [
      "new",
      "best-seller"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-07-25"
      },
      {
        "user": "Mitu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-04-04"
      },
      {
        "user": "Fahim",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-06-04"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Ritu",
        "date": "2025-06-02"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001000Z",
    "updatedAt": "2025-08-22T02:51:20.001002Z",
    "status": "active"
  },
  {
    "sku": "SKU-100019",
    "title": "Car Phone Holder",
    "slug": "car-phone-holder-19",
    "category": "Automotives & Motorbikes",
    "brand": "GreenPet",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 38399,
      "current": 30707,
      "discountPercent": 20
    },
    "stock": 75,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p19-1.jpg",
      "/images/products/p19-2.jpg",
      "/images/products/p19-3.jpg"
    ],
    "thumbnail": "/images/products/p19-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "compatibility": "Universal 12V",
      "material": "ABS"
    },
    "variants": {
      "color": [
        "Black",
        "Red"
      ]
    },
    "badges": [
      "hot",
      "official-store"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ritu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-04"
      },
      {
        "user": "Fahim",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-03"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Ovi",
        "date": "2025-07-06"
      },
      {
        "question": "Is this original brand?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Priya",
        "date": "2025-08-17"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001040Z",
    "updatedAt": "2025-08-22T02:51:20.001042Z",
    "status": "active"
  },
  {
    "sku": "SKU-100020",
    "title": "FastCharge Power Bank 20000mAh",
    "slug": "fastcharge-power-bank-20000mah-20",
    "category": "Electronic Accessories",
    "brand": "Aurora",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 28543,
      "current": 19987,
      "discountPercent": 30
    },
    "stock": 129,
    "rating": {
      "average": 4.0,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p20-1.jpg",
      "/images/products/p20-2.jpg",
      "/images/products/p20-3.jpg"
    ],
    "thumbnail": "/images/products/p20-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "capacity": "20000mAh",
      "ports": "USB-A x2, USB-C x1"
    },
    "variants": {
      "color": [
        "Black",
        "Gray"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "best-seller",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Shila",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-05-16"
      },
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-06-11"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Arman",
        "date": "2025-08-19"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001081Z",
    "updatedAt": "2025-08-22T02:51:20.001084Z",
    "status": "active"
  },
  {
    "sku": "SKU-100021",
    "title": "FastCharge Power Bank 20000mAh",
    "slug": "fastcharge-power-bank-20000mah-21",
    "category": "Electronic Accessories",
    "brand": "FitPeak",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 53303,
      "current": 44251,
      "discountPercent": 17
    },
    "stock": 126,
    "rating": {
      "average": 4.0,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p21-1.jpg",
      "/images/products/p21-2.jpg",
      "/images/products/p21-3.jpg"
    ],
    "thumbnail": "/images/products/p21-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "capacity": "20000mAh",
      "ports": "USB-A x2, USB-C x1"
    },
    "variants": {
      "color": [
        "White",
        "Blue"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "official-store",
      "hot"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Joya",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-04-08"
      },
      {
        "user": "Joya",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-05-14"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Fahim",
        "date": "2025-05-17"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001131Z",
    "updatedAt": "2025-08-22T02:51:20.001132Z",
    "status": "active"
  },
  {
    "sku": "SKU-100022",
    "title": "Running Sneakers",
    "slug": "running-sneakers-22",
    "category": "Sports & Outdoors",
    "brand": "Acme",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 47895,
      "current": 38630,
      "discountPercent": 19
    },
    "stock": 62,
    "rating": {
      "average": 4.5,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p22-1.jpg",
      "/images/products/p22-2.jpg",
      "/images/products/p22-3.jpg"
    ],
    "thumbnail": "/images/products/p22-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "material": "Polyester",
      "size": "M/L/XL"
    },
    "variants": {
      "color": [
        "Red",
        "Blue",
        "Black"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "new",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ritu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-08-14"
      },
      {
        "user": "Hasan",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-11"
      },
      {
        "user": "Ritu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-05-17"
      },
      {
        "user": "Fahim",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-08-09"
      }
    ],
    "questions": [
      {
        "question": "Is there any warranty?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Mitu",
        "date": "2025-07-20"
      },
      {
        "question": "Is there any warranty?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Priya",
        "date": "2025-05-20"
      },
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Mitu",
        "date": "2025-06-19"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001185Z",
    "updatedAt": "2025-08-22T02:51:20.001186Z",
    "status": "active"
  },
  {
    "sku": "SKU-100023",
    "title": "Neo X3 Smartphone 6/128",
    "slug": "neo-x3-smartphone-6-128-23",
    "category": "Phones & Accessories",
    "brand": "MotoMax",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 6762,
      "current": 5567,
      "discountPercent": 18
    },
    "stock": 145,
    "rating": {
      "average": 4.3,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p23-1.jpg",
      "/images/products/p23-2.jpg",
      "/images/products/p23-3.jpg"
    ],
    "thumbnail": "/images/products/p23-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "battery": "5000mAh",
      "network": "4G/5G",
      "display": "6.5\" IPS"
    },
    "variants": {
      "color": [
        "White",
        "Black"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "new",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-17"
      },
      {
        "user": "Ritu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-21"
      },
      {
        "user": "Shila",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-06-17"
      }
    ],
    "questions": [
      {
        "question": "Is this original brand?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Priya",
        "date": "2025-05-27"
      },
      {
        "question": "What is the return policy?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Fahim",
        "date": "2025-07-16"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001230Z",
    "updatedAt": "2025-08-22T02:51:20.001231Z",
    "status": "active"
  },
  {
    "sku": "SKU-100024",
    "title": "Premium Basmati Rice 5kg",
    "slug": "premium-basmati-rice-5kg-24",
    "category": "Groceries & Pet Supplies",
    "brand": "Awei",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 36773,
      "current": 31440,
      "discountPercent": 15
    },
    "stock": 115,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p24-1.jpg",
      "/images/products/p24-2.jpg",
      "/images/products/p24-3.jpg"
    ],
    "thumbnail": "/images/products/p24-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "weight": "1kg",
      "shelfLife": "12 months"
    },
    "variants": {
      "color": [
        "Blue",
        "Red"
      ]
    },
    "badges": [
      "hot",
      "official-store"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ovi",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-07-31"
      },
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-06-08"
      }
    ],
    "questions": [
      {
        "question": "Is there any warranty?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Fahim",
        "date": "2025-07-19"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001266Z",
    "updatedAt": "2025-08-22T02:51:20.001268Z",
    "status": "active"
  },
  {
    "sku": "SKU-100025",
    "title": "Memory Foam Pillow",
    "slug": "memory-foam-pillow-25",
    "category": "Home & Living",
    "brand": "Skyline",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 47340,
      "current": 34345,
      "discountPercent": 27
    },
    "stock": 36,
    "rating": {
      "average": 4.5,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p25-1.jpg",
      "/images/products/p25-2.jpg",
      "/images/products/p25-3.jpg"
    ],
    "thumbnail": "/images/products/p25-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Red",
        "Blue"
      ]
    },
    "badges": [
      "new",
      "best-seller"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ritu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-05-20"
      },
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-04-19"
      },
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-12"
      },
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-02-28"
      }
    ],
    "questions": [
      {
        "question": "Is this original brand?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Shila",
        "date": "2025-05-17"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001388Z",
    "updatedAt": "2025-08-22T02:51:20.001389Z",
    "status": "active"
  },
  {
    "sku": "SKU-100026",
    "title": "Memory Foam Pillow",
    "slug": "memory-foam-pillow-26",
    "category": "Home & Living",
    "brand": "MotoMax",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 9648,
      "current": 8370,
      "discountPercent": 13
    },
    "stock": 19,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p26-1.jpg",
      "/images/products/p26-2.jpg",
      "/images/products/p26-3.jpg"
    ],
    "thumbnail": "/images/products/p26-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Blue",
        "Red"
      ]
    },
    "badges": [
      "best-seller",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ovi",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-06-18"
      },
      {
        "user": "Ritu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-05-13"
      }
    ],
    "questions": [
      {
        "question": "Is there any warranty?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Ovi",
        "date": "2025-06-01"
      },
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Ovi",
        "date": "2025-06-27"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001442Z",
    "updatedAt": "2025-08-22T02:51:20.001445Z",
    "status": "active"
  },
  {
    "sku": "SKU-100027",
    "title": "Running Sneakers",
    "slug": "running-sneakers-27",
    "category": "Sports & Outdoors",
    "brand": "CareGlow",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 17079,
      "current": 12856,
      "discountPercent": 25
    },
    "stock": 35,
    "rating": {
      "average": 4.7,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p27-1.jpg",
      "/images/products/p27-2.jpg",
      "/images/products/p27-3.jpg"
    ],
    "thumbnail": "/images/products/p27-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "material": "Polyester",
      "size": "M/L/XL"
    },
    "variants": {
      "color": [
        "Gray",
        "Blue",
        "Red"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "free-delivery",
      "hot"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-13"
      },
      {
        "user": "Fahim",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-04-03"
      },
      {
        "user": "Ritu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-08-09"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Shila",
        "date": "2025-07-16"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001515Z",
    "updatedAt": "2025-08-22T02:51:20.001517Z",
    "status": "active"
  },
  {
    "sku": "SKU-100028",
    "title": "FastCharge Power Bank 20000mAh",
    "slug": "fastcharge-power-bank-20000mah-28",
    "category": "Electronic Accessories",
    "brand": "GreenPet",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 53675,
      "current": 35897,
      "discountPercent": 33
    },
    "stock": 128,
    "rating": {
      "average": 5.0,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p28-1.jpg",
      "/images/products/p28-2.jpg",
      "/images/products/p28-3.jpg"
    ],
    "thumbnail": "/images/products/p28-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "capacity": "20000mAh",
      "ports": "USB-A x2, USB-C x1"
    },
    "variants": {
      "color": [
        "Red",
        "Green"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "hot",
      "new"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Priya",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-06-05"
      },
      {
        "user": "Fahim",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-03"
      },
      {
        "user": "Ritu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-10"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Hasan",
        "date": "2025-06-12"
      },
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Ritu",
        "date": "2025-07-30"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001704Z",
    "updatedAt": "2025-08-22T02:51:20.001706Z",
    "status": "active"
  },
  {
    "sku": "SKU-100029",
    "title": "Memory Foam Pillow",
    "slug": "memory-foam-pillow-29",
    "category": "Home & Living",
    "brand": "ZenWear",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 24839,
      "current": 20777,
      "discountPercent": 16
    },
    "stock": 53,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p29-1.jpg",
      "/images/products/p29-2.jpg",
      "/images/products/p29-3.jpg"
    ],
    "thumbnail": "/images/products/p29-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Red",
        "Blue"
      ]
    },
    "badges": [
      "best-seller",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ovi",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-29"
      },
      {
        "user": "Nafis",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-05-08"
      }
    ],
    "questions": [
      {
        "question": "Is this original brand?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Hasan",
        "date": "2025-05-26"
      },
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Ovi",
        "date": "2025-04-29"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001768Z",
    "updatedAt": "2025-08-22T02:51:20.001771Z",
    "status": "active"
  },
  {
    "sku": "SKU-100030",
    "title": "LiteBook 14\" Laptop",
    "slug": "litebook-14\"-laptop-30",
    "category": "Computing & Gaming",
    "brand": "MotoMax",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 31052,
      "current": 27379,
      "discountPercent": 12
    },
    "stock": 135,
    "rating": {
      "average": 4.8,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p30-1.jpg",
      "/images/products/p30-2.jpg",
      "/images/products/p30-3.jpg"
    ],
    "thumbnail": "/images/products/p30-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "cpu": "Intel i5 / Ryzen 5",
      "ram": "8GB",
      "storage": "512GB SSD"
    },
    "variants": {
      "color": [
        "Red",
        "Gray"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "hot",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Arman",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-06-03"
      },
      {
        "user": "Hasan",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-08-13"
      },
      {
        "user": "Mitu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-24"
      },
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-08-03"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Fahim",
        "date": "2025-05-26"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001836Z",
    "updatedAt": "2025-08-22T02:51:20.001839Z",
    "status": "active"
  },
  {
    "sku": "SKU-100031",
    "title": "Floral Maxi Dress",
    "slug": "floral-maxi-dress-31",
    "category": "Women's Fashion",
    "brand": "Awei",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 7052,
      "current": 5930,
      "discountPercent": 16
    },
    "stock": 25,
    "rating": {
      "average": 4.5,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p31-1.jpg",
      "/images/products/p31-2.jpg",
      "/images/products/p31-3.jpg"
    ],
    "thumbnail": "/images/products/p31-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Black",
        "Blue",
        "White"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "new",
      "best-seller"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Nafis",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-07-20"
      },
      {
        "user": "Joya",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-08-12"
      },
      {
        "user": "Hasan",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-14"
      },
      {
        "user": "Fahim",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-12"
      }
    ],
    "questions": [
      {
        "question": "Is there any warranty?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Fahim",
        "date": "2025-07-14"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001900Z",
    "updatedAt": "2025-08-22T02:51:20.001901Z",
    "status": "active"
  },
  {
    "sku": "SKU-100032",
    "title": "Premium Basmati Rice 5kg",
    "slug": "premium-basmati-rice-5kg-32",
    "category": "Groceries & Pet Supplies",
    "brand": "GreenPet",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 23419,
      "current": 20403,
      "discountPercent": 13
    },
    "stock": 107,
    "rating": {
      "average": 4.2,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p32-1.jpg",
      "/images/products/p32-2.jpg",
      "/images/products/p32-3.jpg"
    ],
    "thumbnail": "/images/products/p32-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "weight": "1kg",
      "shelfLife": "12 months"
    },
    "variants": {
      "color": [
        "Black",
        "Blue"
      ]
    },
    "badges": [
      "hot",
      "new"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-04-09"
      },
      {
        "user": "Fahim",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-06-19"
      },
      {
        "user": "Arman",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-08"
      },
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-08-16"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Nafis",
        "date": "2025-05-24"
      },
      {
        "question": "Is this original brand?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Shila",
        "date": "2025-05-26"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.001952Z",
    "updatedAt": "2025-08-22T02:51:20.001953Z",
    "status": "active"
  },
  {
    "sku": "SKU-100033",
    "title": "Chrono Steel Watch",
    "slug": "chrono-steel-watch-33",
    "category": "Watches & Bags",
    "brand": "Aurora",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 951,
      "current": 830,
      "discountPercent": 13
    },
    "stock": 27,
    "rating": {
      "average": 4.0,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p33-1.jpg",
      "/images/products/p33-2.jpg",
      "/images/products/p33-3.jpg"
    ],
    "thumbnail": "/images/products/p33-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Green",
        "Red"
      ]
    },
    "badges": [
      "official-store",
      "hot"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Priya",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-04-17"
      },
      {
        "user": "Ovi",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-07-03"
      },
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-06-26"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Nafis",
        "date": "2025-06-06"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.002000Z",
    "updatedAt": "2025-08-22T02:51:20.002003Z",
    "status": "active"
  },
  {
    "sku": "SKU-100034",
    "title": "Acoustic Guitar 38\"",
    "slug": "acoustic-guitar-38\"-34",
    "category": "Lifestyle & Hobbies",
    "brand": "MotoMax",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 4379,
      "current": 3339,
      "discountPercent": 24
    },
    "stock": 80,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p34-1.jpg",
      "/images/products/p34-2.jpg",
      "/images/products/p34-3.jpg"
    ],
    "thumbnail": "/images/products/p34-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Gray",
        "Black"
      ]
    },
    "badges": [
      "free-delivery",
      "hot"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Joya",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-07-16"
      },
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-08-06"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Fahim",
        "date": "2025-05-18"
      },
      {
        "question": "What is the return policy?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Ovi",
        "date": "2025-05-28"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.002068Z",
    "updatedAt": "2025-08-22T02:51:20.002071Z",
    "status": "active"
  },
  {
    "sku": "SKU-100035",
    "title": "Car Phone Holder",
    "slug": "car-phone-holder-35",
    "category": "Automotives & Motorbikes",
    "brand": "MotoMax",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 33285,
      "current": 22665,
      "discountPercent": 32
    },
    "stock": 53,
    "rating": {
      "average": 4.3,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p35-1.jpg",
      "/images/products/p35-2.jpg",
      "/images/products/p35-3.jpg"
    ],
    "thumbnail": "/images/products/p35-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "compatibility": "Universal 12V",
      "material": "ABS"
    },
    "variants": {
      "color": [
        "Red",
        "Blue"
      ]
    },
    "badges": [
      "best-seller",
      "new"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Hasan",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-25"
      },
      {
        "user": "Ritu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-06-11"
      },
      {
        "user": "Shila",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-05-06"
      }
    ],
    "questions": [
      {
        "question": "Is there any warranty?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Priya",
        "date": "2025-07-05"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.002131Z",
    "updatedAt": "2025-08-22T02:51:20.002133Z",
    "status": "active"
  },
  {
    "sku": "SKU-100036",
    "title": "Running Sneakers",
    "slug": "running-sneakers-36",
    "category": "Sports & Outdoors",
    "brand": "Awei",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 13839,
      "current": 9212,
      "discountPercent": 33
    },
    "stock": 15,
    "rating": {
      "average": 5.0,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p36-1.jpg",
      "/images/products/p36-2.jpg",
      "/images/products/p36-3.jpg"
    ],
    "thumbnail": "/images/products/p36-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "material": "Polyester",
      "size": "M/L/XL"
    },
    "variants": {
      "color": [
        "Blue",
        "White",
        "Black"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "official-store",
      "best-seller"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Mitu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-08-14"
      },
      {
        "user": "Priya",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-14"
      },
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-05-17"
      }
    ],
    "questions": [
      {
        "question": "Is this original brand?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Joya",
        "date": "2025-08-16"
      },
      {
        "question": "Is this original brand?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Ovi",
        "date": "2025-07-14"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.002209Z",
    "updatedAt": "2025-08-22T02:51:20.002211Z",
    "status": "active"
  },
  {
    "sku": "SKU-100037",
    "title": "Classic Cotton T‑Shirt",
    "slug": "classic-cotton-t‑shirt-37",
    "category": "Men's Fashion",
    "brand": "ZenWear",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 2575,
      "current": 1759,
      "discountPercent": 32
    },
    "stock": 127,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p37-1.jpg",
      "/images/products/p37-2.jpg",
      "/images/products/p37-3.jpg"
    ],
    "thumbnail": "/images/products/p37-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "White",
        "Black",
        "Blue"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "hot",
      "official-store"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-04-24"
      },
      {
        "user": "Ovi",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-05-03"
      }
    ],
    "questions": [
      {
        "question": "Is this original brand?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Shila",
        "date": "2025-05-13"
      },
      {
        "question": "Is there any warranty?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Arman",
        "date": "2025-05-17"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.002435Z",
    "updatedAt": "2025-08-22T02:51:20.002439Z",
    "status": "active"
  },
  {
    "sku": "SKU-100038",
    "title": "Acoustic Guitar 38\"",
    "slug": "acoustic-guitar-38\"-38",
    "category": "Lifestyle & Hobbies",
    "brand": "RoadPro",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 35667,
      "current": 31992,
      "discountPercent": 10
    },
    "stock": 67,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p38-1.jpg",
      "/images/products/p38-2.jpg",
      "/images/products/p38-3.jpg"
    ],
    "thumbnail": "/images/products/p38-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Green",
        "Black"
      ]
    },
    "badges": [
      "hot",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-04-02"
      },
      {
        "user": "Hasan",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-05-04"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Hasan",
        "date": "2025-07-23"
      },
      {
        "question": "Does it support fast charging?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Mitu",
        "date": "2025-06-03"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.002503Z",
    "updatedAt": "2025-08-22T02:51:20.002506Z",
    "status": "active"
  },
  {
    "sku": "SKU-100039",
    "title": "Soft Baby Blanket",
    "slug": "soft-baby-blanket-39",
    "category": "Mother & Baby",
    "brand": "RoadPro",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 39469,
      "current": 27979,
      "discountPercent": 29
    },
    "stock": 72,
    "rating": {
      "average": 4.5,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p39-1.jpg",
      "/images/products/p39-2.jpg",
      "/images/products/p39-3.jpg"
    ],
    "thumbnail": "/images/products/p39-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "ageRange": "0–24 months",
      "safety": "BPA free"
    },
    "variants": {
      "color": [
        "Green",
        "White"
      ]
    },
    "badges": [
      "best-seller",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ovi",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-06-07"
      },
      {
        "user": "Joya",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-06-14"
      },
      {
        "user": "Ovi",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-06-16"
      },
      {
        "user": "Mitu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-06-19"
      }
    ],
    "questions": [
      {
        "question": "Is this original brand?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Fahim",
        "date": "2025-06-15"
      },
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Mitu",
        "date": "2025-08-17"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.002592Z",
    "updatedAt": "2025-08-22T02:51:20.002595Z",
    "status": "active"
  },
  {
    "sku": "SKU-100040",
    "title": "Floral Maxi Dress",
    "slug": "floral-maxi-dress-40",
    "category": "Women's Fashion",
    "brand": "Acme",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 33566,
      "current": 26857,
      "discountPercent": 20
    },
    "stock": 149,
    "rating": {
      "average": 5.0,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p40-1.jpg",
      "/images/products/p40-2.jpg",
      "/images/products/p40-3.jpg"
    ],
    "thumbnail": "/images/products/p40-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "White",
        "Black",
        "Blue"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "official-store",
      "hot"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Shila",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-08-11"
      },
      {
        "user": "Priya",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-22"
      }
    ],
    "questions": [
      {
        "question": "Is this original brand?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Ritu",
        "date": "2025-06-01"
      },
      {
        "question": "Is this original brand?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Nafis",
        "date": "2025-07-05"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.002662Z",
    "updatedAt": "2025-08-22T02:51:20.002665Z",
    "status": "active"
  },
  {
    "sku": "SKU-100041",
    "title": "Memory Foam Pillow",
    "slug": "memory-foam-pillow-41",
    "category": "Home & Living",
    "brand": "Skyline",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 3863,
      "current": 2870,
      "discountPercent": 26
    },
    "stock": 79,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p41-1.jpg",
      "/images/products/p41-2.jpg",
      "/images/products/p41-3.jpg"
    ],
    "thumbnail": "/images/products/p41-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "Black",
        "White"
      ]
    },
    "badges": [
      "free-delivery",
      "new"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Nafis",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-21"
      },
      {
        "user": "Nafis",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-05-30"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Arman",
        "date": "2025-08-09"
      },
      {
        "question": "What is the return policy?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Fahim",
        "date": "2025-08-10"
      },
      {
        "question": "Does it support fast charging?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Ovi",
        "date": "2025-06-30"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.002739Z",
    "updatedAt": "2025-08-22T02:51:20.002741Z",
    "status": "active"
  },
  {
    "sku": "SKU-100042",
    "title": "FastCharge Power Bank 20000mAh",
    "slug": "fastcharge-power-bank-20000mah-42",
    "category": "Electronic Accessories",
    "brand": "FitPeak",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 36376,
      "current": 32708,
      "discountPercent": 10
    },
    "stock": 93,
    "rating": {
      "average": 5.0,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p42-1.jpg",
      "/images/products/p42-2.jpg",
      "/images/products/p42-3.jpg"
    ],
    "thumbnail": "/images/products/p42-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "capacity": "20000mAh",
      "ports": "USB-A x2, USB-C x1"
    },
    "variants": {
      "color": [
        "Gray",
        "White"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "new",
      "official-store"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Joya",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-05-22"
      },
      {
        "user": "Arman",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-08-17"
      }
    ],
    "questions": [
      {
        "question": "Is there any warranty?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Hasan",
        "date": "2025-06-28"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.002794Z",
    "updatedAt": "2025-08-22T02:51:20.002798Z",
    "status": "active"
  },
  {
    "sku": "SKU-100043",
    "title": "Floral Maxi Dress",
    "slug": "floral-maxi-dress-43",
    "category": "Women's Fashion",
    "brand": "ZenWear",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 29555,
      "current": 21304,
      "discountPercent": 28
    },
    "stock": 133,
    "rating": {
      "average": 4.5,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p43-1.jpg",
      "/images/products/p43-2.jpg",
      "/images/products/p43-3.jpg"
    ],
    "thumbnail": "/images/products/p43-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic"
    },
    "variants": {
      "color": [
        "White",
        "Black",
        "Green"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "new",
      "official-store"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Mitu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-11"
      },
      {
        "user": "Nafis",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-08-08"
      },
      {
        "user": "Arman",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-07-30"
      },
      {
        "user": "Fahim",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-09"
      }
    ],
    "questions": [
      {
        "question": "Is this original brand?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Nafis",
        "date": "2025-04-27"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.003065Z",
    "updatedAt": "2025-08-22T02:51:20.003083Z",
    "status": "active"
  },
  {
    "sku": "SKU-100044",
    "title": "Premium Basmati Rice 5kg",
    "slug": "premium-basmati-rice-5kg-44",
    "category": "Groceries & Pet Supplies",
    "brand": "CareGlow",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 4347,
      "current": 3260,
      "discountPercent": 25
    },
    "stock": 132,
    "rating": {
      "average": 4.8,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p44-1.jpg",
      "/images/products/p44-2.jpg",
      "/images/products/p44-3.jpg"
    ],
    "thumbnail": "/images/products/p44-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "weight": "1kg",
      "shelfLife": "12 months"
    },
    "variants": {
      "color": [
        "White",
        "Red"
      ]
    },
    "badges": [
      "best-seller",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ritu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-16"
      },
      {
        "user": "Priya",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-16"
      },
      {
        "user": "Joya",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-02"
      },
      {
        "user": "Hasan",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-30"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Nafis",
        "date": "2025-04-30"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.003479Z",
    "updatedAt": "2025-08-22T02:51:20.003485Z",
    "status": "active"
  },
  {
    "sku": "SKU-100045",
    "title": "Running Sneakers",
    "slug": "running-sneakers-45",
    "category": "Sports & Outdoors",
    "brand": "NovaTech",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 54100,
      "current": 40923,
      "discountPercent": 24
    },
    "stock": 94,
    "rating": {
      "average": 4.7,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p45-1.jpg",
      "/images/products/p45-2.jpg",
      "/images/products/p45-3.jpg"
    ],
    "thumbnail": "/images/products/p45-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "material": "Polyester",
      "size": "M/L/XL"
    },
    "variants": {
      "color": [
        "Red",
        "Green",
        "Gray"
      ],
      "size": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "badges": [
      "hot",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Arman",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-03-21"
      },
      {
        "user": "Fahim",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-03-14"
      },
      {
        "user": "Arman",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-06-04"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Priya",
        "date": "2025-06-25"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.003621Z",
    "updatedAt": "2025-08-22T02:51:20.003624Z",
    "status": "active"
  },
  {
    "sku": "SKU-100046",
    "title": "Smart LED TV 43\" FHD",
    "slug": "smart-led-tv-43\"-fhd-46",
    "category": "TV & Home Appliances",
    "brand": "Awei",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 14617,
      "current": 11902,
      "discountPercent": 19
    },
    "stock": 10,
    "rating": {
      "average": 4.7,
      "count": 3
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p46-1.jpg",
      "/images/products/p46-2.jpg",
      "/images/products/p46-3.jpg"
    ],
    "thumbnail": "/images/products/p46-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "power": "220–240V",
      "energyRating": "A+"
    },
    "variants": {
      "color": [
        "Gray",
        "White"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "free-delivery",
      "best-seller"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ritu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-08-04"
      },
      {
        "user": "Shila",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-05-03"
      },
      {
        "user": "Ritu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-04-30"
      }
    ],
    "questions": [
      {
        "question": "Is there any warranty?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Fahim",
        "date": "2025-04-29"
      },
      {
        "question": "What is the return policy?",
        "answer": "Yes, it supports fast charging with compatible adapters.",
        "askedBy": "Nafis",
        "date": "2025-05-04"
      },
      {
        "question": "Is there any warranty?",
        "answer": "Yes, 7-day replacement and 1-year service warranty.",
        "askedBy": "Priya",
        "date": "2025-08-05"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.003721Z",
    "updatedAt": "2025-08-22T02:51:20.003724Z",
    "status": "active"
  },
  {
    "sku": "SKU-100047",
    "title": "Premium Basmati Rice 5kg",
    "slug": "premium-basmati-rice-5kg-47",
    "category": "Groceries & Pet Supplies",
    "brand": "FitPeak",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 12482,
      "current": 8934,
      "discountPercent": 28
    },
    "stock": 129,
    "rating": {
      "average": 4.8,
      "count": 4
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p47-1.jpg",
      "/images/products/p47-2.jpg",
      "/images/products/p47-3.jpg"
    ],
    "thumbnail": "/images/products/p47-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "weight": "1kg",
      "shelfLife": "12 months"
    },
    "variants": {
      "color": [
        "White",
        "Blue"
      ]
    },
    "badges": [
      "best-seller",
      "free-delivery"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ritu",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-05-24"
      },
      {
        "user": "Hasan",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-05-31"
      },
      {
        "user": "Mitu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-07-16"
      },
      {
        "user": "Fahim",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-04-21"
      }
    ],
    "questions": [
      {
        "question": "Does it support fast charging?",
        "answer": "Return within 7 days if unused and sealed.",
        "askedBy": "Hasan",
        "date": "2025-06-01"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.003801Z",
    "updatedAt": "2025-08-22T02:51:20.003803Z",
    "status": "active"
  },
  {
    "sku": "SKU-100048",
    "title": "FastCharge Power Bank 20000mAh",
    "slug": "fastcharge-power-bank-20000mah-48",
    "category": "Electronic Accessories",
    "brand": "CareGlow",
    "seller": {
      "name": "CartUp Official",
      "rating": 4.8
    },
    "price": {
      "currency": "BDT",
      "original": 30531,
      "current": 24272,
      "discountPercent": 21
    },
    "stock": 26,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "shipping": {
      "method": "Standard",
      "fee": 80,
      "cod": true,
      "freeOver": 1500
    },
    "images": [
      "/images/products/p48-1.jpg",
      "/images/products/p48-2.jpg",
      "/images/products/p48-3.jpg"
    ],
    "thumbnail": "/images/products/p48-thumb.jpg",
    "specs": {
      "origin": "China",
      "warranty": "7 days replacement",
      "inBox": "See description",
      "model": "Generic",
      "capacity": "20000mAh",
      "ports": "USB-A x2, USB-C x1"
    },
    "variants": {
      "color": [
        "Blue",
        "Green"
      ],
      "warrantyMonths": [
        6,
        12
      ]
    },
    "badges": [
      "new",
      "best-seller"
    ],
    "shortDescription": "High-quality, reliable and made for daily use.",
    "description": "Durable build quality with practical features. Designed for Bangladesh market with local warranty support.",
    "reviews": [
      {
        "user": "Ritu",
        "rating": 5,
        "comment": "Good quality, value for money.",
        "date": "2025-04-08"
      },
      {
        "user": "Shila",
        "rating": 4,
        "comment": "Decent product for the price.",
        "date": "2025-04-28"
      }
    ],
    "questions": [
      {
        "question": "What is the return policy?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Joya",
        "date": "2025-08-03"
      },
      {
        "question": "Is this original brand?",
        "answer": "We source from authorized suppliers. 100% genuine.",
        "askedBy": "Ritu",
        "date": "2025-06-26"
      }
    ],
    "createdAt": "2025-08-22T02:51:20.003990Z",
    "updatedAt": "2025-08-22T02:51:20.003994Z",
    "status": "active"
  }
]'>
      home
    </div>
  );
}
