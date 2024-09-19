import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const FavoriteCard = () => {
  const stars = [1, 2, 3, 4];
  return (
    <View style={styles.cardWrapper}>
      <ImageBackground
        source={require("../../../assets/images/kuta-beach.jpg")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.cover}>
          <View style={styles.top}>
            <View />
            <TouchableOpacity style={{ zIndex: 1 }}>
              <Ionicons name="heart-circle-outline" size={30} color="red" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottom}>
            <Text style={styles.title}>Kuta Beach</Text>
            <View style={styles.row}>
              <Ionicons name="location-outline" size={16} color="#fff" />
              <Text style={styles.location}>Bali, Indonesia</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="star" size={14} color="gold" />

              <Text style={styles.location}>4.5</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: 175,
    height: 235,
    marginTop: 15,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 20,
  },
  cover: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  top: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottom: {
    display: "flex",
    padding: 15,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "semibold",
    paddingBottom: 10,
  },

  location: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "semibold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    paddingTop: 5,
    color: "#fff",
    alignItems: "center",
  },
});
