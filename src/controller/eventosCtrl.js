import Evento from '../models/evento.js';

export default class EventosCtrl {
    gravar(req, res) {
        if(req.method == 'POST' && req.is("aplication/json")) {
            const dados = req.body;
            const nome = dados.nome;
            const data = dados.data;
            const horario = dados.horario;
            const local = dados.local;
            const preco = dados.preco;
            const ingressosDispo = dados.ingressosDispo;
            const descricao = dados.descricao;

            if(nome && data && horario && local && preco && ingressosDispo && descricao) {
                const evento = new Evento(nome, data, horario, local, preco, ingressosDispo, descricao);
                evento.incluir().then(() => {
                    res.status(201).json({
                        "status": true,
                        "message": "Evento criado com sucesso",
                    })
                }).catch((error) => {
                    res.status(500).json({
                        "status": false,
                        "message": error.message
                    })
                })
            }
            else {
                res.status(400).json({
                    "status": false,
                    "message": "Todos os campos devem ser informados"
                })
            }
        }
        else {
            res.status(405).json({
                "status": false,
                "message": "Metodo não permitido" + error.message
            })
        }
    }
    alterar(req, res) {
        if((req.method == 'PUT' || req.method == 'PATCH') && req.is("/aplication/json")) {
            const dados = req.body;
            const nome = dados.nome;
            const data = dados.data;
            const horario = dados.horario;
            const local = dados.local;
            const preco = dados.preco;
            const ingressosDispo = dados.ingressosDispo;
            const descricao = dados.descricao;
            if(nome && data && horario && local && preco && ingressosDispo && descricao) {
                const evento = new Evento(nome, data, horario, local, preco, ingressosDispo, descricao);
                evento.alterar().then(() => {
                    res.status(200).json({
                        "status": true,
                        "message": "Evento alterado com sucesso",
                    })
                }).catch((error) => {
                    res.status(500).json({
                        "status": false,
                        "message": error.message
                    })
                })
            }
        }
        else {
            res.status(405).json({
                "status": false,
                "message": "Metodo não permitido"
            })
        }
    }   
    excluir(req, res) {
        if(req.method == 'DELETE' && req.is("/aplication/json")) {
            const dados = req.body;
            const nome = dados.nome;
            if(nome) {
                const evento = new Evento(nome);
                evento.excluir().then(() => {
                    res.status(200).json({
                        "status": true,
                        "message": "Evento excluido com sucesso",
                    })
                }).catch((error) => {
                    res.status(500).json({
                        "status": false,
                        "message": error.message
                    })
                })
            }
            else {
                res.status(400).json({
                    "status": false,
                    "message": "Informar o nome é obrigatório"
                })
            }
        }
    }
    consultar(req, res) {
        let parametroBusca = req.params.parametroBusca;
        if(!parametroBusca) {
            parametroBusca = '';
        }

        if(req.method == 'GET') {
            const evento = new Evento();
            evento.consultar(parametroBusca).then((eventos) => {
                return res.status(200).json({
                    "status": true,
                    "eventos": eventos
                })
            }).catch((error) => {
                return res.status(500).json({
                    "status": false,
                    "message": error.message
                })
            }) 
        }
        else {
            res.status(405).json({
                "status": false,
                "message": "Metodo não permitido"
            })
        }
    }
}