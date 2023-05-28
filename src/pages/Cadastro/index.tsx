import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { Usuario } from "../../model/Usuario";
import { criarUsuario } from "../../services/usuario-service";



const Cadastro = ({ navigation }: any) => {
  const [usuNome, SetUsuNome] = useState("");
  const [usuEmail, SetUsuEmail] = useState("");
  const [usuSenha, SetUsuSenha] = useState("");
  const [usuTel, SetUsuTel] = useState("");
  const [usuDate, SetUsuDate] = useState("");
  
  const usu:Usuario = {nome:usuNome, email:usuEmail, senha:usuSenha, telefone:usuTel, dt_nasc:usuDate};
  
  
  function Cadastrar (){
    criarUsuario(usu).then(() => console.log("Usuário Cadastrado")).catch(error => (console.log("Deu ruim!")));
   
  };
 
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.article}>
        <Text style={styles.texto1}>Nome:</Text>
        <TextInput 
        style={styles.caixaTexto}          
        onChangeText={SetUsuNome}
        value={usuNome} 
        />

        <Text style={styles.texto1}>Data de Nascimento</Text>
        <TextInput 
          style={styles.caixaTexto}             
          onChangeText={SetUsuDate}
          value={usuDate} />

        <Text style={styles.texto1}>Telefone</Text>
        <TextInput style={styles.caixaTexto} 
        keyboardType="numeric"            
        onChangeText={SetUsuTel}
        value={usuTel}/>

        <Text style={styles.texto1} >E-mail</Text>
        <TextInput style={styles.caixaTexto}              
              onChangeText={SetUsuEmail}
              value={usuEmail} 
        />

        <Text style={styles.texto1}>Senha</Text>
        <TextInput 
          style={styles.caixaTexto} 
          onChangeText={SetUsuSenha}
          value={usuSenha}
        />

        <TouchableOpacity style={styles.botao} onPress={Cadastrar}>
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cadastro;
