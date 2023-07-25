import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { SPACING } from "../Themes";
import styles from "./styles";

type Props = {
    onCard: () => void;
    shoudlMarginatedAtEnd: boolean;
    shouldMarginatedAround: boolean;
    isFirst: boolean;
    isLast: boolean;
    cardWidth: number;
    imagePath: string;
    title: string;
};

const SubMovieCard = ({
    onCard,
    shoudlMarginatedAtEnd,
    shouldMarginatedAround,
    isFirst,
    isLast,
    cardWidth,
    imagePath,
    title,
}: Props) => {
    return (
        <TouchableOpacity onPress={() => onCard()}>
            <View
                style={[
                    styles.container,
                    shoudlMarginatedAtEnd
                        ? isFirst
                            ? { marginLeft: SPACING.space_36 }
                            : isLast
                            ? { marginRight: SPACING.space_36 }
                            : {}
                        : {},
                    shouldMarginatedAround ? { margin: SPACING.space_12 } : {},
                    { maxWidth: cardWidth },
                ]}
            >
                <Image
                    style={[styles.cardImage, { width: cardWidth }]}
                    source={{ uri: imagePath }}
                />
                <Text numberOfLines={1} style={styles.textTitle}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default SubMovieCard;
