import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Routes } from "../../routers/routes";
import { useNavigation } from "@react-navigation/native";



const Personagem = () => {
  const navigation = useNavigation();
  
  const handleLogout = () => {
    navigation.reset({
      index:0,
      routes: [{name : "login"}], 
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={ handleLogout} >
        <Text style={styles.botaoTexto}> Logout </Text>
      </TouchableOpacity>

    </View>
  );
};

export default Personagem;
