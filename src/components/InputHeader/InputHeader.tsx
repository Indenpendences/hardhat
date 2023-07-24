import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import styles from "./styles";
import { COLORS } from "../Themes";

type Props = {
    onSearch: (requets: string) => any;
};

const InputHeader = function ({ onSearch }: Props) {
    const [searchText, setSearchText] = useState<string>("");


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={function (textInput) {
                    return setSearchText(textInput);
                }}
                value={searchText}
                placeholder="Search your movies ..."
                placeholderTextColor={COLORS.WhiteRGBA32}
            />
            <TouchableOpacity
                style={styles.searchIcon}
                onPress={function () {
                    return onSearch(searchText);
                }}
            >
                <AntDesign name="search1" color={COLORS.White} size={20} />
            </TouchableOpacity>
        </View>
    );
};

export default InputHeader;
