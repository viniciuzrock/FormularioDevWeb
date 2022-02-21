//CONEXÃO COM O BANCO DE DADOS
const Sequelize = require ('sequelize');

const sequelize = new Sequelize('formularios','vinicius','1234',{
    host:'localhost',
    dialect: 'mysql'
})

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
}

//TESTE DE CONEXÃO COM O BANCO DE DADOS
sequelize.authenticate().then(function(){
    console.log('Teste de conexão com o banco de dados: OK')
}).catch(function(err){
    console.log('Erro de conexão com o banco de dados:'+err)
});




