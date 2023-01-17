import React, {useState,useEffect} from "react";
import { View, StyleSheet, Image,Text, FlatList } from "react-native";
import yelp  from '../api/yelp';

const RestaurantShowScreen = ({navigation})=>{
    const [results, setResults] = useState(null);
    const id = navigation.getParam('restoId');

    const getPhotos = async (id)=>{
        const response = await yelp.get(`/${id}`);
        setResults(response.data);   
    };

    useEffect(()=> { getPhotos(id); }, []); // Call once
   //console.log(results);
   //console.log(results?.photos.length);
   
   if(!results)  { return  <Text>Restaurant doesn't have picture to show</Text> } // null check if api returnn no photos.
   else if(!results?.photos) { return  <Text>Restaurant doesn't have picture to show</Text> } 
   //else {return <Text>All is well</Text> }
   //console.log(results.photos);

   return<View>
   <FlatList
    data={results.photos}
   keyExtractor = {(photo)=> photo}
   renderItem ={({item})=> {   
    //console.log(item)
       return <Image style={styles.photo} source={{uri: item}}/> 
    }}
   />
   {/* <Text>Restaurant Show ({results.photos.length}) - {results.name} - [{id}]</Text>  */}
    </View>
}

const styles = StyleSheet.create({
 photo:{ width: 200, height:200, margin: 10, borderColor: 'grey', borderWidth: 7, borderRadius: 15 },
});

export default RestaurantShowScreen;