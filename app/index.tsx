import { Text, View, ScrollView  } from "react-native";
import { BaseMetas } from "../src/components/BaseMetas";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
   <ScrollView style={{ flex: 1 }}  
      contentContainerStyle={{
        paddingTop: statusBarHeight + 12,
        paddingHorizontal: 12,
        paddingBottom: 12,
        backgroundColor: "#b3b3b3",
        height: "100%",
      }}
    >
      <View className="p-4 bg-white rounded-3xl shadow-lg min-h-[200px]">
        <BaseMetas icon="book" metaTittle="ler livro 3" totalDuration={100} />
      </View>
    </ScrollView>
  );
}
