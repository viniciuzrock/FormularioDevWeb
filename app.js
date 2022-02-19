// MÓDULOS EXPORTADOS
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Form = require("./modelos/Form");
const moment = require("moment");
const { sequelize } = require("./modelos/db");
//PARÂMETROS DAS TELAS HTML E DA FORMATAÇÃO DA DATA
app.engine('handlebars', handlebars.engine({
    defaultLayout:'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        },
        formatDate2: (date) => {
            return moment(date).format('YYYY-MM-DD')
        },
        formatDate3: (date) => {
            return moment(date).format('llll')
        }
    }
}))
//CONVERSÃO DOS DADOS DO CLIENTE ENVIADOS PELO FORM PARA JSON
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//ROTAS
//LISTA DE FORMULARIOS
app.get('/lista-formulario',function(req,res){
    Form.findAll().then(function(form_devs){
        res.render('lista-formulario',{form_devs: form_devs.map(form_devs => form_devs.toJSON())
        });
    })
});
// TELA DO FORMULARIO
app.get('/formulario',function(req,res){
    res.render('formulario');
});
//ENVIO DOS DADOS PARA O BANCO
app.post('/envia-formulario', function(req,res){
    Form.create({
        nome: req.body.nome,
        email: req.body.email,
        mensagem: req.body.mensagem,
    }).then(function(){
        res.redirect('/lista-formulario')
    }).catch(function(erro){
        res.send("Erro no envio do formulário: " +erro)
    })
})
app.listen(8080); //CONFIGURADO NA PORTAL 8080. EX: LOCALHOST:8080/