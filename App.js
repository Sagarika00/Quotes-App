import React, { Component } from 'react';
import { StyleSheet, Linking, Text, View, Button } from 'react-native';
import axios from 'axios';


class App extends Component {
   render() {
      return (
         <View style={styles.container}>
            <Text style={{color: "white", padding: 60, fontSize: 30}}>Random Quotes</Text>

         </View>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#d823e8',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});

export default App;
