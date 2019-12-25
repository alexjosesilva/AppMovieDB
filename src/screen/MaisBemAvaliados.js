import React, { Component } from 'react';
import { View , Text, StyleSheet, Image, Button} from 'react-native';


import styles from '../css/style';

class MaisBemAvaliados extends Component {

  static navigationOptions ={
    drawerLabel: 'Mais Bem Avaliado',
    drawerIcon: ({ focused,tintColor }) => (
      <Image
        source={require('../img/maisavaliado.jpg')}
      />
    )
  }

  render(){
    return (
       <View style={styles.container}>

        <Text>MaisBemAvaliadosScreen</Text>

        <Button
              onPress={() => this.props.navigation.openDrawer()}
              title="Menu"
            />

       </View>
      );
  }
    
}

export default MaisBemAvaliados;

