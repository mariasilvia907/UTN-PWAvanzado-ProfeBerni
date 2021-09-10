const express = require("express")
const fs = require("fs")

const app = express()
const port = 8080

//lectura texto
let data = fs.readFileSync('./Productos.txt', 'utf-8')
let productos = JSON.parse(data)
let productosTotal = JSON.parse(data)

// 1- listado de nombres de producto
let listadoNombres = []
let arrayProductos = () => {
    productosTotal.forEach(e => {
        listadoNombres.push(e.title)
    });
    productosTotal = []
    return listadoNombres
}

// 2- Random de producto elegido
let numeroRandom = () => {
    let numero = Math.floor(Math.random() * (productos.length))
    return numero
};

// 3- Contador de visitas

let contador1 = 0
let contador2 = 0


// Ruta items
app.get('/items', (req, res) => {
    contador1++
    let respuesta = `
        <html>
        <head>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Tarea - UTN</title>
        <style>
        body{
            text-align: center;
            }
            h1, h3, p{
                padding-top: 3%;
            }
        </style>
        </head>
            <body>
                <h1>Tarea EXPRESS</h1>
                <h3>Consigna 1</h3>
                <p>
                {items: ${arrayProductos()}, cantidad: ${productos.length}}
                </p>
            </body>
        </html>
        `
    res.send(respuesta)
})

// Ruta item Random
app.get('/item-random', (req, res) => {
    contador2++
    let respuesta = `
        <html>
        <head>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Tarea - UTN</title>
        <style>
        body{
            text-align: center;
            }
            h1, h3, p{
                padding-top: 3%;
            }
        </style>
            <body>
                <h1>Tarea EXPRESS</h1>
                <h3>Consigna 2</h3>
                <p>
                {item: ${JSON.stringify(productos[numeroRandom()])}}
                </p>
            </body>
        </html>
        `
    res.send(respuesta)
})

// Ruta visitas
app.get('/visitas', (req, res) => {
    let respuesta = `
        <html>
        <head>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Tarea - UTN</title>
        <style>
        body{
            text-align: center;
            }
            h1, h3, p{
                padding-top: 3%;
            }
        </style>
            <body>
                <h1>Tarea EXPRESS</h1>
                <h3>Consigna 3</h3>
                <p>
                {
                    visitas:
                    {item1: ${contador1}}
                    {item2: ${contador2}}
                }
                </p>
            </body>
        </html>
        `
    res.send(respuesta)
})

// Servidor
app.listen(port, () => console.log(`server at http://localhost:${port}`))