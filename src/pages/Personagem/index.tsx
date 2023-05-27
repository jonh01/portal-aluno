import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const Personagem = () => {

  const handleLogout = () => {

  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={handleLogout}>
        <Text style={styles.botaoTexto}> Logout </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Personagem;
