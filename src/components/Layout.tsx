import { ReactNode } from "react";
import Footer from "./Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-4 sm:px-6">
      <main className="max-w-4xl mx-auto py-8">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
