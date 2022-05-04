export const validationSearch = values => {
    let errors = {};
    if (!values.search.value) {
      errors.search = 'Ingrese un apellido para buscar';
    }else if (values.search.value.length < 3) {
    errors.search = 'Debe tener como mínimo 3 caracteres'}
  else if (values.search.value.length > 30) {
      errors.search = 'No debe poseer más de 30 caracteres'
    } else if(!/^[a-zA-Z]{2,}\s?[a-zA-Z]{2,}\s?$/i.test(values.search.value))
    {
     errors.search = 'Ingrese caracteres validos'
   }

    return errors
}