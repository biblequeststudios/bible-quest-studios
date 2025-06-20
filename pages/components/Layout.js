// components/Layout.js
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-blue-900 text-white font-bold">Bible Quest Studios</header>
      <main className="flex-1">{children}</main>
      <footer className="p-4 bg-blue-900 text-white text-center">© 2025 Bible Quest Studios</footer>
    </div>
  );
}
