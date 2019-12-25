import React, {Component} from 'react';
import {Alert, Text, View, Image, TextInput, TouchableOpacity, Linking} from 'react-native';
import Mene from '../Menu';
import styles from '../css/style';
import Routes from '../Routes';

export default class Login extends Component{

  /**
   * Validar espacos em branco
   * Validar Senha
   * Validar login
   */
  validarLogin = () => {
    Alert.alert('Validar Login e Senha')
  }

  state={
    nome: ''
  }

  render(){
    return(
        <View style={styles.container}>
           <Image
              source={require('../img/logo.png')}
              style={styles.logo}
             />
            
          <TextInput 
            placeholder="Inserir login"
            onChangeText={ text => this.state.nome = text}
            style={styles.imput}
          />

          <TextInput 
            placeholder="Inserir senha"
            secureTextEntry={true}
            style={styles.imput}
          />
          
          <TouchableOpacity
             style={styles.botao}
             //onPress={()=>{this.validarLogin()}}
             onPress={()=>{this.props.navigation.navigate('Home', {'nome':this.state.nome}) }}
          >
            <Text style={styles.textbotao}>
              Login
            </Text>
          </TouchableOpacity>

          <Text 
            style={styles.recuperarConta}
            onPress={() => this.props.navigation.navigate('RecuperarConta') }
          >
            Recuperar Conta
          </Text>

        </View>
    );
  }
}


