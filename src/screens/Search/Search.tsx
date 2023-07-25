import React, { useState } from "react";
import { View, StatusBar, FlatList, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { baseImagePath, searchMovies } from "../../api";
import styles from "./styles";
import SubMovieCard from "../../components/SubMovieCard";
import InputHeader from "../../components/InputHeader";
import { SPACING } from "../../components/Themes";
type Props = {};

const Search = function ({}: Props) {
    const navigation: any = useNavigation();
    const [searchList, setSearchList] = useState<any>([]);

    const handleSearchMovies = async function (name: string) {
        try {
            let response = await fetch(searchMovies(name));
            let data = await response.json();
            setSearchList(data.results);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View>
                <FlatList
                    data={searchList}
                    keyExtractor={(item: any) => item.id}
                    bounces={false}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={styles.InputHeaderContainer}>
                            <InputHeader onSearch={handleSearchMovies} />
                        </View>
                    }
                    contentContainerStyle={styles.centerContainer}
                    renderItem={({ item, index }) => (
                        <SubMovieCard
                            shoudlMarginatedAtEnd={false}
                            shouldMarginatedAround={true}
                            onCard={() => {
                                navigation.push("MovieDetails", {
                                    movieid: item.id,
                                });
                            }}
                            cardWidth={
                                Dimensions.get("screen").width / 2 -
                                SPACING.space_12 * 2
                            }
                            title={item.original_title}
                            imagePath={baseImagePath("w342", item.poster_path)}
                        />
                    )}
                />
            </View>
        </View>
    );
};

export default Search;
