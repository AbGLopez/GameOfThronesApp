import React, { Component } from 'react'
import { View, Text, FlatList, Image, Button} from 'react-native'
import axios from 'axios'


export default class HousesList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			list: [],
			selected: null
		}
	}

	componentDidMount() {
		this.setState({ texto: 'texto cambiado'})

		axios.get('http://146.185.137.85/got/web/casas')
	   .then((response) => {
	   	    console.log("axios get response: ", response);
	   	    const mylist = response.data && response.data.records ? response.data.records : []
	   	    this.setState({ list: mylist })
	   })
	   .catch((error) => {
	   	    console.log('axios con error', error);
	   });
	}


	renderItem(item) {
		return (
			<View style={{ height: 200, backgroundColor: 'red', marginVertical: 10}}>
				<Text>{ item.nombre}</Text>
				<Text>{ item.lema }</Text>
				<Image
	          		style={{width: 50, height: 50}}
	          		source={{uri: item.image_dir}}
		        />

		        <Button
		        	title={'pULSA Y TE SACO UN LOG'}
		        	onPress={() => this.setState({selected: item})}
		        />
    		</View>
		)

	}

	render () {
		const nombre = this.state.selected ? this.state.selected.nombre : ''
		return (
			<View>
			
			<Text>{ 'Casa selecionada: ' + nombre }</Text>
			<FlatList
			  data={ this.state.list }
				  renderItem={ ({item}) => this.renderItem(item)}
			/>


			</View>
		);
	}
}