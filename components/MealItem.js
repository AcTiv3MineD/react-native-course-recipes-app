import { Text, Pressable, View, Image, StyleSheet } from "react-native";
import shadows from "../styles/shadows";

function MealItem({meal}) {
    return (
        <View style={[styles.MealItem, shadows.sm]}>
            <Pressable
                android_riple={{color: '#CCC'}}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            >
                <View>
                    <Image
                        source={{uri: meal.imageUrl}}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{meal.title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{meal.duration}m</Text>
                    <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    MealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    image: {
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});