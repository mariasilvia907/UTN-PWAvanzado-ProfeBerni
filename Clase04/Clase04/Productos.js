
import fs from 'fs';

export class Productos {
    constructor(file_name) {
        this.file_name = file_name;
    }

    // Funcion que lee el archivo
    leer = async () => {
        try {
            const data = await fs.promises.readFile(`./${this.file_name}`, 'utf-8');
            const data_json = JSON.parse(data);
            if (data_json.length === 0)
                return { error: 'No hay productos cargados' }
            return (data_json);
        } catch (error) {
            return { error: 'No se pudo leer el archivo' };
        }
    }


    // Funcion que busca un producto por id
    buscarPorId = async (id) => {
        try {
            const data = await fs.promises.readFile(`./${this.file_name}`, 'utf-8');
            const productos = JSON.parse(data).filter(producto => producto.id === Number(id));
            if (productos.length === 0)
                return { error: 'Producto no encontrado' };
            return productos[0];
        } catch (error) {
            return { error: 'No se pudo leer el archivo' };
        }
    }


    

    // Funcion que guarda un producto en el archivo
    guardar = async (title, price, thumbnail) => {
        try {
            const raw_data = await fs.promises.readFile(`./${this.file_name}`, 'utf-8');
            const data = JSON.parse(raw_data);
            const new_item = {
                title, price, thumbnail, id: data[data.length - 1].id + 1
            };
            data.push(new_item);
            await fs.promises.writeFile(`./${this.file_name}`, JSON.stringify(data));
            return new_item;
        } catch (error) {
            return {
                msg: 'No se pudo guardar el producto', error
            };
        }
    }

    // Funcion que modifica un producto
    modificar = async (id, title, price, thumbnail) => {
        // id, title, price enviados por Postman
        let foundFlag = false;
        try {
            let items = await this.leer();
            if (items.error)
                return items;

            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    items[i].title = title;
                    items[i].price = price;
                    items[i].thumbnail = thumbnail;
                    foundFlag = true;
                }
            }
            if (!foundFlag)
                return { error: "Producto no encontrado" }

            await fs.promises.writeFile(`./${this.file_name}`, JSON.stringify(items));
            return { id, title, price, thumbnail };
        } catch (error) {
            return { error: "No se pudo modificar el item" }
        }
    }

    // Funcion que elimina un producto
    eliminarProducto = async (id) => {
        try {
            const data = await fs.promises.readFile(`./${this.file_name}`, 'utf-8');
            const productoEncontrado = JSON.parse(data).filter(producto => producto.id === Number(id));
            if (productoEncontrado.length === 0)
                return { error: 'Producto no encontrado' };

            const nuevaData = JSON.parse(data).filter(producto => producto.id !== Number(id));
            await fs.promises.writeFile(`./${this.file_name}`, JSON.stringify(nuevaData));
            return productoEncontrado;
        } catch (error) {
            return { error: 'No se pudo leer el archivo' };
        }
    }

    // Funcion que borra el archivo
    borrar = async () => {
        await fs.promises.unlink(`./${this.file_name}`);
    }

    
}
