export const users =[{id:'2',
  email: "juan@gmail.com",
  password: "123456",
  rol: "alumno",
  profile: {
    apellido: "scott",
    nombre: "Maria",
    domicilio: "lacasa",
    localidad: "loscisnes",
    telefonos: "3567894"
  }

},{id:'32',
    email: "juan@gmail.com",
    password: "123456",
    rol: "alumno",
    profile: {
      apellido: "alcott",
      nombre: "carla",
      domicilio: "lacasa",
      localidad: "loscisnes",
      telefonos: "3567894"
    }

},{id:'13',
  email: "juan@gmail.com",
  password: "123456",
  rol: "alumno",
  profile: {
    apellido: "rasputin",
    nombre: "jhon",
    domicilio: "lacasa",
    localidad: "loscisnes",
    telefonos: "3567894"
  }},
  { id:'14',
    email: "juan@gmail.com",
    password: "123456",
    rol: "alumno",
    profile: {
      apellido: "clorinda",
      nombre: "juan",
      domicilio: "lacasa",
      localidad: "loscisnes",
      telefonos: "3567894"
    }

},{
  id:'1',
  email: "juan@gmail.com",
  password: "123456",
  rol: "admin",
  profile: {
    apellido: "clorinda",
    nombre: "juan",
    domicilio: "lacasa",
    localidad: "loscisnes",
    telefonos: "3567894"
  }

}]

const notas=[
  { alumno: 'id', 
profesor: 'id',
materia:'id',
notas:[{
  fecha: 'fecha',
  valor: Number,
}]}

]
  

localStorage.setItem('users' , JSON.stringify(users)  );
localStorage.setItem('notas' , JSON.stringify(notas)  )