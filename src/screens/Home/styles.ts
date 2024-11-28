import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D0D0D'
    },
    logo: {
        resizeMode: 'contain',
        width: 120,
        height: 120
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        top: -25,
        paddingRight: 24,
        paddingLeft: 24,
    },
    input: {
        flex: 1,
        height: 54,
        fontSize: 16,
        color: '#F2F2F2',
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#333333',
        marginRight: 8,
        padding: 16
    },
    inputFocused: {
        borderColor: '#5E60CE',
        borderWidth: 1,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPressed: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4EA8DE'
    }
})