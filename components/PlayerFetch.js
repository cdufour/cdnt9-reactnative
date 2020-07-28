import React from 'react';
import { View, Text, Button } from 'react-native';
import { getPlayers } from '../services/Player'

// Composant OO (classe)
export default class PlayerFetch extends React.Component {

    constructor(props) {
        console.log('1. constructor')
        super(props)
        this.state = {
            players: [], // autre valeur possible : null
            title: 'PlayerFetch'
        }
    }

    componentDidMount() {
        // hook lifecycle approprié pour les appels asynchrones
        // au moment où le composant est monté (inséré dans la UI)
        console.log('2. componentDidMount')
        // fetch('http://api.opusidea.net/player')
        //     .then(res => res.json())
        //     .then(res => {
        //         this.setState({ players: res.players })
        //     })
        
        // Equivalent par utilisation d'un service
        getPlayers()
            .then(res => res.json())
            .then(res => this.setState({ players: res.players }))
    }


    render() {
        console.log('3. render')

        // if (!this.state.players) {
        //     return (<View><Text>Aucun joueur</Text></View>)
        // }

        // Exemple: affiche d'un composant de chargement si le tableau de joueurs en vide
        // if (this.state.players.length === 0) return <Loading />

        return(
            <View>
                <Text>{ this.state.title }</Text>
                <Text>{ this.props.api }</Text>
                <Button 
                    onPress={() => this.setState({ title: 'Todo bem' })}
                    title="Click" />

                <Text>Nombre de joueurs: {this.state.players.length}</Text>
            </View>
        )
    }

}