
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
import './components/LoginForm/LoginFormS.scss';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import AddUsers from './components/AddUsers/AddUsers';
import List from './components/List/List';
import ListaMaterias from './components/Cards/MateriasCards';


function App() {
  return (
    <Router>
      <ModalProvider>
        <UserProvider>

          <Routes>


            <Route path="/home" element={<PrivateRoute><Dashboard children={<ProfileCard />} /></PrivateRoute>} />
            <Route path="/profesores" element={<PrivateRoute><Dashboard children={<Profesores />} /></PrivateRoute>} />
            <Route path="/alumnos" element={<PrivateRoute><Dashboard children={<Alumnos />} /></PrivateRoute>} />
            <Route index path="/" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
            <Route path="/notas" element={<PrivateRoute><Dashboard children={<Profesores />} /></PrivateRoute>} />
            <Route path="/materias" element={<PrivateRoute><Dashboard children={<MateriasCards />} /></PrivateRoute>} />


          </Routes>
        </UserProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;