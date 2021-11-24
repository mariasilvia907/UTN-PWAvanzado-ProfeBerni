
const mongoose = require('mongoose');


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connection successful');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de conectarme a la DB');
    }
}


module.exports = {
    dbConnection
}
