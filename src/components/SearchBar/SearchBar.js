import React, { useContext } from "react";
import { Button, Col,  FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import { UserContext } from "../../context/UserContext";
import "./SearchBar.css";

const SearchBar = () => {
 
  const { handleFilterUsers, handleSearchBar, search, users, setUsers} = useContext(UserContext);
  

  const handleSubmitSearch = (e)=>{
      e.preventDefault()
      const filter = users.filter(user => (user.profile.nombre.toLowerCase() === search.toLowerCase() || user.profile.apellido.toLowerCase() === search.toLowerCase()) )
      setUsers(filter)
      console.log(filter);
  }

  
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between w-100 p-3 search-container  my-3">
        <Col md={5} sm={12} className="col-border  d-flex justify-content-between px-2 ">
          <Button className="btns" id="admin" onClick={handleFilterUsers}>
            Admin
          </Button>
          <Button className="btns" id="alumno" onClick={handleFilterUsers}>
            Alumnos
          </Button>
          <Button className="btns" id="profesor" onClick={handleFilterUsers}>
            Profesores
          </Button>
        </Col>
        <Col md={7} sm={12} className=" d-flex">
          <InputGroup>
            <FormControl
              className="w-75 lupa"
              placeholder="Buscar un usuario"
              aria-label="Buscar un usuario"
              aria-describedby="lupa"
              name="lupa"
              onKeyUp={handleSearchBar}
            ></FormControl>
            <InputGroup.Text id="lupa">
              <Button className="btn-lupa btns-light" onClick={handleSubmitSearch}>
                <FaSearch />
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </div>
    </>
  );
};

export default SearchBar;
