export const validationRegister = values => {
    let errors = {};
  
    if (!values.name.value) {
      errors.name = 'El nombre es obligatorio'
    }else if(!/^[a-zA-Z]\s?[a-zA-z]{1,}'?-?\s?[a-zA-Z]{2,}?\s([a-zA-Z]{1,})\s?$/i.test(values.name.value))
     {
      errors.name = 'El nombre solo puede contener letras'
    }
     else if (values.name.value.length < 3) {
      errors.name = 'El nombre debe tener como mínimo 3 caracteres'
    } else if (values.name.value.length > 30) {
      errors.name = 'El nombre no debe poseer más de 30 caracteres'
    }
  
    if (!values.lastname.value) {
      errors.lastname = 'El apellido es obligatorio'
    }else if(!/^[a-zA-Z]\s?[a-zA-z]{1,}'?-?\s?[a-zA-Z]{2,}?\s([a-zA-Z]{1,})\s?$/i.test(values.lastname.value))
    {
     errors.lastname = 'El apellido solo puede contener letras'
   } else if (values.lastname.value.length < 2) {
      errors.lastname = 'El apellido debe tener como mínimo 3 caracteres'
    } else if (values.lastname.value.length > 30) {
      errors.lastname = 'El apellido no debe poseer más de 30 caracteres'
    }
  
    if (!values.email.value) {
      errors.email = 'El email es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.value)) {
      errors.email = 'El email no es válido';
    } else if (values.email.value.length > 30) {
      errors.email = 'El email no debe poseer más de 30 caracteres';
    }
  
    if (!values.password.value) {
      errors.password = 'La contraseña es obligatoria'
    } else if (values.password.value.length < 7) {
      errors.password = 'La contraseña debe tener como mínimo 8 caracteres'
    } else if (values.password.value.length > 30) {
      errors.password = 'La contraseña no debe poseer más de 30 caracteres'
    }
  
    if (!values.confirmPassword.value) {
      errors.confirmPassword = 'Este campo es obligatorio'
    } else if (values.confirmPassword.value!==values.password.value) {
      errors.confirmPassword = 'Las contraseñas no coinciden'
    }
    return errors;
  }
