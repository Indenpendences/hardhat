import * as React from "react";
import { Text, View, StyleSheet, StatusBar, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLORS, FONTSIZE, SPACING } from "../../components/Themes";
import AppHeader from "../../components/AppHeader";
import Setting from "../../components/Setting";

const UserAccountScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.appHeaderContainer}>
                <AppHeader
                    Icon={AntDesign}
                    nameIcon="close"
                    header={"My Profile"}
                    handleAction={() => navigation.goBack()}
                />
            </View>

            <View style={styles.profileContainer}>
                <Image
                    source={require("../../assets/images/logo.jpg")}
                    style={styles.avatarImage}
                />
                <Text style={styles.avatarText}>Nguyễn Khánh</Text>
            </View>

            <View style={styles.profileContainer}>
                <Setting
                    Icon={AntDesign}
                    nameIcon="user"
                    heading="Account"
                    subheading="Edit Profile"
                    subtitle="Change Password"
                />
                <Setting
                    Icon={AntDesign}
                    nameIcon="setting"
                    heading="Settings"
                    subheading="Theme"
                    subtitle="Permissions"
                />
                <Setting
                    Icon={FontAwesome}
                    nameIcon="dollar"
                    heading="Offers & Refferrals"
                    subheading="Offer"
                    subtitle="Refferrals"
                />
                <Setting
                    Icon={AntDesign}
                    nameIcon="info"
                    heading="About"
                    subheading="About Movies"
                    subtitle="more"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.Black,
    },
    appHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_20 * 2,
    },
    profileContainer: {
        alignItems: "center",
        padding: SPACING.space_36,
    },
    avatarImage: {
        height: 80,
        width: 80,
        borderRadius: 80,
    },
    avatarText: {
        fontSize: FONTSIZE.size_16,
        marginTop: SPACING.space_16,
        color: COLORS.White,
    },
});

export default UserAccountScreen;
