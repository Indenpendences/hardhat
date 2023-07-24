import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

type Props = {};
const App = function ({}: Props) {
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tab" component={}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
