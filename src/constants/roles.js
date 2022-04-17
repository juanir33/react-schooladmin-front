import sideL from "../helpers/sideLinkObject";


export const alumno = [
    new sideL("chalkboard", "/materias", "Materias"),
  
    new sideL("pen-alt", "/notas", "Notas"),
  ];
  export const profesor = [
    new sideL("users", "/alumnos", "Alumnos"),
  
    new sideL("chalkboard", "/materias", "Materias"),
    new sideL("list-ol", "/grados", "Grados"),
  
    new sideL("pen-alt", "/notas", "Notas"),
    new sideL("hand-paper", "/asistencias", "Asistencias"),
  ];
  export const admin= [
    new sideL("home", "/", "Panel"),
    new sideL("users", "/alumnos", "Alumnos"),
    new sideL("user-tie", "/profesores", "Profesores"),
    new sideL("chalkboard", "/materias", "Materias"),
    new sideL("list-ol", "/grados", "Grados"),
    new sideL("user-clock", "/preceptores", "Preceptores"),
    new sideL("pen-alt", "/notas", "Notas"),
    new sideL("hand-paper", "/asistencias", "Asistencias"),
    new sideL("chart-line", "/reportes", "Reportes"),
  ];
  