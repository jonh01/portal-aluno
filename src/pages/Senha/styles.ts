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
    marginTop: 80,
    marginBottom: 20,
    alignItems: "center",
  },
  scrollView:{
    margin:0,
  },
  logo: {
    width: 150,
    height: 150,
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
  botao: {
    marginTop: 70,
    width: 150,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#813035",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
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
});
