import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants";
import { useState } from "react";
import { useRouter } from "expo-router";

const ExploreCard = () => {
  const [favourite, setFavourite] = useState<boolean>(false);
  const router = useRouter();

  const addToFavourites = () => {
    favourite ? setFavourite(false) : setFavourite(true);
  };

  return (
    <TouchableOpacity onPress={() => router.push("/details?place=Kuta Beach")}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require("../../../assets/images/kuta-beach.jpg")}
            resizeMode="cover"
            style={styles.imageCover}
          />
        </View>
        <View style={styles.wrapContent}>
          <View style={styles.row1}>
            <Text style={styles.title}>Kuta Resort</Text>
            <TouchableOpacity onPress={() => addToFavourites()}>
              {favourite ? (
                <Ionicons name="heart-sharp" size={24} color="#FD5B1F" />
              ) : (
                <Ionicons name="heart-outline" size={24} color="#ddd" />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.priceText}>$245.00</Text>
          </View>
          <View style={styles.row2}>
            <Ionicons name="star" size={14} color="gold" />
            <Text style={styles.location}>4.5</Text>
          </View>
          <View>
            <Text style={styles.description}>
              A resort is a place used for vacation, relaxation or as a day...
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 155,
    borderColor: "#f3f3f3",
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  image: {
    width: "35%",
    height: "100%",
    borderRadius: 20,
  },

  imageCover: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  wrapContent: {
    height: "100%",
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
  },

  row1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  row2: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  priceText: {
    fontSize: 15,
    color: Colors.orange,
    fontWeight: "500",
  },
  location: {
    fontSize: 14,
    fontWeight: "semibold",
  },
  description: {
    color: "#767676",
  },
});
