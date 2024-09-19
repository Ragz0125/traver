import { Colors } from "@/constants";
import { Image, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const WelcomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.userImage}>
          <Image
            source={require("../../../assets/images/profile.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.welcomeText}>Hello, Aarish!</Text>
      </View>
      <View>
        <Ionicons name="notifications-outline" size={24} color="black"/>
      </View>
    </View>
  );
};

export default WelcomeHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: Colors.light.backgroundColor,
    borderWidth: 3,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "700",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});
