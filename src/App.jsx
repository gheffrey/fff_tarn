import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Documents from "./pages/documents/Documents";
import Machts from "./pages/matchs/Machts";

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

              <Route path="/documents" element={<Documents />} />
              <Route path="/matchs" element={<Machts />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
