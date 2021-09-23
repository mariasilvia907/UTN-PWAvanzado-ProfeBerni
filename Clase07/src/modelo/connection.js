
const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/global");

exports.getConnection = async () => {
    try {
    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        //useFindAndModify: false,
        useUnifiedTopology: true,
    });
        return console.log("Conexion exitosa");
    } catch (error) {
        console.log(error);
    }
};






