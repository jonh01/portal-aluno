import db from "../database/databse";
import { Disciplina } from "../model/Disciplina";
import { Usuario } from "../model/Usuario";

const table = "disciplina"

export const CriarDisciplina = (param: Disciplina) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${table}(nome, usuario_id) VALUES (?, ?)`,
        [param.nome, param.usuario_id],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            resolve(insertId);
          } else {
            reject(new Error('Falha ao criar usuário'));
          }
        },
        (_, error) => {
          reject(error);
          return true;
        }
      );
    });
  });
};