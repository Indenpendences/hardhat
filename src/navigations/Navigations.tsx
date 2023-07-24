import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import MovieDetails from "../screens/MovieDetails";
import Search from "../screens/Search";
import SeatBooking from "../screens/SeatBooking";
import UserAccount from "../screens/UserAccount";

import { COLORS, FONTSIZE, SPACING } from "../components/Themes/theme";

type Props = {};
const Navigations = function ({}: Props) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="MovieDetails" component={MovieDetails} />
            <Tab.Screen name="UserAccount" component={UserAccount} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="SeatBooking" component={SeatBooking} />
        </Tab.Navigator>
    );
};

export default Navigations;
