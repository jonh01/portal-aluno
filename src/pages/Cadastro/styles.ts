import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8E9B0",
  },
  scrollView:{
    margin:0,
  },
  header: {
    paddingTop:70,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 90,
  },
  article: {
    justifyContent: "center",
  },

  //Texto acima dos input text
  texto1: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 1,
    marginLeft: 50,
  },
  textoError: {
    marginLeft: 40,
    marginBottom: 0,
    padding: 0,
  },
  caixaTexto: {
    backgroundColor: "#813035",
    alignSelf: 'center',
    borderRadius: 5,
    width: 300,
    height: 50,
    padding: 10,
    fontWeight: "bold",
    color: "#F8E9B0",
  },
  botao: {
    marginTop: 5,
    marginBottom: 20,
    width: 150,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#813035",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
  },
  botaoTexto: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#F8E9B0",
  },
});
