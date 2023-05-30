import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';
import { Conceito } from '../../model/conceito';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

interface Props extends TouchableOpacityProps {
    data: Conceito;
}

const ConhecimentoComp = ({data , ...rest}:Props) => {
    return (
        <TouchableOpacity style={styles.container}{...rest}>
                <Text style={styles.text}> {data.nome} </Text> 
                <Text style={styles.text}> {data.email} </Text>
                <Text style={styles.text}> {data.av1} </Text>    
                <Text style={styles.text}> {data.av2} </Text>           
        </TouchableOpacity>
      );
}

export default ConhecimentoComp;