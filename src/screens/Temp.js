import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Main from './src/screens/Main'


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}