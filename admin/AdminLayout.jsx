import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AdminLayout({ children }) {
console.log("AdminLayout rendered");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Topbar setSidebarOpen={setSidebarOpen} />
    <div className="admin-layout">

      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="admin-content">
        {children}
      </main>

    </div>
  </>
  );
}

export default AdminLayout;