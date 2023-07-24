import React, { useState, useEffect } from "react";
import { ActivityIndicator, ScrollView, StatusBar, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { COLORS } from "../../components/Themes";
import InputHeader from "../../components/InputHeader";

type Props = {};

const Home = function ({}: Props) {
    const navigation: any = useNavigation();
    const [nowPlayingMoviesList, setNowPlayingMoviesList] =
        useState<any>(undefined);
    const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);
    const [upcomingMoviesList, setUpcomingMoviesList] =
        useState<any>(undefined);

    const handleSearch = function () {
        navigation.navigate("Search");
    };

    if (!nowPlayingMoviesList && !upcomingMoviesList && !popularMoviesList) {
        return (
            <ScrollView
                style={styles.container}
                bounces={false}
                contentContainerStyle={styles.scrollViewContainer}
            >
                <StatusBar hidden />
                <View style={styles.InputHeaderContainer}>
                    <InputHeader onSearch={handleSearch} />
                </View>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={"large"} color={COLORS.Orange} />
                </View>
            </ScrollView>
        );
    }

    return <View></View>;
};

export default Home;
