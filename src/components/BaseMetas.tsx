import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';

interface BaseMetasProps {
  icon: string;
  metaTittle: string;
  currentDuration?: number;
  totalDuration?: number;
}

export function BaseMetas({
  icon,
  metaTittle,
  currentDuration,
  totalDuration,
}: BaseMetasProps) {
  return ( 
    <View className="flex flex-row items-center rounded-3xl px-4 bg-secondary/70 h-16">
      <FontAwesome5 name={icon} size={30} color="#fff" solid />
      <Text className="text-white font-bold ml-3">{metaTittle}</Text>
      <Text>
        {currentDuration} / {totalDuration}
      </Text>
      <Pressable className="ml-auto w-11 h-11 flex items-center justify-center bg-white rounded-full cursor-pointer">
        <FontAwesome5 className="ml-1"  name="play" size={16} color="#60a5fa" solid />
      </Pressable>
    </View>
  );
}
