import { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const { height } = Dimensions.get("window");

const Drawer = (props: any) => {
  const slideAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (props?.isVisible) {
      // Slide up animation
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Slide down animation
      Animated.timing(slideAnim, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [props?.isVisible]);
  return (
    <Modal transparent={true} visible={props?.isVisible} animationType="none">
      <TouchableOpacity style={styles.overlay} onPress={props?.onClose} />
      <Animated.View
        style={[styles.drawer, { transform: [{ translateY: slideAnim }] }]}
      >
        {props?.children}
      </Animated.View>
    </Modal>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  drawer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
