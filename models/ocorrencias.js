const db = require("../db");

exports.all = () => {
    return new Promise(function(resolve,reject){
        db.connection.query("SELECT * FROM ocorrencias", (error,rows) => {
            if (error) reject(error)
            else resolve(rows)
        });
    })
}

exports.find = (id) => {
    return new Promise(function(resolve,reject){
        db.connection.query(`SELECT * FROM ocorrencia where id_ssm = ${id}`, (error,rows) => {
            if (error) reject(error)
            else resolve(rows)
        });
    })
}

exports.create = (OS) => {
    return new Promise(function(resolve,reject){
        db.connection.query(`
            INSERT INTO ordem_servico
            (ssm, nome, data, maquina, prioridade, ocorrencia,txt,finalizado)
            values (${OS.ssm}, "${OS.nome}", "${OS.data}", ${OS.maquina}, "${OS.prioridade}",
            "${OS.ocorrencia}", "${OS.txt}", ${false})`, (error,rows) => {
                if (error) reject(error)
                else resolve(rows)
            }
        )
    })
}