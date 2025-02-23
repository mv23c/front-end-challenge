import React, { useContext } from "react";
import { View, ActivityIndicator } from 'react-native';
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { AuthContext } from "../contexts/AuthContext";

function Routes(){
    //const isAuthenticated = false;
    //const loading = false;
    const { isAuthenticated, loading } = useContext(AuthContext);

    if(loading){
        return(
            <View 
              style={{
                flex: 1, 
                backgroundColor: '#26254D', 
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ActivityIndicator size={60} color='#F5f7fb' />
            </View>
        )
    }

    return(
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;