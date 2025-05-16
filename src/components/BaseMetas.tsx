import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

interface BaseMetasProps {
  icon: string;
  metaTittle: string;
  currentDuration?: number;
  totalDuration?: number;
}

const currentDuration : number = 40;

function formatSecondsToTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const pad = (num: number) => String(num).padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export function BaseMetas({
  icon,
  metaTittle,
  totalDuration,
}: BaseMetasProps) {
  return (
    <View className="relative">
      {/* Barra de Progresso (Fundo Sólido) */}
      <View
        className="absolute left-0 top-0 h-16 rounded-3xl bg-secondary"
        style={{
          width: `${((currentDuration ?? 0) / (totalDuration ?? 1)) * 100}%`,
        }}
      />

      {/* Conteúdo Principal com Fundo Semi-Transparente */}
      <View className="flex flex-row items-center rounded-3xl bg-secondary/70 h-16 px-4">
        <FontAwesome5 name={icon} size={30} color="#fff" solid />
        <Text className="text-white font-bold ml-3">{metaTittle}</Text>
        <Pressable className="ml-auto w-11 h-11 flex items-center justify-center bg-white rounded-full">
          <FontAwesome5 name="play" size={16} color="#60a5fa" solid />
        </Pressable>
      </View>

      {/* Durações (Alinhadas e Visíveis) */}
      <View className="absolute bottom-[-17px]  left-0 right-0 px-4 flex flex-row justify-between">
        <Text className="text-secondary text-xs font-semibold">
          {formatSecondsToTime(currentDuration ?? 0)}
        </Text>
        <Text className="text-secondary text-xs font-semibold">
          {formatSecondsToTime(totalDuration ?? 0)}
        </Text>
      </View>
    </View>
  );
}
