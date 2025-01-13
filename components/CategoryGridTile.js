import {
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridItem}>
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

        // ANDROID
        elevation: 4,
        overflow:  Platform.OS == 'android' ? 'hidden' : 'visible', // avoid ripple effect from overflowing

        // IOS
        backgroundColor: 'white', // FOR SHADOW TO BE SHOWN ON IOS, WE NEED TO DECLARE A BACKGROUND
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
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