import { NavLink } from "react-router-dom";

function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {

  return (

    <>

      {/* Backdrop */}

      <nav
        className={`side-menu ${
          sidebarOpen ? "open" : ""
        }`}
      >

        <div className="side-menu-top">

          <NavLink
            to="/admin"
            end
            className="nav-links"
            onClick={() => setSidebarOpen(false)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/products"
            className="nav-links"
            onClick={() => setSidebarOpen(false)}
          >
            Products
          </NavLink>

          <NavLink
            to="/admin/upload"
            className="nav-links"
            onClick={() => setSidebarOpen(false)}
          >
            Upload Product
          </NavLink>

          <NavLink
            to="/admin/orders"
            className="nav-links"
            onClick={() => setSidebarOpen(false)}
          >
            Orders
          </NavLink>

          <NavLink
            to="/admin/analytics"
            className="nav-links"
            onClick={() => setSidebarOpen(false)}
          >
            Analytics
          </NavLink>

          <NavLink
            to="/admin/settings"
            className="nav-links"
            onClick={() => setSidebarOpen(false)}
          >
            Settings
          </NavLink>

        </div>

      </nav>

    </>

  );

}

export default Sidebar;