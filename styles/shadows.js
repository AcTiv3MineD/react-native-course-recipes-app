import { Platform, StyleSheet } from "react-native";

const shadows = StyleSheet.create({
    sm: {
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
});

export default shadows;