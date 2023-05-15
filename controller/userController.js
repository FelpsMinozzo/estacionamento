const express = require('express');

const userModel = require('../model/UserModel');

const router = express.Router();

router.post('/usuario/inserir', (req,res)=>{

    let name_User = req.body.name_User;
    
    userModel.create(
        {name_User}
    ).then(
        ()=>{
           return res.status(201).json({
            errorStatus:false,
            mensageStatus:'USUARIO INSERIDO COM SUCESSO'
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

router.get('/usuario/selecionar', (req,res)=>{
    
    userModel.findAll()
    .then(
        (name_User)=>{
            res.json(name_User);
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

router.put('/usuario/alterar', (req,res)=>{

    let id = req.body.id;
    let name_User = req.body.name_User;

    userModel.update(
        {name_User},
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'USUARIO ALTERADO COM SUCESSO'
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

router.delete('/usuario/excluir/:id', (req,res)=>{
    
    let id = req.params.id;
    console.log('ID: ' + id);

    userModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'USUARIO EXCLUIDO COM SUCESSO'
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