//https://rapidapi.com/kaushiksheel9/api/burgers-hub

import React, {useState, useEffect} from 'react';

import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';



export default function App() {

  const [data, setData] = useState([]);
  const [description, setDescription] = useState([]);
  const [loading, setLoading] = useState(true);

 

  const options = {
	method: 'GET',
  
	headers: {
		'X-RapidAPI-Key': '279d1aff6dmsh27ebf12402d0df5p1c564bjsn78394078495d',
		'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
	}
};

useEffect(() => {

fetch('https://burgers-hub.p.rapidapi.com/burgers', options)
	.then(response => response.json())
  .then((json) => {
    setData(json.name)
    })
	.then(response => console.log(response))
	.catch(err => console.error(err))
  .finally(() => setLoading(false))

 }, data);

  return (
    <View style={styles.container}>
      {loading ? <Text>Loading.....</Text> :(
      <View>
      
     <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id}, {item.name}</Text>
            )}
          />
      </View>
          )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
});
