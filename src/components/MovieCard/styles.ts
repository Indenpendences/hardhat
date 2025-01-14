import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../Themes";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.Black,
    },
    cardImage: {
        aspectRatio: 2 / 3,
        borderRadius: BORDERRADIUS.radius_20,
    },
    textTitle: {
        fontSize: FONTSIZE.size_24,
        color: COLORS.White,
        textAlign: "center",
        paddingVertical: SPACING.space_10,
    },
    rateContainer: {
        flexDirection: "row",
        gap: SPACING.space_10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: SPACING.space_10,
    },
    starIcon: {
        fontSize: FONTSIZE.size_20,
        color: COLORS.Yellow,
    },
    voteText: {
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
    },
    genreContainer: {
        flex: 1,
        flexDirection: "row",
        gap: SPACING.space_20,
        flexWrap: "wrap",
        justifyContent: "center",
    },
    genreBox: {
        borderColor: COLORS.WhiteRGBA50,
        borderWidth: 1,
        paddingVertical: SPACING.space_4,
        paddingHorizontal: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_25,
    },
    genreText: {
        fontSize: FONTSIZE.size_10,
        color: COLORS.WhiteRGBA75,
    },
});

export default styles;
