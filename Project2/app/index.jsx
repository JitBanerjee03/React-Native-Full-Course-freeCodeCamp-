import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PasswordGenerator from "./Components/PasswordGenerator";

export default function Index() {
  return (
    <SafeAreaProvider>
      <PasswordGenerator/>
    </SafeAreaProvider>
  );
}
