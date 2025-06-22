export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-blue-900 text-white font-bold">
        Bible Quest Studios
      </header>
      <main className="flex-1">{children}</main>
      <footer className="p-4 bg-gray-100 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Bible Quest Studios
      </footer>
    </div>
  );
}
