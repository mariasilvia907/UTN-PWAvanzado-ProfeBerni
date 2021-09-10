
/* Creación de una clase */

import fs from 'fs';

export default class Productos {

    constructor(file_name) {
        this.file_name = file_name;    
    }

    /* Función que lee el archivo */

    leer = async () => {
        try {
            const data = await fs.promises.readFile(`./${this.file_name}`, 'utf8');
            const data_json = JSON.parse(data);
            if(data_json.length === 0) 
                return { error: 'No hay productos en el archivo'}
            return data_json;
        } catch (error) {
            return { error: 'No se pudo leer el archivo'}
        }
    }

    
}