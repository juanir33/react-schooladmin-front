import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { Tables } from "./components/Tables/TableNotasAlumnos";
import Alumnos from "./pages/Alumnos";
import Login from "./pages/Login";
import AddUsers from "./components/AddUsers/AddUsers";
import List from "./components/List/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/usuarios" element={<Tables />} />
        <Route path="/alumnos" element={<Alumnos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AddUsers" element={<AddUsers />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
