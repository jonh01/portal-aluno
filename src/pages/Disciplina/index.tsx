import React from 'react';

import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

const Disciplina = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Hello, Main!</Text>
    </SafeAreaView>
  );
}

export default Disciplina;