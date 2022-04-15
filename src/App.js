
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

import Alumnos from './pages/Alumnos';
import Login from './pages/Login';
import ModalProvider from './context/ModalContext';
import ModalNotas from './components/Modals/ModalNotas';


function App() {
  return (
    <Router>
      <ModalProvider>
      
      <Routes>
       
        
         <Route path="/" element={<Dashboard/>}/>
         <Route path="/usuarios" />
         <Route path="/alumnos" element={<Alumnos/>} />
         <Route path="/login" element={<Login/>} />
         
       
      </Routes>
      </ModalProvider>
    </Router>
  );
}

export default App;