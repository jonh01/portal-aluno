import db from "../database/databse";
import { Conceito } from "../model/Conceito";
import { ConceitoDTO } from "../model/ConceitoDTO";

const table = "conceito"

export const criarConceito = (param: Conceito) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${table}(aluno_id, disciplina_id, av1, av2) VALUES (?, ?, ?, ?)`,
        [param.aluno_id, param.disciplina_id, param.av1, param.av2],
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

export const buscarConceito = (aluno_id:number, disciplina_id:number) => {
  return new Promise<Conceito>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${table} WHERE aluno_id = ? AND disciplina_id = ?`,
        [aluno_id, disciplina_id],
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
              aluno_id: row.aluno_id,
              disciplina_id: row.disciplina_id,
              av1: row.av1,
              av2: row.av2,
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
        `UPDATE ${table} SET av1 = ?, av2 = ? WHERE aluno_id = ? AND disciplina_id = ?`,
        [param.av1, param.av2, param.aluno_id, param.disciplina_id],
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

export const deletarConceito = (aluno_id:number, disciplina_id:number) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM ${table} WHERE aluno_id = ? AND disciplina_id = ?`,
        [aluno_id, disciplina_id],
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