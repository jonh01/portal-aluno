import * as SQLite from "expo-sqlite";

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
                email TEXT UNIQUE,
                senha TEXT,
                telefone TEXT,
                dt_nasc date,
                Tipo INTEGER
            );`,
    `CREATE TABLE IF NOT EXISTS aluno(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_curso TEXT,
                usuario_id INTEGER UNIQUE,
                FOREIGN KEY (usuario_id) REFERENCES usuario (id)
                    ON DELETE CASCADE 
                    ON UPDATE NO ACTION
            );`,
    `CREATE TABLE IF NOT EXISTS professor(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                usuario_id INTEGER UNIQUE,
                FOREIGN KEY (usuario_id) REFERENCES usuario (id)
                    ON DELETE CASCADE 
                    ON UPDATE NO ACTION
            );`,
    `CREATE TABLE IF NOT EXISTS disciplina(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                nome_materia TEXT,
                professor_id INTEGER,
                FOREIGN KEY (professor_id) REFERENCES professor (id)
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

  db.transaction((tx) => {

    console.log('Iniciando BD')

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
            `Tabela ${linha.substring(linha.indexOf("EXISTS") + 7, linha.indexOf("("))} criada com sucesso`);
        },
        (_, error) => {
          console.log(
            `Erro ao criar tabela ${linha.substring(linha.indexOf("EXISTS") + 7, linha.indexOf("("))}: ${error}`);
          return false;
        }
      );
    }
  });
};

export default db;
