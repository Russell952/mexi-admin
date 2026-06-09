import AdminLayout
from "./components/AdminLayout";

import { useNavigate }
from "react-router-dom";



function Settings() {

  const navigate = useNavigate();

  function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");

  }

  return (

    <AdminLayout>

      <h1 className="admin-title">
        Settings
      </h1>

      <div className="settings-container">

        <div className="settings-card">

          <h2>
            Admin Profile
          </h2>

          <p>
            Role: Administrator
          </p>

          <p>
            Access: Full Access
          </p>

        </div>

        <div className="settings-card">

          <h2>
            Store Information
          </h2>

          <p>
            Mexi Technologies Ltd
          </p>

          <p>
            Medical Equipment Store
          </p>

        </div>

        <div className="settings-card">

          <h2>
            Appearance
          </h2>

          <p>
            Dark mode coming soon 😭
          </p>

        </div>

        <div className="settings-card danger-zone">

          <h2>
            Danger Zone
          </h2>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

    </AdminLayout>

  );

}

export default Settings;