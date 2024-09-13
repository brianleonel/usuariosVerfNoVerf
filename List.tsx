
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

