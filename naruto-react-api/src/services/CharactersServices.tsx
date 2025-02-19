// Definimos el tipo de objeto que se recibira con la API
export interface Character {
    id: number;
    name: string;
    images: string[];
  }

  /* 
  
  ASYNC: Se añade SOLO para poder usar AWAIT dentro de la funcion
  AWAIT: Hace que la funcion espere a que acabe un pase para pasar al siguiente paso
  
  */

// Exportamos la funcion para usarla en el componente 
// ASYNC: La función espera RESPUESTA antes de continuar
// PROMISE: La funcion devuelve una promesa que devuelve un objeto de tipo Character (el definido en la interfaz)
export const getCharacters = async (): Promise<{ characters: Character[] }> => {
    // Hacemos SOLICITUD HTTP a la API, esperamos a que esta responda con el AWAIT y guardamos la info en la variable
    const response = await fetch("https://narutodb.xyz/api/character");
    // Convertimos la info en JSON
    const data = await response.json();
    // Devolvemos la info
    return data;
};
  
  

