import Footer from "@/components/common/Footer";
import Header from "@/components/common/header";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FacilityTab from "@/components/common/FacilityTab";
import { Facilities } from "@/constants";

const DetailsPage = () => {
  const router = useRouter();
  const { place } = useLocalSearchParams();

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={place} page={"details"} />
        <View style={styles.pageLayout}>
          <View style={styles.pageWrapper}>
            <View style={styles.imageBackground}>
              <ImageBackground
                source={require("../../assets/images/kuta-beach.jpg")}
                resizeMode="cover"
                style={styles.image}
              >
                <View style={styles.row}>
                  <View />
                  <MaterialIcons name="verified" size={20} color="#FCD240" />
                </View>
                <View style={styles.bottom}>
                  <View style={styles.flex}>
                    <Text style={styles.bold}>{place}</Text>
                  </View>

                  <View style={styles.flex}>
                    <Ionicons name="location-outline" size={16} color="#fff" />
                    <Text style={styles.semiBold}>Bali, Indonesia</Text>
                  </View>
                  <View style={styles.flex}>
                    <Text style={styles.semiBold}>
                      100+ people have explored this
                    </Text>
                  </View>
                  <View style={styles.flex}>
                    <Text style={[styles.bold, { fontSize: 14 }]}>4.8</Text>
                    <Ionicons name="star" size={14} color="gold" />
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.content}>
              <Text style={styles.textBold}>What's included?</Text>
              <View>
                <FlatList
                  data={Facilities}
                  renderItem={(item) => (
                    <View style={{ marginRight: 10 }}>
                      <FacilityTab
                        title={item.item.title}
                        icon={item.item.icon}
                      />
                    </View>
                  )}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <Text style={[styles.textBold, { paddingTop: 10 }]}>About</Text>
              <View>
                <Text style={styles.body}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Text>
                <Text style={styles.body}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  pageLayout: {
    height: "100%",
    width: "100%",
  },
  pageWrapper: {
    padding: 25,
    paddingTop: 35,
  },
  imageBackground: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    padding: 15,
    display: "flex",
    justifyContent: "space-between",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
  },
  bold: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 700,
  },
  semiBold: {
    fontSize: 14,
    color: "#fff",
    fontWeight: 400,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingBottom: 5,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    paddingBottom: 70,
    paddingTop: 10,
  },
  body: {
    lineHeight: 24,
    fontSize: 12,
    paddingTop: 10,
  },
});
