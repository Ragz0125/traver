import { FlatList, StyleSheet, Text, View } from "react-native";
import Drawer from "../drawer";
import FavoriteCard from "../favoriteCard";
import CategoryTab from "../categoryTab";
import { Category } from "@/constants";
import RatingTab from "../ratingTab";
import Button from "../Button";

const Filter = ({ open, onClose }: any) => {
  return (
    <Drawer isVisible={open} onClose={onClose}>
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.title}>Filter</Text>
        </View>
        <Text style={styles.title}>Category</Text>
        <FlatList
          data={Category}
          renderItem={(item: any) => (
            <View style={{ marginRight: 10 }}>
              <CategoryTab path={item?.item?.path} title={item?.item?.title} />
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text style={styles.title}>Star Review</Text>
      <FlatList
        data={[1, 2, 3]}
        renderItem={(item: any) => (
          <View style={{ marginRight: 10 }}>
            <RatingTab rating={item?.item} />
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.row}>
        <Button title={"Clear All"} isPrimary={false} onPress={onClose}/>
        <Button title={"Apply"} isPrimary={true} onPress={onClose}/>
      </View>
    </Drawer>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {},
  center: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    marginTop: 10,
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
