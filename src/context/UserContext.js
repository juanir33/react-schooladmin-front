import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";
import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import 'animate.css';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const SuccesSwal = withReactContent(Swal);

  const loginUser = async (values) => {
    try {
      const { data } = await axiosClient.post("/auth/login", values);
      setToken(data.token);
      setAuth(true);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error);
      setAuth(false);
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
    }
  };

  const registerUser = async (values) => {
    try {
      const dataTransform = {
        email: values.email,
        password: values.password,
        profile: {
          nombre: values.name,
          apellido: values.lastname,
        },
      };
      const { data } = await axiosClient.post("/auth/register", dataTransform);
      console.log(data);
      if (data.ok === true) {
        SuccesSwal.fire({
          title: "Registro exitoso, se te ha enviado un e-mail de confirmacion. Para ingresar al sitio debes ser habilitado por el Administrador",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          confirmButtonText: 'Volver',
          background: 'var(--cadet-blue)',
          color: 'white',
          customClass:{
              confirmButton: 'btn btns'
              
          }
        }).then((results)=>{
            results.isConfirmed? setTimeout(() => {
                navigate("/");
              }, 3000): setTimeout(() => {
                navigate("/");
              }, 10000)

        });
        
      }
    } catch (error) {
      console.log(error);
      setAuth(false);
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
    }
  };

  const getAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosClient.defaults.headers.common["token"] = token;
    } else {
      delete axiosClient.defaults.headers.common["token"];
    }
    try {
      const response = await axiosClient.get("/users/list");
      setAuth(true);
      setUser(response.data.user);
      setToken(response.data.token);
    } catch (error) {
      console.log(error);
      setAuth(false);
      setUser(null);
      setToken(null);
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
    }
  };
  const logOut = () => {
    setAuth(false);
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const decoder = () => {
    const data = localStorage.getItem("token");
    const logged = jwt_decode(data);
    return logged;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        registerUser,
        auth,
        getAuth,
        logOut,
        decoder,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
