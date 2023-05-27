import db from "../database/databse";
import { Usuario } from "../model/Usuario";


const table = "usuario"

export const criarUsuario = (param: Usuario) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${table}(nome, email, senha, telefone, tipo, dt_nasc) VALUES (?, ?, ?, ?, ?, ?)`,
        [param.nome, param.email, param.senha, param.telefone, param.tipo, param.dt_nasc.toString()],
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

export const buscarUsuario = (email: string) => {
  return new Promise<Usuario>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${table} WHERE email = ?`,
        [email],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0));
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

export const autenticarUsuario = (email: string, senha:string) => {
  return new Promise<boolean>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${table} WHERE email = ?`,
        [email],
        (_, { rows }) => {
          if (rows.length > 0 && senha == rows.item(0).senha) {
              resolve(true);
          } else {
            reject(new Error('Erro ao autenticar'));
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

export const atualizarUsuario = (param: Usuario) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE ${table} SET nome = ?, email = ?, telefone = ?, dt_nasc = ? WHERE id = ?`,
        [param.nome, param.email, param.telefone, param.dt_nasc.toString(), param.id!],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve();
          } else {
            reject(new Error('Falha ao atualizar usuário'));
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

export const atualizarSenha = (email: string, senha: string) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE ${table} SET senha = ? WHERE email = ?`,
        [senha, email],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve();
          } else {
            reject(new Error('Falha ao trocar senha'));
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

export const deletarUsuario = (id: number) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM ${table} WHERE id = ?`,
        [id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve();
          } else {
            reject(new Error('Falha ao excluir usuário'));
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