import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import  Senha   from "../pages/Senha";
import { AppTabRoutes } from "./AppTabRoutes";
import Personagem from "../pages/Personagem";


const {Navigator, Screen} = createNativeStackNavigator();

export const LoginRoutes = () => {
    return (
        <Navigator screenOptions={{headerShown: true, headerTransparent:true, headerStyle:{backgroundColor:'#F8E9B0'}, statusBarColor:'#F8E9B0'}}>
            <Screen 
                name="login"
                component={Login}
                options={{headerShown:false}}
                
            />
            <Screen 
                name="cadastro"
                component={Cadastro}
                options={{title: 'Cadastro'}}
            />
            <Screen 
                name="recuperarSenha"
                component={Senha}
                options={{title: 'Recuperar senha'}}
            />
        </Navigator>
    )
}