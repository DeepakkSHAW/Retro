import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const RestaurantDetail = ({ result})=> {
    //if(!result.image_url){result.image_url=require('../assests/missing.jpg')}

    return <View style={styles.container}>
        <Image style={styles.imageStyle} source={result.image_url? {uri: result.image_url}:require('../assets/missing.jpg') } />
        <Text style={styles.RestoNameStyle}>{result.name}</Text>
        <Text>{result.rating} starts, {result.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    imageStyle:{width:250, height:120, borderRadius: 10, marginBottom:5},
    RestoNameStyle:{fontWeight: "bold"},
    container:{marginLeft:15}
});

export default RestaurantDetail;