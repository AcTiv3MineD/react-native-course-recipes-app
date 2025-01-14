import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

function MealsOverviewScreen({ navigation, route }) {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));
    const category = CATEGORIES.find(category => category.id === categoryId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: category.title,
            headerStyle: {
                backgroundColor: category.color,
            },
            headerRight: () => (
                <Text style={{ color: 'white', marginRight: 16 }}>{category.title}</Text>
            ),
        });
    }, [navigation, category]);

    function renderMealItem(itemData) {
        return <MealItem meal={itemData.item} onPress={handleMealItemPress.bind(this, itemData.item.id)} />
    }

    function handleMealItemPress(mailId) {
        navigation.navigate('MealItem', {mealId: mailId});
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});