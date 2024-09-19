/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { CategoryTabProps } from "@/components/common/categoryTab";

const primaryColor = "#FCD240";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: primaryColor,
    icon: "#687076",
    backgroundColor: primaryColor,
  },
  lightGray: "#FAFAFA",
  orange: "#FD5B1F",
};

export const Category: any = [
  {
    path: require("../assets/icons/beach.png"),
    title: "Beach",
  },
  {
    path: require("../assets/icons/mountain.png"),
    title: "Mountain",
  },
  {
    path: require("../assets/icons/forest.png"),
    title: "Forest",
  },
  {
    path: require("../assets/icons/fishing.png"),
    title: "Fishing",
  },
];

export const Facilities = [
  {
    title: "Flight",
    icon: "flight",
  },
  {
    title: "Hotel",
    icon: "hotel",
  },
  {
    title: "Transport",
    icon: "directions-bus",
  },
];
