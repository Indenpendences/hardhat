import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

type Props = {
    handleAction: () => void;
    nameIcon: string;
    header: string;
    Icon: any;
};

const AppHeader = ({ handleAction, header, Icon, nameIcon }: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.iconBG}
                onPress={() => handleAction()}
            >
                <Icon name={nameIcon} style={styles.iconStyle} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{header}</Text>
            <View style={styles.emptyContainer}></View>
        </View>
    );
};

export default AppHeader;
