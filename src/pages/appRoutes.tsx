import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import Cadastro from "./cadastro";
import  Senha   from "./Senha";


const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{headerShown: true}}>
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