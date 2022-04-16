
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Alumnos from './pages/Alumnos';
import Login from './pages/Login';
import Register from './pages/Register';
import ModalProvider from './context/ModalContext';
import UserProvider from './context/UserContext';
import ModalNotas from './components/Modals/ModalNotas';
import Profesores from './pages/Profesores';
import ProfileCard from './components/ProfileCard/ProfileCard';
import MateriasCards from './components/Cards/MateriasCards';
import LoginForm from './components/LoginForm/LoginForm.css';


function App() {
  return (
    <Router>
      <ModalProvider>
      <UserProvider>
      
      <Routes>
       
        
         <Route path="/home" element={<Dashboard children={<ProfileCard/>} />}/>
         <Route path="/profesores" element={<Dashboard children={<Profesores/>} />} />  
         <Route path="/alumnos" element={<Dashboard children={<Alumnos/>} />} />
         <Route path="/" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/notas" element={<Dashboard children={<Profesores/>} />} />
         <Route path="/materias" element={<Dashboard children={<MateriasCards/>} />} />
         
       
      </Routes>
      </UserProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;