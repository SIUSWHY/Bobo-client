/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './src/pages/SignUp';
import Onboarding from './src/pages/Onboarding';
import LetsIn from './src/pages/LetsIn';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
    useEffect(() => {
        LottieSplashScreen.hide(); // here
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Onboarding} />
                <Stack.Screen name="LetsIn" component={LetsIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
