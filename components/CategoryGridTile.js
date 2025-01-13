import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import shadows from "../styles/shadows";

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={[styles.gridItem, shadows.sm]}>
            <Pressable
                style={({pressed}) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                android_ripple={{color: '#CCC'}}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.25,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});