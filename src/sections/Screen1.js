import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Screen1 extends Component {

	_goScreen2() {
		Actions.screen2({ texto: 'texto de prueba', title: 'titulo navigation'})
	}

    render() {
        return (
        	<View>
	        	<Text>Esta es la Screen1</Text>
	        	<Button
	        		onPress={ () => this._goScreen2() }
	        		title="Ir a la funcion 2"/>
        	</View>

        );
    }
}

