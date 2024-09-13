
import Verf from "./components/List";
function CompP(){
  let Usuarios:{id: number; nombre: string; autenticacion: boolean; verificacion: string}[]=[
    {id: 1, nombre: "brian", autenticacion: true, verificacion: ""},
    {id: 2, nombre: "leonel", autenticacion: false, verificacion: ""},
    {id: 3, nombre: "usuario0", autenticacion: true, verificacion: ""},
    {id: 4, nombre: "usuario1", autenticacion: true, verificacion: ""},
    {id: 5, nombre: "usuario2", autenticacion: true, verificacion: ""},
    {id: 6, nombre: "usuario3", autenticacion: true, verificacion: ""},
    {id: 7, nombre: "usuario4", autenticacion: true, verificacion: ""},
    {id: 8, nombre: "usuario5", autenticacion: true, verificacion: ""},
    {id: 9, nombre: "usuario6", autenticacion: true, verificacion: ""},
    {id: 10, nombre: "usuario7", autenticacion: true, verificacion: ""},
    {id: 11, nombre: "usuario8", autenticacion: true, verificacion: ""},
    {id: 12, nombre: "usuario9", autenticacion: true, verificacion: ""},
    {id: 13, nombre: "usuario10", autenticacion: true, verificacion: ""},
    {id: 14, nombre: "usuario11", autenticacion: true, verificacion: ""},
    {id: 15, nombre: "usuario12", autenticacion: true, verificacion: ""},
    {id: 16, nombre: "usuario13", autenticacion: true, verificacion: ""},
    {id: 17, nombre: "usuario14", autenticacion: true, verificacion: ""},
    {id: 18, nombre: "usuario15", autenticacion: true, verificacion: ""},
    {id: 19, nombre: "usuario16", autenticacion: true, verificacion: ""},
    {id: 20, nombre: "usuario17", autenticacion: true, verificacion: ""},
    {id: 21, nombre: "usuario18", autenticacion: true, verificacion: ""},
    {id: 22, nombre: "usuario19", autenticacion: true, verificacion: ""},
    {id: 23, nombre: "usuario20", autenticacion: true, verificacion: ""},
    {id: 24, nombre: "usuario21", autenticacion: true, verificacion: ""},
    {id: 25, nombre: "usuario22", autenticacion: true, verificacion: ""},
    {id: 26, nombre: "usuario23", autenticacion: true, verificacion: ""},
    {id: 27, nombre: "usuario24", autenticacion: true, verificacion: ""},
    {id: 28, nombre: "usuario25", autenticacion: true, verificacion: ""}
  ]
  return(<Verf data={Usuarios}/>);
}
export default CompP
