import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import Personagem from '../pages/Personagem';
import DisciplinaView from '../pages/Disciplina';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const DisciplinaIcon = ({ color }:any) => (
  <MaterialCommunityIcons name="book" color={color} size={30} />
);

const PersonagemIcon = ({ color }:any) => (
  <MaterialCommunityIcons name="account" color={color} size={30} />
);

export const AppTabRoutes = () => {
  return (
    <Navigator
      initialRouteName='personagem'
      activeColor="#caad37"
      inactiveColor="#f8f8f8"
      shifting={true}
      barStyle={{ backgroundColor: '#813035', justifyContent:'center', height:60, }}
    >
        <Screen
            name="disciplina"
            component={DisciplinaView}

            options={{
              tabBarLabel: 'Disciplinas',
              tabBarIcon: DisciplinaIcon,
            }}
        />
        <Screen 
            name="personagem"
            component={Personagem}
            options={{
              tabBarLabel: 'Perfil',
              tabBarIcon: PersonagemIcon,
            }}
        />
    </Navigator>
  );
}