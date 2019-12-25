import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screen/Login';
import Home from './screen/Home';
import RecuperarConta from './screen/RecuperarConta';
import Menu from './Menu';

const Routes = createStackNavigator(
{
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home'
        }
    },
    RecuperarConta: {
        screen: RecuperarConta,
        navigationOptions: {
            headerTitle: 'Recuperar Conta'
        }
    }
}
)

export default createAppContainer(Routes);