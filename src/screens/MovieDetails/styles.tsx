import { StyleSheet, Dimensions } from "react-native";
import {
    BORDERRADIUS,
    COLORS,
    FONTSIZE,
    SPACING,
} from "../../components/Themes";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.Black,
    },
    loadingContainer: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
    },
    scrollViewContainer: {
        flex: 1,
    },
    appHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_20 * 2,
    },
    imageBG: {
        width: "100%",
        aspectRatio: 3072 / 1727,
    },
    linearGradient: {
        height: "100%",
    },
    cardImage: {
        width: "60%",
        aspectRatio: 200 / 300,
        borderRadius: SPACING.space_8,
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
    },
    clockIcon: {
        fontSize: FONTSIZE.size_20,
        color: COLORS.WhiteRGBA50,
        marginRight: SPACING.space_8,
    },
    timeContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: SPACING.space_15,
    },
    runtimeText: {
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
    },
    title: {
        fontSize: FONTSIZE.size_24,
        color: COLORS.White,
        marginHorizontal: SPACING.space_36,
        marginVertical: SPACING.space_15,
        textAlign: "center",
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
        paddingHorizontal: SPACING.space_10,
        paddingVertical: SPACING.space_4,
        borderRadius: BORDERRADIUS.radius_25,
    },
    genreText: {
        fontSize: FONTSIZE.size_10,
        color: COLORS.WhiteRGBA75,
    },
    tagline: {
        fontSize: FONTSIZE.size_14,
        fontStyle: "italic",
        color: COLORS.White,
        marginHorizontal: SPACING.space_36,
        marginVertical: SPACING.space_15,
        textAlign: "center",
    },
    infoContainer: {
        marginHorizontal: SPACING.space_24,
    },
    rateContainer: {
        flexDirection: "row",
        gap: SPACING.space_10,
        alignItems: "center",
    },
    starIcon: {
        fontSize: FONTSIZE.size_20,
        color: COLORS.Yellow,
    },
    descriptionText: {
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
    },
    containerGap24: {
        gap: SPACING.space_24,
    },
    buttonBG: {
        alignItems: "center",
        marginVertical: SPACING.space_24,
    },
    buttonText: {
        borderRadius: BORDERRADIUS.radius_25 * 2,
        paddingHorizontal: SPACING.space_24,
        paddingVertical: SPACING.space_10,
        backgroundColor: COLORS.Orange,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
    },
});

export default styles;
