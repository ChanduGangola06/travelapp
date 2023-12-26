import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reuasble from "../../components/Reusable/reusable.style";
import { ReusableText, HeightSpacer } from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.style";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reuasble.container}>
      <View>
        <View style={reuasble.rowWithSpace("space-between")}>
          <ReusableText
            text={"Hey User!"}
            family={"regular"}
            size={TEXT.large}
            color={COLORS.black}
          />
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge} />

        <ReusableText
          text={"Places"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
