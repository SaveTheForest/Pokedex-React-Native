import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";

export default function Details({navigation, route}) {
  return (
    <View>
      <StatusBar/>
      <TouchableOpacity
      onPress={()=>navigation.goBack()}>
          <Text>{route.params.id}</Text>
      </TouchableOpacity>
    
    </View>
  );
}
