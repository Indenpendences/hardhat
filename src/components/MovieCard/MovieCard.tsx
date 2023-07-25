import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import { SPACING } from "../Themes";

type Props = {
    onCard: () => void;
    shouldMarginatedAtEnd: boolean;
    shoundMarginatedAround: boolean;
    isFirst: boolean;
    isLast: boolean;
    cardWidth: number;
    imagePath: string;
    voteCount: number;
    title: string;
    voteAverage: any;
    genre: Array<any>;
    genres: Array<any>;
};

const MovieCard = function ({
    onCard,
    shouldMarginatedAtEnd,
    shoundMarginatedAround,
    isFirst,
    isLast,
    cardWidth,
    imagePath,
    title,
    genre,
    voteAverage,
    voteCount,
    genres,
}: Props) {
    return (
        <TouchableOpacity
            onPress={function () {
                return onCard();
            }}
        >
            <View
                style={[
                    styles.container,
                    shouldMarginatedAtEnd
                        ? isFirst
                            ? { marginLeft: SPACING.space_36 }
                            : isLast
                            ? { marginRight: SPACING.space_36 }
                            : {}
                        : {},
                    shoundMarginatedAround ? { margin: SPACING.space_12 } : {},
                    { maxWidth: cardWidth },
                ]}
            >
                <Image
                    style={[styles.cardImage, { width: cardWidth }]}
                    source={{ uri: imagePath }}
                />
                <View>
                    <View style={styles.rateContainer}>
                        <AntDesign name="star" style={styles.starIcon} />
                        <Text style={styles.voteText}>
                            {voteAverage} ({voteCount})
                        </Text>
                    </View>

                    <Text numberOfLines={1} style={styles.textTitle}>
                        {title}
                    </Text>

                    <View style={styles.genreContainer}>
                        {genre.map((item: any) => {
                            return (
                                <View key={item} style={styles.genreBox}>
                                    <Text style={styles.genreText}>
                                        {genres[item]}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MovieCard;
