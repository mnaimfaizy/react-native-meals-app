import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
// import { useSelector } from "react-redux";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  // const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter(
    (meal) => favoriteMealsCtx.ids.includes(meal.id)
    // favoriteMealIds.includes(mealId)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.emptyStateContainer}>
          <Ionicons name="star-outline" size={80} color="#e2b497" />
          <Text style={styles.title}>No Favorites Yet</Text>
          <Text style={styles.text}>
            Start adding your favorite meals by tapping the star icon!
          </Text>
        </View>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  emptyStateContainer: {
    alignItems: "center",
    maxWidth: 320,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e2b497",
    marginTop: 24,
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  text: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    lineHeight: 24,
  },
});
