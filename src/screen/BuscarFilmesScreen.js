import React, { Component } from 'react';
import { View , Text, StyleSheet} from 'react-native';



class BuscarFilmesScreen extends Component {
  render(){
    return (
       <View style={styles.container}>

        <Text>BuscaFilmesScreen</Text>

       </View>
      );
  }
    
}

export default BuscarFilmesScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C5E6EE'
    }

})