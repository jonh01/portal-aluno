import db from "../database/databse";
import { Aluno } from "../model/Aluno";

const table = "aluno"

export const criarAluno = (param: Aluno) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${table}(cpf, nome, email) VALUES (?, ?, ?)`,
        [param.cpf, param.nome, param.email],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            resolve(insertId);
          } else {
            reject(new Error('Falha ao criar aluno'));
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

export const buscarAluno = (email: string) => {
  return new Promise<Aluno>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${table} WHERE email = ?`,
        [email],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0));
          } else {
            reject(new Error('Aluno não encontrado'));
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

export const buscarTodosAlunos = () => {
    return new Promise<Aluno[]>((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `SELECT * FROM ${table}`,
          [],
          (_, { rows }) => {
            const al:Aluno[] = rows._array.map((row) => ({
              id: row.id,
              cpf: row.cpf,
              nome: row.nome,
              email: row.email,
            }));
            resolve(al);
          },
          (_, error) => {
            reject(error);
            return true;
          }
        );
      });
    });
  };

export const atualizarAluno = (param: Aluno) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE ${table} SET cpf = ?, nome = ?, email = ? WHERE id = ?`,
        [param.cpf, param.nome, param.email, param.id!],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve();
          } else {
            reject(new Error('Falha ao atualizar aluno'));
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

export const deletarAluno = (id: number) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM ${table} WHERE id = ?`,
        [id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve();
          } else {
            reject(new Error('Falha ao excluir aluno'));
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