import { StyleSheet, Text, View } from "react-native";

function List({data}) {
    return data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem}>
            <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
    ));
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,

        backgroundColor: '#D9DFC6',
        borderWidth: 1,
        borderColor: '#CCC',
    },
    itemText: {
        textAlign: 'center',
    }
});