export const validationLogin = values => {
  let errors = {};
  if (!values.email.value) {
    errors.email = 'El email es obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.value)) {
    errors.email = 'El email no es válido';
  } else if (values.email.value.length > 30) {
    errors.email = 'El email no debe poseer más de 30 caracteres';
  }

  if (!values.password.value) {
    errors.password = 'La contraseña es obligatoria'
  } else if (values.password.value.length < 3) {
    errors.password = 'La contraseña debe tener como mínimo 8 caracteres'
  } else if (values.password.value.length > 30) {
    errors.password = 'La contraseña no debe poseer más de 30 caracteres'
  }
  return errors;
}