
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

import Alumnos from './pages/Alumnos';
import Login from './pages/Login';
import ModalProvider from './context/ModalContext';
import ModalNotas from './components/Modals/ModalNotas';
import Profesores from './pages/Profesores';
import ProfileCard from './components/ProfileCard/ProfileCard';
import MateriasCards from './components/Cards/MateriasCards';


function App() {
  return (
    <Router>
      <ModalProvider>
      
      <Routes>
       
        
         <Route path="/" element={<Dashboard children={<ProfileCard/>} />}/>
         <Route path="/profesores" element={<Dashboard children={<Profesores/>} />} />  
         <Route path="/alumnos" element={<Dashboard children={<Alumnos/>} />} />
         <Route path="/login" element={<Login/>} />
         <Route path="/notas" element={<Dashboard children={<Profesores/>} />} />
         <Route path="/materias" element={<Dashboard children={<MateriasCards/>} />} />
         
       
      </Routes>
      </ModalProvider>
    </Router>
  );
}

export default App;