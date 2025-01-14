import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/List";

function MealItemScreen({navigation, route}) {
    const meal = MEALS.find(meal => meal.id === route.params.mealId);

    navigation.setOptions({
        title: meal.title,
    })

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
    rootContainer: {
        marginBottom: 16,
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