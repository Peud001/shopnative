import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../config/firebaseConfig";

const addNew = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default function Page() {
  return (
    <SafeAreaView className="h-full">
       <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
      <View className="flex-1 items-center justify-center bg-second">
        <Text className="text-first">Welcome to Bush Xpress!</Text>
        <Link href='home' className="text-first font-bold">Start Shopping</Link>
        <TouchableOpacity onPress={addNew}>
          <Text>Press Me</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView>
  );
}

