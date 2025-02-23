import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/Dashboard';
import Index from '../pages/Index';
import ClassDetails from '../pages/ClassDetails';
import EditClass from '../pages/EditClass';

const Stack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Index' component={Index} options={{ headerShown: false }}/>
            <Stack.Screen name='ClassDetails' component={ClassDetails} options={{ headerShown: false }}/>
            <Stack.Screen name='Dashboard' component={Dashboard} />
            <Stack.Screen name='EditClass' component={EditClass} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AppRoutes;

/**
 * Telas que usuários logados poderão ter acesso.
 */