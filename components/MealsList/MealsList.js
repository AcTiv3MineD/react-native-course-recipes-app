import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

function MealsList({meals}) {
    const navigation = useNavigation();

    function renderMealItem(itemData) {
        return <MealItem meal={itemData.item} onPress={handleMealItemPress.bind(this, itemData.item.id)} />
    }

    function handleMealItemPress(mailId) {
        navigation.navigate('MealItem', {mealId: mailId});
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});