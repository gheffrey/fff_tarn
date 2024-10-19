import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <NavLink className="sidebar-brand" to="/">
          <span className="align-middle">FFF Tarn</span>
        </NavLink>

        <ul className="sidebar-nav">
          <li className="sidebar-header">Mon club</li>

          {/* Dashboard */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <span className="sidebar-link">
                <i className="align-middle" data-feather="sliders"></i>{" "}
                <span className="align-middle">Dashboard</span>
              </span>
            </NavLink>
          </li>

          {/* Joueurs */}
          <li>
            <NavLink
              to="/joueurs"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <span className="sidebar-link">
                <i className="align-middle" data-feather="user"></i>{" "}
                <span className="align-middle">Mes joueurs</span>
              </span>
            </NavLink>
          </li>

          {/* Règles */}
          <li>
            <NavLink
              to="/regles"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <span className="sidebar-link">
                <i className="align-middle" data-feather="user"></i>{" "}
                <span className="align-middle">Régles</span>
              </span>
            </NavLink>
          </li>

          <li className="sidebar-header">Statistiques</li>

          {/* Documents */}
          <li>
            <NavLink
              to="/jonglerie"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <span className="sidebar-link">
                <i className="align-middle" data-feather="square"></i>{" "}
                <span className="align-middle">Jonglerie</span>
              </span>
            </NavLink>
          </li>

          {/* Matchs */}
          <li>
            <NavLink
              to="/matchs"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <span className="sidebar-link">
                <i className="align-middle" data-feather="square"></i>{" "}
                <span className="align-middle">Matchs</span>
              </span>
            </NavLink>
          </li>

          <li className="sidebar-header">Entraînement</li>

          {/* Tutos */}
          <li>
            <NavLink
              to="/tutos"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <span className="sidebar-link">
                <i className="align-middle" data-feather="bar-chart-2"></i>{" "}
                <span className="align-middle">Tutos</span>
              </span>
            </NavLink>
          </li>

          {/* Liste de présence */}
          <li>
            <NavLink
              to="/agenda"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <span className="sidebar-link">
                <i className="align-middle" data-feather="bar-chart-2"></i>{" "}
                <span className="align-middle">Liste de présence</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
