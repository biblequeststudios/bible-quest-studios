export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bible Quest</h1>
        <nav>
          <a href="/" className="px-2 hover:underline">Home</a>
          <a href="/practice" className="px-2 hover:underline">Practice</a>
          <a href="/study" className="px-2 hover:underline">Study</a>
          <a href="/admin" className="px-2 hover:underline">Admin</a>
        </nav>
      </div>
    </header>
  );
}
