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
            reject(new Error('Falha ao criar disciplina'));
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

export const buscarDisciplina = (usuario_id:number, nome:string) => {
  return new Promise<Disciplina>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${table} WHERE nome = ? AND usuario_id = ?`,
        [nome, usuario_id],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0));
          } else {
            reject(new Error('Disciplina não encontrada'));
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

export const buscarDisciplinasUser = (usuario_id:number) => {
  return new Promise<Disciplina[]>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${table} WHERE usuario_id = ?`,
        [usuario_id],
        (_, { rows }) => {
          const disciplinas:Disciplina[] = rows._array.map((row) => ({
            id: row.id,
            nome: row.nome,
            usuario_id: row.usuario_id,
          }));
          resolve(disciplinas);
        },
        (_, error) => {
          reject(error);
          return true;
        }
      );
    });
  });
};


export const atualizarDisciplina = (param: Disciplina) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE ${table} SET nome = ? WHERE nome = ? AND usuario_id = ?`,
        [param.nome, param.nome, param.usuario_id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve();
          } else {
            reject(new Error('Falha ao atualizar disciplina'));
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

export const deletarDisciplina = (usuario_id:number, nome:string) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM ${table} WHERE WHERE nome = ? AND usuario_id = ?`,
        [nome, usuario_id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve();
          } else {
            reject(new Error('Falha ao excluir disciplina'));
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

