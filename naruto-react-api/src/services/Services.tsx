// Definimos el tipo de objeto que se recibira con la API
export interface Object {
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
export const getCharacters = async (): Promise<{ characters: Object[] }> => {
    // Hacemos SOLICITUD HTTP a la API, esperamos a que esta responda con el AWAIT y guardamos la info en la variable
    const response = await fetch("https://narutodb.xyz/api/character");
    // Convertimos la info en JSON
    const data = await response.json();
    // Devolvemos la info
    return data;
};

export const getClans = async (): Promise<{ clans: Object[] }> => {
    try {
        // Llamamos a la API
        const response = await fetch("https://narutodb.xyz/api/clan");
        // Verificamos si la respuesta es exitosa (status 200 - 299)
        if(!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }   
        // Convertimos la respuesta a JSON
        const data = await response.json();
        // Retornamos los datos obtenidos
        return data;
    } catch(error) {
        // Capturamos cualquier error que ocurra durante la solicitud
        console.log("Error fetching clans: ", error);
        // Relanzamos el error para que pueda ser manejado en donde se llame la funcion
        throw error;
    }
}

export const getVillages = async () : Promise<{ villages: Object[] }> => {
    const response = await fetch("https://narutodb.xyz/api/village");
    const data = await response.json();
    return data;
}

export const getKekkeiGenkai = async () : Promise<{ kekkeiGenkai: Object[] }> => {
    const response = await fetch("https://narutodb.xyz/api/kekkei-genkai");
    const data = await response.json();
    return data;
}