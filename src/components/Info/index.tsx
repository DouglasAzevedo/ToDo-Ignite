import { Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
    completed: number;
    created: number;
}
export function Info({ completed, created }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.infoGroup}>
                <Text style={styles.taskCreated}>
                    Criadas
                </Text>
                <View style={styles.circleCounter}>
                    <Text style={styles.counter}>
                        {created}
                    </Text>
                </View>
            </View>

            <View style={styles.infoGroup}>
                <Text style={styles.taskCompleted}>
                    Concluídas
                </Text>
                <View style={styles.circleCounter}>
                    <Text style={styles.counter}>
                        {completed}
                    </Text>
                </View>
            </View>
        </View>
    );
}