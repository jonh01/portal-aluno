import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8E9B0",
  },
  header: {
    marginTop: 80,
    marginBottom: 20,
    alignItems: "center",
  },
  scrollView:{
    margin:0,
    padding:0,
  },
  logo: {
    width: 150,
    height: 150,
  },
  article: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
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
  botao: {
    marginTop: 50,
    width: 150,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#813035",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  botaoTexto: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#F8E9B0",
  },
  textoSimples: {
    textAlign: "justify",
    width: 300,
    marginBottom: 10,
  },
  textoError: {
    alignSelf: "flex-start",
    marginBottom: 0,
    padding: 0,
  },
});
