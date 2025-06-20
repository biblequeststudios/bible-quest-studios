import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-2xl mx-auto px-4 py-8">{children}</main>
      <Footer />
    </>
  );
}
