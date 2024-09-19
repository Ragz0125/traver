import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const HomeScreen = () => {
  const router = useRouter();

  const ring1Animation = useSharedValue(0);
  const ring2Animation = useSharedValue(0);

  const getAnimation = () => {
    ring1Animation.value = 0;
    ring2Animation.value = 0;
    setTimeout(
      () => (ring1Animation.value = withSpring(ring1Animation.value + 120)),
      100
    );
    setTimeout(
      () => (ring2Animation.value = withSpring(ring2Animation.value + 80)),
      200
    );

    setTimeout(()=> router.push("/details"), 2500)
  };

  useEffect(() => {
    getAnimation();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle1, { padding: ring1Animation }]}>
        <Animated.View style={[styles.circle2, { padding: ring2Animation }]}>
          <Image source={require("../assets/images/logoBlack.png")} />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcd240",
  },
  circle1: {
    height: 140,
    width: 140,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    borderRadius: 130,
  },
  circle2: {
    height: 50,
    width: 50,
    backgroundColor: "#eee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 75
  },
});
