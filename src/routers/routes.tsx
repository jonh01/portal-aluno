import { NavigationContainer } from "@react-navigation/native";
import { LoginRoutes } from "./LoginRoutes";
import { AppTabRoutes } from "./AppTabRoutes";
import { useEffect, useState } from "react";

export const Routes = () => {

    // futuramente simular login
    const [isLoggedIn, setLoggedIn] = useState<boolean>();
  
    useEffect(() => {
        setLoggedIn(false);
    }, []);

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppTabRoutes /> : <LoginRoutes />}
        </NavigationContainer>
    )
}