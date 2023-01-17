import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RestaurantDetail from "./RestaurantDetail";

const RestaurantList = ({ title, results }) => {
  //console.log({results});
  return (
    <View style={styles.container}>
      <Text style={styles.styleTitle}>
        {title} - {results.length} Restaurant found.
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <RestaurantDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  styleTitle: { fontSize: 15, marginLeft:15, fontWeight: "bold", marginBottom:5},
  container: {marginBottom:5}
});

export default RestaurantList;
