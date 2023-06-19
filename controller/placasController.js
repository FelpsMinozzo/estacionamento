const express = require('express');

const categoriaModel = require('../model/carrosModel');
const carros = require('../model/placasModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE CATEGORIA(POST)*/
router.post('/carro/inserir', (req,res)=>{

    let placa_carro = req.body.placa_carro;
    let marca_carro = req.body.marca_carro;
    let modelo_carro = req.body.modelo_carro;
    let ano_carro = req.body.ano_carro;
    
    categoriaModel.create(
        {placa_carro,
        marca_carro,
        modelo_carro,
        ano_carro}
    ).then(
        ()=>{
           return res.status(201).json({
            errorStatus:false,
            mensageStatus:'CARRO INSERIDO COM SUCESSO'
           });
        }   
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/carros/selecionar', (req,res)=>{
    
    placaModel.findAll()
    .then(
        (carros)=>{
            //console.log(categorias);
            res.json(carros);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/carros/alterar', (req,res)=>{

    let id = req.body.id;
    let placa_carro = req.body.placa_carro;
    let marca_carro = req.body.marca_carro;
    let modelo_carro = req.body.modelo_carro;
    let ano_carro = req.body.ano_carro;

    placaModel.update(
        {placa_carro,
        marca_carro,
        modelo_carro,
        ano_carro},
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'CARRO ALTERADO COM SUCESSO'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/carros/excluir/:id', (req,res)=>{
    
    let id = req.params.id;
    console.log('ID: ' + id);

    placaModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'CARRO EXCLUIDO COM SUCESSO'
               });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;