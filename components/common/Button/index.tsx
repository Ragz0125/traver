import { Colors } from "@/constants";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ isPrimary, title, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: isPrimary ? "#FCD240" : "" },
          { borderColor: isPrimary ? "" : "#F3F3F3" },
          { borderWidth: isPrimary ? 0 : 2 },
        ]}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    backgroundColor: "#FCD240",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
