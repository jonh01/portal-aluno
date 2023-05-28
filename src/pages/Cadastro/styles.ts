import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F8E9B0",
    alignItems: "center",
    padding: 8,
  },
  header: {
    marginTop:40,
  },
  logo: {
    width: 100,
    height: 100,
  },
  article: {
    justifyContent: "center",
    alignItems: "center",
  },

  //Texto acima dos input text
  texto1: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  caixaTexto: {
    backgroundColor: "#813035",
    borderRadius: 5,
    width: 300,
    height: 50,
    padding: 10,
    fontWeight: "bold",
    color: "#F8E9B0",
  },
  botao: {
    marginTop: 50,
    width: 150,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#813035",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTexto: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#F8E9B0",
  },
});
