import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import  Senha   from "../pages/Senha";
import { AppTabRoutes } from "./AppTabRoutes";


const {Navigator, Screen} = createNativeStackNavigator();

export const LoginRoutes = () => {
    return (
        <Navigator screenOptions={{headerShown: true, headerTransparent:true, headerStyle:{backgroundColor:'#F8E9B0'}, statusBarColor:'#F8E9B0'}}>
            <Screen 
                name="home"
                component={Login}
                options={{title: 'Pagina Inicial', headerShown:false}}
                
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