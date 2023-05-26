import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import  Senha   from "../pages/Senha";


const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name="home"
                component={Login}
                options={{title: 'Pagina Inicial'}}
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