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
          <li className="sidebar-item active">
            <NavLink className="sidebar-link" to="/">
              <i className="align-middle" data-feather="sliders"></i>{" "}
              <span className="align-middle">Dashboard</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink className="sidebar-link" to="/joueurs">
              <i className="align-middle" data-feather="user"></i>{" "}
              <span className="align-middle">Mes joueurs</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink className="sidebar-link" to="/regles">
              <i className="align-middle" data-feather="user"></i>{" "}
              <span className="align-middle">Régles</span>
            </NavLink>
          </li>

          <li className="sidebar-header">Statistiques</li>
          <li className="sidebar-item">
            <NavLink className="sidebar-link" to="/documents">
              <i className="align-middle" data-feather="square"></i>{" "}
              <span className="align-middle">Jonglerie</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink className="sidebar-link" to="/matchs">
              <i className="align-middle" data-feather="square"></i>{" "}
              <span className="align-middle">Matchs</span>
            </NavLink>
          </li>

          <li className="sidebar-header">Entraînement</li>
          <li className="sidebar-item">
            <NavLink className="sidebar-link" to="charts-chartjs.html">
              <i className="align-middle" data-feather="bar-chart-2"></i>{" "}
              <span className="align-middle">Tutos</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink className="sidebar-link" to="charts-chartjs.html">
              <i className="align-middle" data-feather="bar-chart-2"></i>{" "}
              <span className="align-middle">Liste de présence</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
