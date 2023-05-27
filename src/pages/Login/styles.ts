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
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
  },
  textoLogo: {
    fontSize: 80,
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
    marginTop: 40,
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
  registroRecuperar: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  botao: {
    marginTop: 100,
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
