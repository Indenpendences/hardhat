import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = {
    title: string;
};
const CategoryHeader = function ({ title }: Props) {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default CategoryHeader;
