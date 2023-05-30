import db from "../database/databse";
import { Conceito } from "../model/conceito";

const table = "conceito"

export const criarConceito = (param: Conceito) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${table}(nome, email, av1, av2, disciplina_id) VALUES (?, ?, ?, ?, ?)`,
        [param.nome, param.email, param.av1, param.av2, param.disciplina_id],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            resolve(insertId);
          } else {
            reject(new Error('Falha ao criar conceito'));
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

export const buscarConceito = (id:number) => {
  return new Promise<Conceito>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${table} WHERE id = ?`,
        [id],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0));
          } else {
            reject(new Error('Conceito não encontrado'));
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

export const buscarConceitosDisci = (disciplina_id:number) => {
    return new Promise<Conceito[]>((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `SELECT * FROM ${table} WHERE disciplina_id = ?`,
          [disciplina_id],
          (_, { rows }) => {
            const conseitos:Conceito[] = rows._array.map((row) => ({
              id: row.id,
              nome: row.nome, 
              email: row.email,
              av1: row.av1,
              av2: row.av2,
              disciplina_id: row.disciplina_id,
            }));
            resolve(conseitos);
          },
          (_, error) => {
            reject(error);
            return true;
          }
        );
      });
    });
  };

export const atualizarConceito = (param: Conceito) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE ${table} SET email = ?, av1 = ?, av2 = ? WHERE id = ?`,
        [param.email, param.av1, param.av2, param.id!],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve();
          } else {
            reject(new Error('Falha ao atualizar conceito'));
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

export const deletarConceito = (id:number) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM ${table} WHERE id = ?`,
        [id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve();
          } else {
            reject(new Error('Falha ao excluir conceito'));
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