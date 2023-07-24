import React, { useState, useEffect } from "react";
import { ActivityIndicator, ScrollView, StatusBar, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../../components/Themes";
import InputHeader from "../../components/InputHeader";

import { fetchNowPlayingMovies } from "../../utils/fetchNowPlayingMovies";
import { fetchPopularMovies } from "../../utils/fetchPopularMovies";
import { fetchUpcomingMovies } from "../../utils/fetchUpcomingMovies";

import styles from "./styles";

type Props = {};

const Home = function ({}: Props) {
    const navigation: any = useNavigation();
    const [nowPlayingMoviesList, setNowPlayingMoviesList] =
        useState<any>(undefined);
    const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);
    const [upcomingMoviesList, setUpcomingMoviesList] =
        useState<any>(undefined);

    useEffect(function () {
        (async function () {
            const nowPlayingMovies = await fetchNowPlayingMovies();
            setNowPlayingMoviesList([
                { id: "dummy1" },
                ...nowPlayingMovies.results,
                { id: "dummy2" },
            ]);

            const popularMovies = await fetchPopularMovies();
            setPopularMoviesList(popularMovies.results);

            const upComingMovies = await fetchUpcomingMovies();
            setUpcomingMoviesList(upComingMovies);
        })();
    }, []);

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

    return (
        <ScrollView style={styles.container} bounces={false}>
            <StatusBar hidden />
            <View style={styles.InputHeaderContainer}>
                <InputHeader onSearch={handleSearch} />
            </View>
        </ScrollView>
    );
};

export default Home;
