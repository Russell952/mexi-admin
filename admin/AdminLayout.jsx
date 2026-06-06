import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Topbar setSidebarOpen={setSidebarOpen} />
    <div className="admin-layout">

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