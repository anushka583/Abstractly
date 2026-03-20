export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-blue-600">
        Abstractly
      </h1>

      <div className="flex gap-6 text-gray-600">
        <a href="#">Home</a>
        <a href="#">Reader</a>
        <a href="#">Dashboard</a>
      </div>
    </nav>
  )
}