import { Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealItemScreen({navigation, route}) {
    const meal = MEALS.find(meal => meal.id === route.params.mealId);

    navigation.setOptions({
        title: meal.title,
    })

    return (
        <View>
            <Text>MealItemScreen</Text>
        </View>
    );
}

export default MealItemScreen;