import { useEffect, useState } from "react";
import yelp  from "../api/yelp";

export default ()=>
{
    const [results, setResults] = useState([]);
    const[errorMessage, setErrorMessage] = useState('');
  
    const searchApi = async (searchTerm) => {
      //console.log('searchAPi started: '); console.log({searchTerm});
      try {
        const response = await yelp.get("/search", {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'Melbourne'
          },
        });
  
      //   const response = await axios.create({
      //     //baseURL: 'https://api.yelp.com/v3/businesses/search?limit=50&term=pasta&location=Melbourne',
      //     baseURL: 'https://api.yelp.com/v3/businesses',
      //     headers: {
      //       'Authorization': 'Bearer q12Wr3yKHnTocmd-XsOhi2T051ZDgLkV1N70bgmSa9cBLuVBuwMiid_dp8sApRK46yPqHzeIxVJ1vYN-2Fj0hQQjJiNwxxSIJGJ_d_mvCXNdFejLtANh0vo16-fAY3Yx'
      //     }
      //   }).get('/search',{
      //     params:{
      //         limit:10,
      //         term:'pasta',
      //         location: 'Melbourne'
      //     }
      //   });
  
        //console.log(response);
        //console.warn(response.data.businesses)
        setResults(response.data.businesses);
        //console.log("searchAPi ended");
      } catch (e) {
        console.error(e);
        setErrorMessage("something went wong '${e}'")
      }
    };
    
    useEffect(()=>{searchApi('pizza')},[]); // Call only once at application startup

    return [searchApi, results, errorMessage];
}