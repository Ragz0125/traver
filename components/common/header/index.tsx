import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";

const Header = (props: any) => {
  const router = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{props?.title}</Text>
      <TouchableOpacity onPress={() => props?.setOpenFilter(true)}>
        {props?.page === "details" ? (
          <></>
        ) : (
          <AntDesign name="filter" size={24} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    padding: 25,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    shadowColor: "#F3F3F3",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
  },
});
