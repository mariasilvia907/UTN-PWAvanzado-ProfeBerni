
const {PORT} = require('./config/global');


const {getConnection} = require('./modelo/connection');
const app = require('./server');

getConnection().then(() => {
    //console.log(message);
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}).catch(err => {
    console.log(err);
});

