import React from 'react';
import { useState } from "react";
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { CriarDisciplina } from '../../services/disciplina-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Disciplina } from '../../model/Disciplina';


const disciplina = () => {
  const [disNome, SetDescNome] = useState("");
  const value = '';
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
 
  const dis:Disciplina = {nome:disNome, usuario_id:parseFloat(value)};

  function Cadastrar (){
    CriarDisciplina(dis).then(() => console.log("Disciplina Criada!")).catch(error => (console.log("Deu ruim!")));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.article}>
        <Text style={styles.texto1}>Nome da Disciplina</Text>
        <TextInput 
        style={styles.caixaTexto}
        onChangeText={SetDescNome}
        value={disNome}
        ></TextInput>
        <TouchableOpacity style={styles.botao} onPress={Cadastrar}>
            <Text style={styles.botaoTexto}>Criar Turma</Text>
        </TouchableOpacity>
      </View >
      <View style={styles.container}>

      </View>


      </View>
    </SafeAreaView>
  );
}

export default disciplina;