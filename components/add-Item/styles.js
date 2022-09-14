import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemListContainer: {
        backgroundColor: '#9F84BD',
        borderRadius: 5,
        flex: 1,
        marginVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
    },
    item: {
        fontSize: 16,
        color: '#000000',
    },
  
    delete: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }

})