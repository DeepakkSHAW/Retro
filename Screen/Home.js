import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import useRestaurant from "../hooks/useRestaurant";
import RestaurantList from "../Components/RestaurantList";

const Home = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useRestaurant();

  const filterResultsByPrice = (price) => {
    return results.filter((r) => {
      return r.price === price;
    });
  };

  return (
    <View style={{flex:1}}>
      <Text style={styles.header}>JAGRUTI Resto Search</Text>

      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onDone={() => {
          //console.log('onDone triggered.')
          searchApi(term);
        }}
      />
      {/* <Text>{term}</Text> */}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found [{results.length}] results.</Text> */}
      <ScrollView>
        <RestaurantList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <RestaurantList
          results={filterResultsByPrice("$$")}
          title="Bit Pricer"
        />
        <RestaurantList
          results={filterResultsByPrice("$$$")}
          title="Big Spender!"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default Home;
