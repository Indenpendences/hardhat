import React, { useState, useEffect } from "react";
import {
    ActivityIndicator,
    FlatList,
    ScrollView,
    StatusBar,
    View,
    Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../../components/Themes";
import InputHeader from "../../components/InputHeader";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import MovieCard from "../../components/MovieCard/MovieCard";

import { fetchNowPlayingMovies } from "../../utils/fetchNowPlayingMovies";
import { fetchPopularMovies } from "../../utils/fetchPopularMovies";
import { fetchUpcomingMovies } from "../../utils/fetchUpcomingMovies";

import { baseImagePath } from "../../api";
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
            <CategoryHeader title="Now Playing" />
            <FlatList
                data={nowPlayingMoviesList}
                keyExtractor={function (item: any) {
                    return item.id;
                }}
                bounces={false}
                snapToInterval={Dimensions.get("window").width * 0.7 + 36}
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                contentContainerStyle={styles.containerGap36}
                renderItem={function ({ item, index }) {
                    if (!item.original_title) {
                        return (
                            <View
                                style={{
                                    width:
                                        (Dimensions.get("window").width -
                                            (Dimensions.get("window").width *
                                                0.7 +
                                                36 * 2)) /
                                        2,
                                }}
                            ></View>
                        );
                    }
                    return (
                        <MovieCard
                            shouldMarginatedAtEnd={true}
                            onCard={function () {
                                navigation.push("MovieDetails", {
                                    movieId: item.id,
                                });
                            }}
                            cardWidth={Dimensions.get("window").width * 0.7}
                            isFirst={index == 0 ? true : false}
                            isLast={
                                index === upcomingMoviesList?.length - 1
                                    ? true
                                    : false
                            }
                            title={item.original_title}
                            imagePath={baseImagePath("w780", item.poster_path)}
                            genre={item.genre_ids.slice(1, 4)}
                            voteAverage={item.vote_average}
                            voteCount={item.vote_count}
                            genres={genres}
                            shoundMarginatedAround={true}
                        />
                    );
                }}
            />
            <CategoryHeader title="Popular" />
            <CategoryHeader title="Upcoming" />
        </ScrollView>
    );
};

export default Home;

const genres: any = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentry",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystry",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
};
