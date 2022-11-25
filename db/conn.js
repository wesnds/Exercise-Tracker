const mongoose = require('mongoose');

const URI = process.env.URI;

async function main(){
    await mongoose.connect(URI,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
    console.log('Banco de dados conectado');
}

main().catch(err => console.log(err));

module.exports = mongoose;