import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerGeral: {
    flex: 1,
    backgroundColor: "#F8E9B0",
    margin:0,
    padding:0
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F8E9B0",
    alignItems: "center",
  },
  appbar:{
    backgroundColor: "#813035",
    justifyContent: "flex-end",
  },
  scrollView:{
    margin:0,
  },
  icon:{
    backgroundColor:"#813035",
  },
  menu:{
    backgroundColor: "#813035",
  },
  card:{
    marginTop:50,
    justifyContent: "center",
    minHeight: 200,
    
  },
  textTitle: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#813035",
    fontSize: 35,
  },
  botao: {
    marginTop: 20,
    marginBottom: 10,
    width: 300,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#813035",
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTexto: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#F8E9B0",
  },
  modal: {
    padding: 35,
    justifyContent: "center",
    backgroundColor: "#F8E9B0",
    marginHorizontal: 25,
    borderRadius: 10,
  },
  modalBotao: {
    marginTop: 30,
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#813035",
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: "center",
  },
  texto1: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
    marginTop: 20,
  },
  caixaTexto: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    height: 15,
    padding: 10,
    fontWeight: "bold",
    color: "#000000",
  },
});