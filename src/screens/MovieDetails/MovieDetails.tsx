import React, { useState, useEffect } from "react";
import {
    ActivityIndicator,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    View,
    StatusBar,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

import fetchMovieDetails from "../../utils/fetchMovieDetails";
import fetchMovieCastDetails from "../../utils/fetchMovieCastDetails";

import AppHeader from "../../components/AppHeader";
import CategoryHeader from "../../components/CategoryHeader";
import { COLORS } from "../../components/Themes";
import CastCard from "../../components/CastCard";

import { baseImagePath } from "../../api";
import styles from "./styles";
type Props = {};

const MovieDetails = function ({}: Props) {
    const router: any = useRoute();
    const navigation: any = useNavigation();
    const [movieData, setMovieData] = useState<any>();
    const [movieCastData, setMovieCastData] = useState<any>();

    useEffect(function () {
        (async function () {
            const getMovieData = await fetchMovieDetails({
                movieId: router.params.movieId,
            });

            setMovieData(getMovieData);
        })();

        (async function () {
            const getMovieCastData = await fetchMovieCastDetails({
                movieId: router.params.movieId,
            });
            setMovieCastData(getMovieCastData.cast);
        })();
    }, []);

    if (!movieCastData && !movieData) {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.scrollViewContainer}
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.appHeaderContainer}>
                    <AppHeader
                        Icon={AntDesign}
                        nameIcon="close"
                        header=""
                        handleAction={function () {
                            return navigation.goBack();
                        }}
                    />
                </View>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={"large"} color={"#FF5524"} />
                </View>
            </ScrollView>
        );
    }

    return (
        <ScrollView
            style={styles.container}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar hidden />

            <View>
                <ImageBackground
                    source={{
                        uri: baseImagePath("w780", movieData?.backdrop_path),
                    }}
                    style={styles.imageBG}
                >
                    <LinearGradient
                        colors={[COLORS.BlackRGB10, COLORS.Black]}
                        style={styles.linearGradient}
                    >
                        <View style={styles.appHeaderContainer}>
                            <AppHeader
                                Icon={AntDesign}
                                nameIcon="close"
                                header=""
                                handleAction={function () {
                                    return navigation.goBack();
                                }}
                            />
                        </View>
                    </LinearGradient>
                </ImageBackground>
                <View style={styles.imageBG}></View>
                <Image
                    source={{
                        uri: baseImagePath("w342", movieData?.poster_path),
                    }}
                    style={styles.cardImage}
                />
            </View>

            <View style={styles.timeContainer}>
                <AntDesign name="clockcircleo" style={styles.clockIcon} />
                <Text style={styles.runtimeText}>
                    {Math.floor(movieData?.runtime / 60)}h{" "}
                    {Math.floor(movieData?.runtime % 60)}m
                </Text>
            </View>

            <View>
                <Text style={styles.title}>{movieData?.original_title}</Text>
                <View style={styles.genreContainer}>
                    {movieData?.genres.map((item: any) => {
                        return (
                            <View style={styles.genreBox} key={item.id}>
                                <Text style={styles.genreText}>
                                    {item.name}
                                </Text>
                            </View>
                        );
                    })}
                </View>
                <Text style={styles.tagline}>{movieData?.tagline}</Text>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.rateContainer}>
                    <AntDesign name="staro" style={styles.starIcon} />
                    <Text style={styles.runtimeText}>
                        {movieData?.vote_average.toFixed(1)} (
                        {movieData?.vote_count})
                    </Text>
                    <Text style={styles.runtimeText}>
                        {movieData?.release_date.substring(8, 10)}{" "}
                        {new Date(movieData?.release_date).toLocaleString(
                            "default",
                            {
                                month: "long",
                            },
                        )}{" "}
                        {movieData?.release_date.substring(0, 4)}
                    </Text>
                </View>
                <Text style={styles.descriptionText}>
                    {movieData?.overview}
                </Text>
            </View>

            <View>
                <CategoryHeader title="Top Cast" />
                <FlatList
                    data={movieCastData}
                    keyExtractor={(item: any) => item.id}
                    horizontal
                    contentContainerStyle={styles.containerGap24}
                    renderItem={({ item, index }) => (
                        <CastCard
                            shouldMarginatedAtEnd={true}
                            cardWidth={80}
                            isFirst={index == 0 ? true : false}
                            isLast={
                                index == movieCastData?.length - 1
                                    ? true
                                    : false
                            }
                            imagePath={baseImagePath("w185", item.profile_path)}
                            title={item.original_name}
                            subtitle={item.character}
                        />
                    )}
                />

                <View>
                    <TouchableOpacity
                        style={styles.buttonBG}
                        onPress={() => {
                            navigation.push("SeatBooking", {
                                BgImage: baseImagePath(
                                    "w780",
                                    movieData.backdrop_path,
                                ),
                                PosterImage: baseImagePath(
                                    "original",
                                    movieData.poster_path,
                                ),
                            });
                        }}
                    >
                        <Text style={styles.buttonText}>Select Seats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default MovieDetails;
