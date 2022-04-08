
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { Tables } from './components/Tables/Table';
import Alumnos from './pages/Alumnos';
import Login from './pages/Login';
import Register from './pages/Register';
import './components/LoginForm/LoginForm.css'


function App() {
  return (
    <Router>
      <Routes>


         <Route path="/" element={<Dashboard/>}/>
         <Route path="/usuarios" element={<Tables/>}/>
         <Route path="/alumnos" element={<Alumnos/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         
       
      </Routes>
    </Router>
  );
}

export default App;