// import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function FavoriteScreen() {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));
    if(favoriteMeals.length === 0) {
        return (
            <View style={styles.noFavoritesContainer}>
                <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
            </View>
        );
    }
    return <MealsList meals={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    noFavoritesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});