import {StyleSheet,Image} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#20B2AA'
    },
    texto:{
        color: '#fff'
    }, 
    logo:{
        width: 80,
        height: 80, 
        borderRadius: 30
    },
    imput:{
        marginTop: 10,
        width: 200,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 10
    },
    botao:{
        width:100,
        height:50,
        backgroundColor: '#f00',
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textbotao:{
        color: '#fff'
    },
    recuperarConta:{
        paddingTop:30,
        color: '#fff'
    },
    line:{
        height: 60,
        flexDirection: "row",
        borderBottomColor:"#ccc",
        borderBottomWidth: 1
      },
    avatar:{
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
        alignSelf: "center"
      }
  
  })

  export default styles;