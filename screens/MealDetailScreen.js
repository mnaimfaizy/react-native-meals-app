import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
// import { useDispatch, useSelector } from "react-redux";
// import { addFavorite, removeFavorite } from "../store/redux/favorities";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealCtx = useContext(FavoritesContext);
  // const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
  // const dispatch = useDispatch()

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);
  // const mealIsFavorite = favoriteMealIds.includes(mealId)

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealCtx.removeFavorite(mealId);
      // dispatch(removeFavorite({ id: mealId}));
    } else {
      favoriteMealCtx.addFavorite(mealId);
      // dispatch(addFavorite({ id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <View style={styles.imageGradient} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 350,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  infoContainer: {
    backgroundColor: "rgba(53, 20, 1, 0.9)",
    padding: 16,
    marginHorizontal: 16,
    marginTop: -40,
    borderRadius: 20,
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 12,
    textAlign: "center",
    color: "white",
    letterSpacing: 0.5,
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
    marginTop: 24,
  },
  listContainer: {
    width: "90%",
    marginBottom: 20,
  },
});
