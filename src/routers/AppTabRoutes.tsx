import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Disciplina from '../pages/Disciplina';
import Personagem from '../pages/Personagem';

const { Navigator, Screen } = createBottomTabNavigator();

export const AppTabRoutes = () => {
  return (
    <Navigator initialRouteName='personagem'>
        <Screen
            name="disciplina"
            component={Disciplina}
        />
        <Screen 
            name="personagem"
            component={Personagem}
        />
    </Navigator>
  );
}