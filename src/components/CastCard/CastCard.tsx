import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SPACING } from "../Themes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styles from "./styles";

type Props = {
    shouldMarginatedAtEnd: boolean;
    cardWidth: number;
    isFirst: boolean;
    isLast: boolean;
    imagePath: string;
    title: string;
    subtitle: string;
};

const CastCard = ({
    shouldMarginatedAtEnd,
    cardWidth,
    isFirst,
    isLast,
    imagePath,
    title,
    subtitle,
}: Props) => {
    return (
        <View
            style={[
                styles.container,
                shouldMarginatedAtEnd
                    ? isFirst
                        ? { marginLeft: SPACING.space_24 }
                        : isLast
                        ? { marginRight: SPACING.space_24 }
                        : {}
                    : {},
                { maxWidth: cardWidth },
            ]}
        >
            <Image
                source={{ uri: imagePath }}
                style={[styles.cardImage, { width: cardWidth }]}
            />
            <Text style={styles.title} numberOfLines={1}>
                {title}
            </Text>
            <Text style={styles.subtitle} numberOfLines={1}>
                {subtitle}
            </Text>
        </View>
    );
};

export default CastCard;
