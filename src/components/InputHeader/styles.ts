import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../Themes";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingVertical: SPACING.space_8,
        paddingHorizontal: SPACING.space_24,
        borderWidth: 2,
        borderColor: COLORS.WhiteRGBA15,
        borderRadius: BORDERRADIUS.radius_25,
        flexDirection: "row",
    },

    textInput: {
        width: "90%",
        fontFamily: "",
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
    },

    searchIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: SPACING.space_10,
    },
});

export default styles;
