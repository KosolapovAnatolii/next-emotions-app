export default function Colors() {
  return (
    <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 p-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Emotions</h1>
        <div className="flex gap-2 mt-2 md:mt-0">
          <button className="bg-rose-500 dark:bg-rose-600 text-white px-4 py-2 rounded">Add</button>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded">Settings</button>
        </div>
      </header>
      <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Name</h2>
      </div>
        <button className="bg-rose-500 dark:bg-rose-600 text-white px-4 py-2 rounded hover:opacity-90 transition">
        Primary Button
      </button>
      <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:opacity-90 transition">
        Secondary Button
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Blue Button
        </button>
    </body>
  )
}
