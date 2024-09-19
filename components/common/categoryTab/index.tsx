import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface CategoryTabProps {
  path: any;
  title: String;
}

const CategoryTab = (props: CategoryTabProps) => {
  const [chosenCategory, setChosenCategory] = useState<any>();

  const onHandlePress = () => {
    if (props?.title === chosenCategory) {
        setChosenCategory("")
    } else {
      setChosenCategory(props?.title);
    }
  };

  return (
    <TouchableOpacity onPress={() => onHandlePress()}>
      <View
        style={[
          styles.container,
          {
            borderColor:
              chosenCategory === props?.title ? "#178F83" : "#F3F3F3",
          },
        ]}
      >
        <View style={styles.iconWrap}>
          <Image source={props?.path} />
        </View>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>{props?.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryTab;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    maxWidth: 140,
    minWidth: "100%",
    height: 60,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#F3F3F3",

    display: "flex",
    alignItems: "center",
    paddingLeft: 5,
    flexDirection: "row",
    gap: 10,
    paddingRight: 10,
  },
  iconWrap: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#FAFAFA",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
