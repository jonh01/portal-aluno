import { NavigationContainer } from "@react-navigation/native";
import { LoginRoutes } from "./LoginRoutes";
import { AppTabRoutes } from "./AppTabRoutes";

interface Props {
    isLoggedIn:boolean
}

export const Routes = ({isLoggedIn}:Props) => {
    return (
        <NavigationContainer>
            {isLoggedIn ? <AppTabRoutes /> : <LoginRoutes />}
        </NavigationContainer>
    )
}