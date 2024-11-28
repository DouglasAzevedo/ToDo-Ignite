import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './styles'
import { TaskModel } from "../../model/TaskModel";

type Props = {
  name: string;
  onRemove: () => void;
}

export function Task({ name, onRemove }: Props) {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.taskContainer}>
      <BouncyCheckbox
        disableText
        fillColor="#5E60CE"
        isChecked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      />
      <Text style={[styles.taskText, isChecked && styles.taskTextCompleted]}>
        {name}
      </Text>
      <TouchableOpacity
        onPress={onRemove}
        style={styles.deleteButton}
      >
        <Icon name="delete" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}