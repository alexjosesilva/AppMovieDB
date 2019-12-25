import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, Button, FlatList} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import styles from '../css/style';

export default class EmCartaz extends Component{

  static navigationOptions ={
    drawerLabel: 'Em Cartaz',
    drawerIcon: ({ focused,tintColor }) => (
      <Image
        source={require('../img/emcartaz.jpg')}
      />
    )
  }


  constructor(props){
    super(props);
    this.state = { 
      data: []
    }
  }

  loadUsers = () => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?results=1&language=pt-BRS&api_key=4b8623404dd34414db58110eca7b4381")
   //fetch("https://apiredeindustrial.herokuapp.com/api/v1/filme/emcartaz/")
    .then(response => response.json() )
    .then(response => {
      this.setState ({
        data: response.results || []
      })
    })
  }

  componentDidMount(){
    this.loadUsers();
  }


  render(){
    return(
      <View style={styles.container}> 

          <FlatList 
              data={this.state.data}
            
              renderItem={ ({item}) => ( 
              
              <View style={styles.line}>
                   <Image
                    source={{uri:"https://image.tmdb.org/t/p/w500/"+item.backdrop_path}}
                    style={styles.avatar}
                  />
                  <View style={styles.info}>
                    <Text style={styles.name}>{item.original_title}</Text>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.email}>{item.original_language}</Text>
                  </View>
                </View>

              )}
              
              keyExtractor={item =>item.email}

          />
            <Button
              onPress={() => this.props.navigation.openDrawer()}
              title="Menu"
            />
      </View>
    )
  }
}
