import { StyleSheet, View, Text } from "react-native";
import Button from "../Button";
import { Colors } from "@/constants";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        $745.00<Text style={styles.gray}> / Person</Text>
      </Text>
      <Button title={"Booking"} isPrimary={true} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    width: "100%",
    height: 70,
    padding: 25,

    position: "absolute",
    bottom: 0,

    borderTopWidth: 1,
    borderTopColor: "#F3F3F3",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    shadowColor: "#F3F3F3",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 5,
  },

  price: {
    color: Colors.orange,
    fontSize: 16,
    fontWeight: 700,
  },
  gray: {
    color: "#ABABAB",
    fontSize: 14,
    fontWeight: 400,
  },
});
