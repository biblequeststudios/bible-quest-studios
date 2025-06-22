// components/Layout.js

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-blue-900 text-white font-bold">
        Bible Quest Studios
      </header>
      <main className="flex-1">{children}</main>
      <footer className="p-2 text-xs text-center text-gray-500 bg-gray-100">
        &copy; {new Date().getFullYear()} Bible Quest Studios
      </footer>
    </div>
  );
}
