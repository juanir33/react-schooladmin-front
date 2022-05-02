
import UserProfile from "../components/UserProfile/UserProfile";

const token = localStorage.getItem('token')
console.log(token);

const Perfil = () => {
  
  return <UserProfile/>;
};

export default Perfil;
