/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Onboarding from './src/pages/Onboarding';
import LetsIn from './src/pages/LetsIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Onboarding} />
                <Stack.Screen name="LetsIn" component={LetsIn} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
