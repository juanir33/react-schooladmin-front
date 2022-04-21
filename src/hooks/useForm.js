import { useState, useEffect } from 'react';

const useForm = (initialState,submit, validate ) => {
  
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  

  useEffect(() => {
    if(submitting) {
      if(Object.keys(errors).length === 0) {
        submit(values);
      }
      setSubmitting(false);
    }
  }, [errors])
  
  const handleKeyUp = (e) => {
    console.log(e.target.value);
    if(validate){
      setErrors(validate(values));
      
      
    }else{setErrors({}) }
    setValues({
      ...values,
      [e.target.name]: {value:e.target.value}
    })
    console.log(values);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate){
      setErrors(validate(values));
    }else{
      setErrors({});
    }
    setSubmitting(true);


  };
  
 const handleBlur= (e)=>{
  if(validate){
    setErrors(validate(values));
    
    
  }
  
 
   setValues({
     ...values,
     [e.target.name]:{
      value:e.target.value,
      touch: true

     }
   })
   }
   
 console.log(values)
 console.log(errors);

 

  return {
    values,
    errors,
    handleKeyUp,
    handleSubmit,
    handleBlur
  }

}
 
export default useForm;

