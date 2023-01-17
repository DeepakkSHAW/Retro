import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HS from "./Screen/Home";
import RestoShow from "./Screen/RestaurantShowScreen";

const navigator = createStackNavigator(
  {
    myHome: HS,
    RestaurantShow: RestoShow,
  },
  {
    initialRouteName: "myHome",
    defaultNavigationOptions: {
      title: "Restaurant Business",
    },
  }
);

export default createAppContainer(navigator);
