import { StyleSheet, Text, View } from "react-native";

function MealDetails({meal}){
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{meal.duration}m</Text>
            <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
})