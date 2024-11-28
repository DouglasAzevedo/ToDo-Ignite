import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 24,
        borderRadius: 5,
        backgroundColor: '#333333',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        height: 56
    },
    taskText: {
        flex: 1,
        fontSize: 14,
        color: '#F2F2F2',
        marginLeft: 10
    },
    taskTextCompleted: {
        textDecorationLine: 'line-through',
        color: '#808080',
    },
    deleteButton: {
        marginLeft: 10,
        padding: 5,
    },
})