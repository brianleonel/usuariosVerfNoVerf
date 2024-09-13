/*
interface PropV{
    data: string[]
}
function User({data}: PropV){
    const handleClick=(e: string)=>{
        console.log(e)
    }
     return(<ul>
        {data.map((elem)=>(<li key={elem} onClick={()=>handleClick(elem)}>{elem}</li>))}
        </ul>);
}
export default User*/
























/*

import {useState} from "react"
interface Prop{
    data: string[]
}
function List({data}: Prop){
    const [index,setIndex]=useState(-1);index=i(valor que recibe setIndex) y useState provoca una renderizacion
    const printE=(i: number)=>{
        setIndex(i);
    }
    return(<ul 
                className="list-group"
           >{data.map((elemento, i)=>(
                <li 
                    onClick={()=>printE(i)} 
                    key={elemento}
                    className={`list-group-item ${index === i ? "active" : ""}`}*/
                    /*-el uso de {} evalua codigo de js
                    -el uso`` me permite interpolar variables y expresiones
                >
                {elemento}
                </li>))}
            </ul>);
}
export default List*/




/*import { useState } from "react";

interface Usuario{
    id: number; nombre: string; autenticacion: boolean; verificacion: string;
}
interface VecU{
    data: Usuario[];
}
function Verf({data}: VecU){
    const [index,setIndex]=useState(-1)
    const printE=(i: number)=>{
        setIndex(i)
    }
    return (
        <ul 
            className="list-group"
            style={{
                width: "350px"
            }}
        >
          {data.map((usuario,i) => {
            // Asignación de "verificado" o "no verificado"
            usuario.verificacion = usuario.autenticacion ? "verificado" : "no verificado";
            console.log(usuario)
            // Solo mostrar el nombre del usuario en el <li>
            return (
              <li 
                    key={usuario.id}
                    onClick={()=>printE(i)}
                    className={`list-group-item ${index === i ? "active" : ""}`}
              >
                {usuario.nombre}
              </li>
              
            );
          })}
        </ul>
      );
}

export default Verf*/
import { useState } from "react";

interface Usuario {
  id: number;
  nombre: string;
  autenticacion: boolean;
  verificacion: string;
}

interface VecU {
  data: Usuario[];
}

function Verf({ data }: VecU) {
  const [index, setIndex] = useState(-1);  // Estado para almacenar el índice del usuario seleccionado
  const [selectedUser, setSelectedUser] = useState<Usuario | null>(null);  // Estado para almacenar el usuario seleccionado

  const printE = (i: number) => {
    setIndex(i);
    setSelectedUser(data[i]);  // Almacena el usuario seleccionado
  };

  return (
    <div style={{ 
            display: "flex",
            alignItems: "flex-start" }}
    >  {/* Flex container para alinear los elementos */}
      {/* Lista de usuarios */}
      <ul
        className="list-group"
        style={{
          width: "200px",
          marginRight: "20px",  // Espacio entre la lista y el mensaje
        }}
      >
        {data.map((usuario, i) => {
          // Asignación de "verificado" o "no verificado"
          usuario.verificacion = usuario.autenticacion ? "verificado" : "no verificado";
          
          // Renderizado del nombre del usuario en el <li>
          return (
            <li
              key={usuario.id}
              onClick={() => printE(i)}  // Al hacer clic, cambia el índice seleccionado y el usuario
              className={`list-group-item ${index === i ? "active" : ""}`}
            >
              {usuario.nombre}
            </li>
          );
        })}
      </ul>

      {/* Mostrar el mensaje al lado de la lista */}
      <div>
        {selectedUser && (
          <div>
            <strong>{selectedUser.nombre}</strong> está{" "}
            <span>{selectedUser.verificacion}</span>.
          </div>
        )}
      </div>
    </div>
  );
}

export default Verf;

