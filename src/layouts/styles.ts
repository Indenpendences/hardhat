import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../components/Themes/theme";

const styles = StyleSheet.create({
    activeTabBackground: {
        backgroundColor: COLORS.Black,
        padding: SPACING.space_18,
        borderRadius: SPACING.space_18 * 10,
    },
});

export default styles;
