import React, { useState, useEffect } from "react";
import { getCharacters, Object } from "../services/Services";

import CardListComponent from "../components/CardListComponent";

const CharactersPage = () => {
  // Definimos variable reactiva para guardar los personajes (sera de tipo Character)
  const [characters, setCharacters] = useState<Object[]>([]);
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
    <CardListComponent data={characters}/>
  );
};

export default CharactersPage;
