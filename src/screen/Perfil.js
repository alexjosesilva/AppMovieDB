import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import styles from '../css/style';

export default class Perfil extends Component{

  static navigationOptions ={
    drawerLabel: 'Perfil',
    drawerIcon: ({ focused,tintColor }) => (
      <Image
        source={require('../img/perfil.jpg')}
      />
    )
  }

  render(){

    

    return(
          <View style={styles.container}>
            <Text style={styles.texto}>
              Tela Perfil
            </Text>


            <Button
              onPress={() => this.props.navigation.openDrawer()}
              title="Menu"
            />


          </View>
        );
    }
}


