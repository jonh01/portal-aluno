import { NavigationContainer } from "@react-navigation/native";
import { LoginRoutes } from "./LoginRoutes";
import { AppTabRoutes } from "./AppTabRoutes";
import { useEffect, useState } from "react";

export const Routes = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
  
    useEffect(() => {
    }, []);

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppTabRoutes /> : <LoginRoutes />}
        </NavigationContainer>
    )
}