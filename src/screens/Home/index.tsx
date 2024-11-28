import React, { useState } from "react";
import { View, Image, FlatList, TextInput, SafeAreaView, TouchableOpacity, Text, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from "./styles";
import { Info } from "../../components/Info";
import { Task } from "../../components/Task";
import { ListEmpty } from "../../components/ListEmpty";

import { TaskModel } from "../../model/TaskModel";

export function Home() {
    const [tasks, setTasks] = useState<TaskModel[]>([]);
    const [taskName, setTaskName] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    function handleTaskAdd() {
        if (taskInvalid()) {
            setTaskName('')
            return
        }

        const newTask: TaskModel = {
            name: taskName,
            checked: false
        }

        setTasks(prevState => [...prevState, newTask]);
        setTaskName('');
    }

    function taskInvalid(): boolean {
        if (!taskName) return true

        const taskCountName = tasks.reduce(
            (count, task) => (task.name == taskName ? count + 1 : count),
            0
        );

        if (taskCountName > 0) {
            Alert.alert("Tarefa existe", "Já existe uma tarefa com esse nome")
            return true
        }

        return false
    }

    function handleRemoveTask(name: String) {
        setTasks(prevState => prevState.filter(task => task.name !== name))
    }

    function handleCheck(task: TaskModel) {
        task.checked = !task.checked;
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.containerImage}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/Logo.png")}
                />
            </SafeAreaView>

            <View style={styles.form}>
                <TextInput
                    style={[styles.input, isFocused && styles.inputFocused]}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={"#808080"}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={setTaskName}
                    value={taskName}
                />

                <TouchableOpacity
                    style={[styles.button, isPressed && styles.buttonPressed]}
                    onPress={handleTaskAdd}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                >
                    <Icon name="plus" size={10} color="#fff" />
                </TouchableOpacity>
            </View>

            <Info
                completed={tasks.reduce(
                    (count, task) => (task.checked ? count + 1 : count), 0
                )}
                created={tasks.length}
            />

            <FlatList
                data={tasks}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <Task
                        key={item.name}
                        name={item.name}
                        onRemove={() => handleRemoveTask(item.name)}
                    />
                )}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={ListEmpty}
            />
        </View>
    );
}