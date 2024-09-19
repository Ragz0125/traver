import CategoryTab, { CategoryTabProps } from "@/components/common/categoryTab";
import ExploreCard from "@/components/common/exploreCard";
import FavoriteCard from "@/components/common/favoriteCard";
import WelcomeHeader from "@/components/common/welcomeHeader";
import { Category, Colors } from "@/constants";
import { router, Tabs, useRouter } from "expo-router";
import { useEffect } from "react";
import {
  FlatList,
  LogBox,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={styles.pageLayout}>
          <View style={styles.pageWrapper}>
            <WelcomeHeader />

            <Text style={styles.textBold}>Where do you</Text>
            <Text style={styles.textBold}>want to explore today?</Text>

            <View style={{ paddingTop: 15 }}>
              <TouchableOpacity>
                <TextInput
                  style={styles.inputField}
                  placeholder="Search Destination"
                  placeholderTextColor={"#BABABA"}
                  onPress={() => router.push("/search")}
                />
              </TouchableOpacity>
            </View>

            <View style={{ paddingTop: 15 }}>
              <Text style={styles.semiBoldText}>Choose Category</Text>
              <FlatList
                data={Category}
                renderItem={(item: any) => (
                  <View style={{ marginRight: 10 }}>
                    <CategoryTab
                      path={item?.item?.path}
                      title={item?.item?.title}
                    />
                  </View>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={{ paddingTop: 15 }}>
              <Text style={styles.semiBoldText}>Favorite Places</Text>
              <FlatList
                data={[1, 2, 3]}
                renderItem={(item: any) => (
                  <View style={{ marginRight: 10 }}>
                    <FavoriteCard />
                  </View>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            <View style={{ paddingTop: 15 }}>
              <Text style={styles.semiBoldText}>Popular Package</Text>
              <FlatList
                data={[1, 2, 3]}
                renderItem={(item: any) => (
                  <View style={{ marginRight: 10 }}>
                    <ExploreCard />
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  pageLayout: {
    height: "100%",
    width: "100%",
  },
  pageWrapper: {
    padding: 25,
    paddingTop: 35,
  },
  textBold: {
    fontSize: 26,
    fontWeight: "bold",
  },

  semiBoldText: {
    fontSize: 16,
    fontWeight: "500",
  },

  inputField: {
    height: 50,
    width: "100%",
    backgroundColor: Colors.lightGray,
    paddingLeft: 15,
    borderRadius: 15,
  },
});
