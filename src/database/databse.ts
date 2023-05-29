import * as SQLite from "expo-sqlite";
import { Usuario } from "../model/Usuario";

const databaseName = "database.db";
const databaseVersion = "1.0";
const databaseDisplayName = "Database Project";

const db = SQLite.openDatabase(
  databaseName,
  databaseVersion,
  databaseDisplayName
);

export const initDatabase = () => {
  // vetor pra excluir tabelas
let drops: string[] = [
    `DROP TABLE IF EXISTS conceito;`,
    `DROP TABLE IF EXISTS disciplina;`,
    `DROP TABLE IF EXISTS professor;`,
    `DROP TABLE IF EXISTS aluno;`,
    `DROP TABLE IF EXISTS usuario;`,
  ];


  let create: string[] = [
    `CREATE TABLE IF NOT EXISTS usuario(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                email TEXT UNIQUE COLLATE NOCASE,
                senha TEXT,
                telefone TEXT,
                dt_nasc TEXT
            );`,
    `CREATE TABLE IF NOT EXISTS aluno(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                cpf INTEGER UNIQUE,
                nome TEXT,
                email TEXT UNIQUE COLLATE NOCASE
            );`,
    `CREATE TABLE IF NOT EXISTS disciplina(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                nome_materia TEXT,
                usuario_id INTEGER,
                FOREIGN KEY (usuario_id) REFERENCES usuario (id)
                    ON DELETE CASCADE 
                    ON UPDATE NO ACTION
            );`,
    `CREATE TABLE IF NOT EXISTS conceito(
                aluno_id INTEGER,
                disciplina_id INTEGER,
                av1 REAL ,
                av2 REAL ,
                PRIMARY KEY (aluno_id, disciplina_id),
                FOREIGN KEY (aluno_id) REFERENCES aluno (id),
                FOREIGN KEY (disciplina_id) REFERENCES disciplina (id)
                    ON DELETE CASCADE 
                    ON UPDATE NO ACTION
            );`,
  ];

  const insertUsu: Usuario[] = [
    {
      nome: "admin",
      email: "admin",
      senha: "admin123",
      telefone: "(21)99999-9999",
      dt_nasc: new Date(),
    },
  ];

  db.transaction((tx) => {
    console.log("Iniciando BD");

    // exclua as tabelas
    for (const linha of drops) {
      tx.executeSql(
        linha,
        [],
        () => {
          console.log(
            "Tabela dropada com sucesso: " +
              linha.substring(linha.indexOf("EXISTS") + 7, linha.length - 1)
          );
        },
        (_, error) => {
          console.log(
            `Erro ao dropar tabela ${linha.substring(
              linha.indexOf("EXISTS") + 7,
              linha.length - 1
            )}: ${error}`
          );
          return false;
        }
      );
    }

    // cria as tabelas
    for (const linha of create) {
      tx.executeSql(
        linha,
        [],
        () => {
          console.log(
            `Tabela ${linha.substring(
              linha.indexOf("EXISTS") + 7,
              linha.indexOf("(")
            )} criada com sucesso`
          );
        },
        (_, error) => {
          console.log(
            `Erro ao criar tabela ${linha.substring(
              linha.indexOf("EXISTS") + 7,
              linha.indexOf("(")
            )}: ${error}`
          );
          return false;
        }
      );
    }
    // insere os usuarios pre-programados
    for (const usu of insertUsu) {
      tx.executeSql(
        `INSERT INTO usuario(nome, email, senha, telefone, dt_nasc) values(?, ?, ?, ?, ?);`,
        [usu.nome, usu.email, usu.senha, usu.telefone, usu.dt_nasc.toString()],
        () => {
          console.log("Inserindo Usuario: " + usu.nome);
        },
        (_, error) => {
          console.log(`Erro ao inserir usuario ${usu.nome}: `, error);
          return false;
        }
      );
    }

  });
};

export default db;
