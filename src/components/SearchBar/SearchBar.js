import React, { useContext, useState } from "react";
import { Button, Col,  FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import {validationSearch} from '../../helpers/validationSearch'
import { UserContext } from "../../context/UserContext";
import "./SearchBar.css";

import { values_search } from "../../constants";
import axiosClient from "../../config/axiosClient";
import { Alert, Snackbar } from "@mui/material";

const SearchBar = () => {
 
  const { handleFilterUsers, getUsers, setUsers, getAuth} = useContext(UserContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(values_search)
  const validate = validationSearch;
  
  
  const handleChangeSearch = (e)=>{ 
    getUsers();
    if(validationSearch){

      setErrors(validationSearch(values))


    }else{setErrors({});}
    setValues({
      ...values,
      [e.target.name]:{
        value: e.target.value
      }

    })
    console.log(values, errors);
  }
   
  const handleBlurSearch = (e)=>{
    if(validate){

      setErrors(validate(values))


    }else{setErrors({})}
    setValues({
      ...values,
      [e.target.name]:{
        value: e.target.value,
        touch: true
      }
    })
    console.log(errors, values);
  };

   

  const handleSubmitSearch = async (e)=>{

      e.preventDefault()
      getAuth();

      if(Object.keys(errors).length === 0){
      const {data} = await axiosClient.get('users/list')
      console.log(data);
      const filter = data.users.filter(user => (user.profile.nombre.toLowerCase() === values.search.value.toLowerCase() || user.profile.apellido.toLowerCase() === values.search.value.toLowerCase()) )
      if(filter.length === 0){
      
        alert('no hay usuario')
      }
      setUsers(filter)
      console.log(filter);}
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
              name="search"
              onKeyUp={handleChangeSearch}
              onBlur={handleBlurSearch}
              
            ></FormControl>
            <InputGroup.Text id="lupa">
              <Button className="btn-lupa btns-light" onClick={handleSubmitSearch}>
                <FaSearch />
              </Button>
            </InputGroup.Text>
          </InputGroup>
          {values.search.touch && errors.search && <Snackbar anchorOrigin={ {vertical: 'top', horizontal: 'center' }} open = {true} autoHideDuration={3000} >
  <Alert  severity="error" sx={{ width: '100%' }}>
    {errors.search}
  </Alert>
</Snackbar>}
        </Col>
      </div>
    </>
  );
};

export default SearchBar;
