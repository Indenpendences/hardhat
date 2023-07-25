import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SPACING } from "../../components/Themes";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        width: Dimensions.get("screen").width,
        alignItems: "center",
        backgroundColor: COLORS.Black,
    },
    InputHeaderContainer: {
        display: "flex",
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_28,
        marginBottom: SPACING.space_28 - SPACING.space_12,
    },
    centerContainer: {
        alignItems: "center",
    },
});

export default styles;
