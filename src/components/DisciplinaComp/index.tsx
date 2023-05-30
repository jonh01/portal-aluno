import React from 'react';
import { styles } from './styles';
import {TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Disciplina } from '../../model/Disciplina';
import { Text } from 'react-native-paper';

interface Props extends TouchableOpacityProps {
    data: Disciplina;
}
const DisciplinaComp = ({data , ...rest}:Props) => {
  return (
    <TouchableOpacity style={styles.container}{...rest}>
        <Text style={styles.text}> {data.nome} </Text>
    </TouchableOpacity>
  );
}

export default DisciplinaComp;