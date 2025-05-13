import { Text, View, ScrollView  } from "react-native";
import { BaseMetas } from "../src/components/BaseMetas";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-gray-300 px-4 pt-4">
      <View className="bg-white p-4 rounded-3xl shadow-lg">
        
        <BaseMetas icon="book" metaTittle="ler livro 3" currentDuration={39} totalDuration={30}/>
      </View>

    </ScrollView>
  );
}
