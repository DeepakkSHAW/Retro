import React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onDone}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput 
      autoCapitalize = "none"
      autoCorrect = "{false}"
      placeholder = "Search"
      style={styles.inputStyle}

      value={term}
      onChangeText={onTermChange}
      onEndEditing ={onDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: "row",
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },

  inputStyle: {
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
