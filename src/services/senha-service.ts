import db from "../database/databse";
import { Usuario } from "../model/Usuario";

const table = "Usuario"

export const TrocarSenha = (email: string, dt_nasc: string) => {
    return new Promise<Usuario>((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `SELECT * FROM ${table} WHERE email = ? AND dt_nasc = ?`,
          [email, dt_nasc],
          (_, { rows }) => {
            if (rows.length > 0) {
              resolve(rows.item(0));
              `UPDATE ${table} SET senha = ? WHERE id = ?` 
              [123], [email]
              console.log("Senha alterada!");
            } else {
              reject(new Error('Usuário não encontrado'));
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