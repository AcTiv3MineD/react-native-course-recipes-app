import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({name, color, onPress, style}) {
    return (
        <Pressable onPress={onPress} style={style}>
            <Ionicons name={name} size={24} color={color} />
        </Pressable>
    );
}

export default IconButton;