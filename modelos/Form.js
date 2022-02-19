const db = require('./db')

const Formulario = db.sequelize.define('form_devs',{
    //Atributos
    nome:{
        type: db.Sequelize.STRING,
        
    },
    email:{
        type: db.Sequelize.STRING,   
    },
    mensagem:{
        type: db.Sequelize.STRING,
    },
    // data_1:{
    //     type: db.Sequelize.DATE,
    // },
    // data_2:{
    //     type: db.Sequelize.DATE,
    // },
    // data_3:{
    //     type: db.Sequelize.DATE
    // }
});

//CRIAÇÃO DA TABELA form_devs
//Formulario.sync({force: true});

// Formulario.create({
//     nome:"teste",
//     email:"teste@gmail.com",
//     mensagem:"mensagem1"
// });
module.exports = Formulario