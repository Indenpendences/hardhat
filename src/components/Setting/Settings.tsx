import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS, FONTSIZE, SPACING } from "../Themes";

type Props = {
    nameIcon: string;
    Icon: any;
    heading: string;
    subheading: string;
    subtitle: string;
};
const Setting = ({ Icon, nameIcon, heading, subheading, subtitle }: Props) => {
    return (
        <View style={styles.container}>
            <View>
                <Icon name={nameIcon} style={styles.iconStyle} />
            </View>
            <View style={styles.settingContainer}>
                <Text style={styles.title}>{heading}</Text>
                <Text style={styles.subtitle}>{subheading}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.iconBG}>
                <AntDesign name={"arrowright"} style={styles.iconStyle} />
            </View>
        </View>
    );
};

export default Setting;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: SPACING.space_20,
    },
    settingContainer: {
        flex: 1,
    },
    iconStyle: {
        color: COLORS.White,
        fontSize: FONTSIZE.size_24,
        paddingHorizontal: SPACING.space_20,
    },
    iconBG: {
        justifyContent: "center",
    },
    title: {
        fontSize: FONTSIZE.size_18,
        color: COLORS.White,
    },
    subtitle: {
        fontSize: FONTSIZE.size_14,
        color: COLORS.WhiteRGBA15,
    },
});
