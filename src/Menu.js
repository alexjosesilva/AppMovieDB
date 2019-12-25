import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'




import LoginScreen from './screen/Login';
import Home from './screen/Home';
import EmCartaz from './screen/EmCartaz';
import Perfil from './screen/Perfil';
import RecuperarConta from './screen/RecuperarConta';
import MaisBemAvaliados from './screen/MaisBemAvaliados';
import FilmesPopulares from './screen/FilmesPopulares';




const Menu = createDrawerNavigator(
    {   
        Home,
        "Em Cartaz": EmCartaz,
        "Mais Bem Avaliados" : MaisBemAvaliados,
        "Filme Populares": FilmesPopulares,
        Perfil
       
    }
);  


export default createAppContainer(Menu);