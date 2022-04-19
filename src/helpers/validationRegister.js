export const validationRegister = values => {
    let errors = {};
  
    if (!values.name) {
      errors.password = 'El nombre es obligatorio'
    } else if (values.name.length < 3) {
      errors.name = 'La contraseña debe tener como mínimo 8 caracteres'
    } else if (values.name.length > 30) {
      errors.name = 'La contraseña no debe poseer más de 30 caracteres'
    }
  
    if (!values.lastname) {
      errors.lastname = 'El apellido es obligatorio'
    } else if (values.lastname.length < 3) {
      errors.lastname = 'La contraseña debe tener como mínimo 8 caracteres'
    } else if (values.lastname.length > 30) {
      errors.lastname = 'La contraseña no debe poseer más de 30 caracteres'
    }
  
    if (!values.email) {
      errors.email = 'El email es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'El email no es válido';
    } else if (values.email.length > 30) {
      errors.email = 'El email no debe poseer más de 30 caracteres';
    }
  
    if (!values.password) {
      errors.password = 'La contraseña es obligatoria'
    } else if (values.password.length < 3) {
      errors.password = 'La contraseña debe tener como mínimo 8 caracteres'
    } else if (values.password.length > 30) {
      errors.password = 'La contraseña no debe poseer más de 30 caracteres'
    }
  
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Este campo es obligatorio'
    } else if (values.confirmPassword!==values.password) {
      errors.confirmPassword = 'Las contraseñas no coinciden'
    }
    return errors;
  }