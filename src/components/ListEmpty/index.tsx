import { View, Image, Text } from 'react-native'

import { styles } from "./styles";

export function ListEmpty() {
    return (
        <View style={styles.container}>
            <Image style={styles.clipboard}
                source={require("../../assets/Clipboard.png")}
            />
            <Text style={styles.textPrincipal}>
                Você ainda nâo tem tarefas cadastradas
            </Text>
            <Text style={styles.text}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}