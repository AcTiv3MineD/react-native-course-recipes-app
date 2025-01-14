import { Image, ScrollView, Share, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";

function MealItemScreen({navigation, route}) {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const meal = MEALS.find(meal => meal.id === route.params.mealId);

    const isMealFavorite = favoriteMealIds.includes(meal.id);

    const shareMealItemHandler = async () => {
        try {
            await Share.share({
                message: `Check out this recipe: ${meal.title}`,
            });
        } catch (error) {
            console.log(error);
        }
    }

    function changeFavoriteStatusHandler() {
        if(isMealFavorite) {
            // favoriteMealsCtx.removeFavorite(meal.id);
            dispatch(removeFavorite({id: meal.id}));
            return;
        }

        // favoriteMealsCtx.addFavorite(meal.id);
        dispatch(addFavorite({id: meal.id}));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title,
            headerRight: () => {
                return <View style={styles.actionButtons}>
                        <IconButton
                            style={styles.actionButton}
                            name={isMealFavorite ? 'star' : 'star-outline'}
                            color='white'
                            onPress={changeFavoriteStatusHandler}
                        />
                        <IconButton
                            style={styles.actionButton}
                            name='share-social'
                            color='white'
                            onPress={shareMealItemHandler}
                        />
                    </View>
            },
        })
    }, [navigation, meal, shareMealItemHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{uri: meal.imageUrl}}
                style={styles.image}
            />
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{meal.title}</Text>
                <MealDetails meal={meal} />
                <Text style={styles.subTitle}>Ingredients</Text>
                <List data={meal.ingredients} />
                <Text style={styles.subTitle}>Steps</Text>
                <List data={meal.steps} />
            </View>
        </ScrollView>
    );
}

export default MealItemScreen;

const styles = StyleSheet.create({
    actionButtons: {
        minWidth: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        padding: 5,
    },
    rootContainer: {
        marginBottom: 16,
        flex: 1,
    },
    innerContainer: {
        margin: 26,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        borderBottomColor: '#CCC',
        borderBottomWidth: 2,
        textAlign: 'center',
    },
});