import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

const RatingTab = (props: any) => {
  const [chosenRating, setChosenRating] = useState<any>();

  const onHandlePress = () => {
    if (props?.rating === chosenRating) {
      setChosenRating("");
    } else {
      setChosenRating(props?.rating);
    }
  };

  return (
    <TouchableOpacity onPress={() =>onHandlePress()}>
      <View
        style={[
          styles.container,
          {
            borderColor: chosenRating === props?.rating ? "#178F83" : "#F3F3F3",
          },
        ]}
      >
        <Text>{props?.rating}</Text>
        <AntDesign name="star" size={16} color="#FCD240" />
      </View>
    </TouchableOpacity>
  );
};

export default RatingTab;

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
});
