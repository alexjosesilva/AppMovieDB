import React, {Component} from 'react';
import { View, Text, Image, ScrollView , Button} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


import styles from '../css/style';

export default class Home extends Component{

  static navigationOptions ={
    drawerLabel: 'Home',
    drawerIcon: ({ focused,tintColor }) => (
      <Image
        source={require('../img/home.jpg')}
      />
    )
  }

  render(){

    return(
            

          <View style={styles.container}>
            <Text style={styles.texto}>
              Seja Bem Vindo !!
            </Text>

            <Button
              onPress={() => this.props.navigation.openDrawer()}
              title="Menu"
            />

          </View>
        );
    }
}


