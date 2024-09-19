import Header from "@/components/common/header";
import { Colors } from "@/constants";
import {
  FlatList,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ExploreCard from "@/components/common/exploreCard";
import { useEffect, useState } from "react";
import Drawer from "@/components/common/drawer";
import Filter from "@/components/common/Filter";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [openFilter, setOpenFilter] = useState<boolean>(true);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <>
      <Header title={"Search"} setOpenFilter={setOpenFilter} />
      <ScrollView>
        <View style={styles.pageLayout}>
          <View style={styles.pageWrapper}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Search Destination"
                placeholderTextColor={"#BABABA"}
                value={searchInput}
                onChange={(e: any) => setSearchInput(e.target.value)}
              />
            </View>
            {searchInput && (
              <Text style={styles.resultText}>
                We found 4 trip in "{searchInput}"
              </Text>
            )}
            {searchInput && (
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={(item) => <ExploreCard />}
              />
            )}
          </View>
        </View>
      </ScrollView>
      <Filter open={openFilter} onClose={()=>setOpenFilter(false)}/>
    </>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  pageLayout: {
    width: "100%",
    height: "100%",
  },
  pageWrapper: {
    paddingTop: 20,
    padding: 25,
  },
  inputField: {
    height: 50,
    width: "100%",
    backgroundColor: Colors.lightGray,
    paddingLeft: 15,
    borderRadius: 15,
  },
  inputContainer: {
    width: "100%",
  },
  resultText: {
    fontSize: 15,
    fontWeight: "600",
    paddingTop: 10,
  },
});
