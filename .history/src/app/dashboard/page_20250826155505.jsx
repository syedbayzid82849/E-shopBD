"use client";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Left Sidebar */}
      <div className="flex flex-col h-full p-3 w-60 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-200">
              <rect width="352" height="32" x="80" y="96"></rect>
              <rect width="352" height="32" x="80" y="240"></rect>
              <rect width="352" height="32" x="80" y="384"></rect>
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-2 focus:outline-none focus:ring">
              <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-400">
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-2 text-sm rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
          />
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 overflow-y-auto">
          <ul className="space-y-2 text-sm">
            {["Home", "Search", "Chat", "Orders", "Wishlist", "Settings", "Logout"].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg className="w-5 h-5 fill-current dark:text-gray-400" viewBox="0 0 512 512">
                    <circle cx="256" cy="256" r="200" /> {/* placeholder icon */}
                  </svg>
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* User Profile */}
        <div className="flex items-center mt-6 space-x-3">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt="User"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">Leroy Jenkins</h2>
            <a href="#" className="text-xs text-blue-500 hover:underline">
              View profile
            </a>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Dashboard Overview</h1>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
              Add New
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
              Filter
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {[1, 2, 3].map((card) => (
            <div key={card} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Card {card}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Some quick example text to build on the card content and make up the bulk of the card's content.
              </p>
            </div>
          ))}
        </div>

        {/* Table / Main Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="p-2 border-b border-gray-300 dark:border-gray-600">ID</th>
                <th className="p-2 border-b border-gray-300 dark:border-gray-600">Name</th>
                <th className="p-2 border-b border-gray-300 dark:border-gray-600">Status</th>
                <th className="p-2 border-b border-gray-300 dark:border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((row) => (
                <tr key={row} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="p-2 border-b border-gray-300 dark:border-gray-600">{row}</td>
                  <td className="p-2 border-b border-gray-300 dark:border-gray-600">Item {row}</td>
                  <td className="p-2 border-b border-gray-300 dark:border-gray-600">Active</td>
                  <td className="p-2 border-b border-gray-300 dark:border-gray-600">
                    <button className="px-2 py-1 text-xs text-white bg-green-500 rounded hover:bg-green-600">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
