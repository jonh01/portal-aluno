import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { TextInput } from "react-native-paper";
interface TextViewProps {
  texto: string;
  value: string;
}
const TextView = ({ texto, value }: TextViewProps) => {
  return (
    <View style={styles.container}>
      <Text>{texto}</Text>
      <TextInput
        style={styles.input}
        value={value}
        editable={false}
        selectTextOnFocus={false}
      />
    </View>
  );
};

export default TextView;
