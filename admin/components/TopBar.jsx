import mexiLogo from '../../client/src/assets/mexi-logo.png';

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