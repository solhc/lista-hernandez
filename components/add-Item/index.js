import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const RenderItem = ({ item, onPress }) => {

  return (  
    <View style={styles.itemContainer}>
        <Text>{item.id}</Text>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RenderItem;