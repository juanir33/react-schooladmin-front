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
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate){
      setErrors(validate(values));
    }else{
      setErrors({});
    }
    setSubmitting(true);
  }

  return {
    values,
    errors,
    handleKeyUp,
    handleSubmit
  }

}
 
export default useForm;

