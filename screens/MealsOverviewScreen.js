import { Text } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

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

    return <MealsList meals={displayedMeals} />;
}

export default MealsOverviewScreen;