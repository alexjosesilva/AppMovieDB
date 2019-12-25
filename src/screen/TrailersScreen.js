import React, { Component } from 'react';
import { View , Text, StyleSheet} from 'react-native';



class TrailersScreen extends Component {
  render(){
    return (
       <View style={styles.container}>

        <Text>TrailersScreen</Text>

       </View>
      );
  }
    
}

export default TrailersScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C5E6EE'
    }

})