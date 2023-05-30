import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical:30,
  },
  containerFlatHeader: {
    margin: 5,
    padding: 5,
    width: 350,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#F8E9B0',
    alignItems:'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  scrollView:{
    margin:0,
    padding:0,
  },
  form: {
    justifyContent:'center'
  },
  textFlatHeader: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#813035",
  },
  textListEmpy: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 50,
    alignSelf: "center",
  },
  texto: {
    marginLeft: 60,
    marginBottom: 5,
  },
  caixaTexto: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    width: 250,
    height: 25,
    padding: 1,
    alignSelf: 'center',
    fontSize: 14,
  },
  button: {
    marginVertical: 20,
    alignSelf:'center',
    width: 200,
  },
  buttonExit: {
    alignSelf: 'flex-end',
  },
  texto1: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
});