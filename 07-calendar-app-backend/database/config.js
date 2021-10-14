const mongoose = require('mongoose');


const dbConnection = async() => {

    try{
        await mongoose.connect(process.env.DB_CONNECTION);

        console.log('DB Online');

    }catch(error){
        
        throw new Error('Error a la hora de inicializar bd');
        
    }
}



module.exports = {
    dbConnection
}