import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem("token");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-muted p-2 rounded shadow-md"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full w-64 bg-white/80 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
          <nav className="flex flex-col space-y-3 text-sm">
            <a href="/dashboard" className="hover:underline">🏠 Overview</a>
            <a href="/profile" className="hover:underline">👤 Profile</a>
            <a href="/discover" className="hover:underline">🔍 Discover</a>
            <a href="/settings" className="hover:underline">⚙️ Settings</a>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 ml-0 md:ml-64">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Welcome back 👋</h1>
          <p className="text-muted-foreground text-sm">Here’s what’s going on with your account today.</p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-muted rounded-lg shadow">📦 Active Projects</div>
          <div className="p-4 bg-muted rounded-lg shadow">📬 Messages</div>
          <div className="p-4 bg-muted rounded-lg shadow">📈 Analytics</div>
        </section>
      </main>
    </div>
  );
}
