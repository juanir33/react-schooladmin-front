import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "animate.css";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [mat, setMat] = useState([]);
  const navigate = useNavigate();
  const SuccesSwal = withReactContent(Swal);
  const DeleteSwal = withReactContent(Swal);
  const SwalSucces = withReactContent(Swal);
  const SwalError = withReactContent(Swal);


  //Manejo del login
  const loginUser = async (values) => {
    try {
      const bodyTransform = {
        email: values.email.value,
        password: values.password.value,

      }
      console.log(bodyTransform);
      const { data } = await axiosClient.post("/auth/login", bodyTransform);
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
  //Manejo de registro de usuarios
  const registerUser = async (values) => {
    try {
      const dataTransform = {
        email: values.email.value,
        password: values.password.value,
        profile: {
          nombre: values.name.value,
          apellido: values.lastname.value,
        },
      };
      const { data } = await axiosClient.post("/auth/register", dataTransform);
      console.log(data);
      if (data.ok === true) {
        SuccesSwal.fire({
          title:
            "Registro exitoso, se te ha enviado un e-mail de confirmacion. Para ingresar al sitio debes ser habilitado por el Administrador",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          confirmButtonText: "Volver",
          background: "var(--cadet-blue)",
          color: "white",
          customClass: {
            confirmButton: "btn btns",
          },
        }).then((results) => {
          results.isConfirmed
            ? setTimeout(() => {
              navigate("/");
            }, 3000)
            : setTimeout(() => {
              navigate("/");
            }, 10000);
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
  //Obtenemos la verificacion del usuario y setea el token en la request headers
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
  //Decodificamos el token jwt para obtener datos de usuario logeado y mostrar en componentes 
  const decoder = () => {
    const data = localStorage.getItem("token");
    const logged = jwt_decode(data);
    return logged;
  };

  //Listado de todos los usuarios registrados
  const getUsers = async () => {
    const { data } = await axiosClient.get("users/list");
    setUsers(data.users);
  };
  useEffect(() => {
    getUsers();

    try {
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //listado de materias
  const getMaterias = async () => {
    getAuth();
    const { data } = await axiosClient.get("/materias");
    setMat(data.materias);
    console.log(setMat);
  };

  //Filtro de usuarios por su Rol
  const handleFilterUsers = (e) => {
    if (users.some((user) => user.rol === e.target.id)) {
      const userFilter = users.filter((usuario) => usuario.rol === e.target.id);
      setUsers(userFilter);
    } else {
      const newFilter = async () => {
        const { data } = await axiosClient.get("users/list");
        const userFilter = data.users.filter(
          (usuario) => usuario.rol === e.target.id
        );
        setUsers(userFilter);
      };
      newFilter();
    }
  };

  //Para buscar usuarios por nombre o apellido
  const handleSearchBar = async (e) => {

    const { data } = await axiosClient.get("users/list");
    setSearch(e.target.value);
    setUsers(data.users);
  };

  //Borrado de usuarios, solo por el Admin
  const handleDeleteUser = (e) => {
    getAuth();

    try {
      DeleteSwal.fire({
        icon: "warning",
        title: `Esta seguro de eliminar al usuario?`,
        showClass: {
          popup: "animate__fadeIn"
        },
        hideClass: {
          popup: "animate__flipOutX",
        },
        confirmButtonText: "Eliminar",
        confirmButtonAriaLabel: "El usuario ha sido eliminado",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        background: "var(--platinum)",
        color: "var(--skobeloff)",
        customClass: {
          confirmButton: "btn btns",
        },
        focusCancel: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      }).then(async (resulst) => {
        if (resulst.isConfirmed === true) {
          const userId = e.target.id;
          const response = await axiosClient.delete(`users/delete/${userId}`);
          setDeleted(response.data);

          if (response.data.ok === true) {
            SwalSucces.fire({
              icon: "succes",
              title: "Eliminado con exito",
              background: "var(--platinum)",
              color: "var(--skobeloff)",
              confirmButtonText: "volver",
              customClass: {
                confirmButton: "btn btns",
              },
            });
            getUsers();
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
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
        setUsers,
        users,
        handleFilterUsers,
        handleSearchBar,
        search,
        setSearch,
        handleDeleteUser,
        getUsers,

        getMaterias




      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
