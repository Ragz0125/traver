import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const FacilityTab = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <MaterialIcons name={props?.icon} size={24} color="#FCD240" />
      </View>
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>{props?.title}</Text>
    </View>
  );
};

export default FacilityTab;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    maxWidth: 140,
    minWidth: "100%",
    height: 60,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#F3F3F3",

    display: "flex",
    alignItems: "center",
    paddingLeft: 5,
    flexDirection: "row",
    gap: 10,
    paddingRight: 10,
  },
  iconWrap: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#FAFAFA",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
