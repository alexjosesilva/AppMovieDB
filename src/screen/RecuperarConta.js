import React, {Component} from 'react';
import { Alert,View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../css/style';

export default class RecuperarConta extends Component{
    /*
    * 
    */
    validarRecuperarLogin = () => {
        Alert.alert('Mensagem Enviada!')
        this.props.navigation.navigate('Login')
      }


  render(){
    return(
            <View style={styles.container}>
                <Text>Recuperar Conta</Text>
            
                <TextInput 
                    style={styles.imput}
                    placeholder="digite a matricula"
                />
            
                <TouchableOpacity 
                    style={styles.botao}
                    onPress={() => this.validarRecuperarLogin()}
                >
                <Text style={styles.textbotao}>Recuperar</Text>   
                </TouchableOpacity>
            </View>
        );
    }
}
