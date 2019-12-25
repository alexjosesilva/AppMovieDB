import React, { Component } from 'react';
import { View , Text, StyleSheet, Image, Button} from 'react-native';

import styles from '../css/style';


class FilmesPopulares extends Component {

  static navigationOptions ={
    drawerLabel: 'Filmes Populares',
    drawerIcon: ({ focused,tintColor }) => (
      <Image
        source={require('../img/popular.png')}
      />
    )
  }

  render(){
    return (
       <View style={styles.container}>

        <Text>FilmesPopularesScreen</Text>

        <Button
              onPress={() => this.props.navigation.openDrawer()}
              title="Menu"
            />

       </View>
      );
  }
    
}

export default FilmesPopulares;

