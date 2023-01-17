import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantDetail from "./RestaurantDetail";

const RestaurantList = ({ title, results, navigation }) => {
  //console.log({results});
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.styleTitle}>{title} - </Text>
        <Text style={styles.styleSubtext}>
          {" "}
          {results.length} Restaurant found.{" "}
        </Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantShow", { restoId: item.id })
              }
            >
              <RestaurantDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  styleTitle: {
    fontSize: 15,
    marginLeft: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  styleSubtext: {
    fontSize: 10,
    fontStyle: "italic",
  },
  container: { marginBottom: 5 },
});

export default withNavigation(RestaurantList);
