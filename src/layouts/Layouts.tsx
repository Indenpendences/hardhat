import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./styles";
import Home from "../screens/Home";
import Search from "../screens/Search";
import UserAccount from "../screens/UserAccount";
import Ticket from "../screens/Ticket";
import { COLORS, FONTSIZE, SPACING } from "../components/Themes";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {};
const Layout = function ({}: Props) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.Black,
                    borderTopWidth: 0,
                    height: SPACING.space_10 * 10,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: function ({ focused, color, size }) {
                        return (
                            <View
                                style={[
                                    styles.activeTabBackground,
                                    focused
                                        ? { backgroundColor: COLORS.Orange }
                                        : {},
                                ]}
                            >
                                <Feather
                                    name="film"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_30}
                                />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: function ({ focused, color, size }) {
                        return (
                            <View
                                style={[
                                    styles.activeTabBackground,
                                    focused
                                        ? { backgroundColor: COLORS.Orange }
                                        : {},
                                ]}
                            >
                                <AntDesign
                                    name="search1"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_30}
                                />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Ticket"
                component={Ticket}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: function ({ focused, color, size }) {
                        return (
                            <View
                                style={[
                                    styles.activeTabBackground,
                                    focused
                                        ? { backgroundColor: COLORS.Orange }
                                        : {},
                                ]}
                            >
                                <MaterialCommunityIcons
                                    name="ticket-confirmation"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_30}
                                />
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="UserAccount"
                component={UserAccount}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: function ({ focused, color, size }) {
                        return (
                            <View
                                style={[
                                    styles.activeTabBackground,
                                    focused
                                        ? { backgroundColor: COLORS.Orange }
                                        : {},
                                ]}
                            >
                                <MaterialCommunityIcons
                                    name="account"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_30}
                                />
                            </View>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default Layout;
