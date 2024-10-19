import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Documents from "./pages/documents/Documents";
import Machts from "./pages/matchs/Machts";
import Users from "./pages/users/users";
import Regles from "./pages/documents/Regles";
import Jonglerie from "./pages/statistiques/jonglerie";
import Tuto from "./pages/tutos/tuto";
import Agenda from "./pages/agenda/agenda";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        <Navbar />

        <main className="content">
          <div className="container-fluid p-0">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={<Dashboard />} />

              <Route path="/joueurs" element={<Users />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/tutos" element={<Tuto />} />
              <Route path="/regles" element={<Regles />} />
              <Route path="/matchs" element={<Machts />} />
              <Route path="/jonglerie" element={<Jonglerie />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
