import React, { useState, useEffect } from "react";
import { getCharacters, Object } from "../services/Services";

import CardListComponent from "../components/CardListComponent";

const CharactersPage = () => {
  // Definimos variable reactiva para guardar los personajes (sera de tipo Character)
  const [characters, setCharacters] = useState<Object[]>([]);
  const [loading, setLoading] = useState(true);
  // Se ejecuta la peticion cuando el componente esta montado y una sola vez gracias a los []
  useEffect(() => {
    // Funcion async para poder esperar la respuesta de la funcion del service
    const fetchData = async () => {
      setLoading(true);
      const data = await getCharacters();
      // Actualizamos la variable reactiva con la nueva data
      setCharacters(data.characters);
      setLoading(false);
    };
    // Ejecutamos la funcion para iniciar la recepción de la informacion
    fetchData();
  
  }, []);

  return (
    <div>
      {loading === true ? <p className="text-center p-[70px] font-semibold">Loading...</p> : <CardListComponent data={characters}/>}
    </div>
  );
};

export default CharactersPage;
