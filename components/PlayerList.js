import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { players } from '../players'
import PlayerDetail from './PlayerDetail'
import PlayerForm from './PlayerForm'

export default function PlayerList() {

    // State
    const [playersState, setPlayersState] = useState(players)

    const deletePlayer = (playerId) => {
        let filteredPlayers = playersState.filter(player => player.id !== playerId)
        setPlayersState(filteredPlayers)
    }

    // let playersMapped = players
    //     .map(player => <Text key={player.id}>{player.lastname}</Text>
    // )

    
    // let playersMapped = playersState
    //     .map(player => {
    //         return (
    //             <View key={player.id}>
    //                 <Text >{player.lastname}</Text>
    //                 <Button onPress={() => deletePlayer(player.id)} title="Suppr" />
    //             </View>
    //         ) 
    //     })
    
    // let playersMapped = players
    //     .map(player => {
    //         if (player.lastname.includes('do')) {
    //             return <Text>Fait dodo</Text>
    //         } else {
    //             return <Text>{player.lastname.toUpperCase()}</Text>
    //         }
    //     })

    let playersMapped = playersState
        .map(player => 
            <PlayerDetail onDelete={deletePlayer} key={player.id} data={player} />)

    return (
        <View>
            <Text>Joueurs ({playersState.length})</Text>
            { playersMapped }
            <PlayerForm onSave={(lastname) => console.log(lastname)} />
        </View>
    )

}