import React, { useState, useEffect } from "react";
import { getCharacters, Character } from "../services/CharactersServices";

const CharactersPage = () => {
  // Definimos variable reactiva para guardar los personajes (sera de tipo Character)
  const [characters, setCharacters] = useState<Character[]>([]);
  // Se ejecuta la peticion cuando el componente esta montado y una sola vez gracias a los []
  useEffect(() => {
    // Funcion async para poder esperar la respuesta de la funcion del service
    const fetchData = async () => {
      const data = await getCharacters();
      // Actualizamos la variable reactiva con la nueva data
      setCharacters(data.characters);
    };
    // Ejecutamos la funcion para iniciar la recepción de la informacion
    fetchData();
  
  }, []);

  return (
    <div>
      <h1>Personajes</h1>
      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            <h3>{char.name}</h3>
            <img src={char.images[0]} alt={char.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersPage;
