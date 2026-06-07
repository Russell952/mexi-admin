import mexiLogo from "../assets/Mexi-logo.png";

function Topbar({ setSidebarOpen }) {

  return (

    <div className="top-logo">

      <img
        src={mexiLogo}
        alt="Mexi Logo" 
        className="logo"
      />

      <div

        className="hamburger"

        onClick={() =>
          setSidebarOpen(prev => !prev)
        }

      >

        ☰

      </div>

    </div>

  );

}

export default Topbar;