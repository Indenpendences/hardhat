import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Layout from "../layouts";
import MovieDetails from "../screens/MovieDetails";
import SeatBooking from "../screens/SeatBooking";

type Props = {};
const Navigations = function ({}: Props) {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Tab"
                    component={Layout}
                    options={{ animation: "default" }}
                />

                <Stack.Screen
                    name="MovieDetails"
                    component={MovieDetails}
                    options={{ animation: "slide_from_right" }}
                />

                <Stack.Screen
                    name="SeatBooking"
                    component={SeatBooking}
                    options={{ animation: "slide_from_bottom" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigations;
