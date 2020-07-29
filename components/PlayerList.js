import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { players } from '../players'
import PlayerDetail from './PlayerDetail'
import PlayerForm from './PlayerForm'
import { generateRandomId } from '../utils'

export default function PlayerList() {

    // State
    const [playersState, setPlayersState] = useState(players)

    const deletePlayer = (playerId) => {
        let filteredPlayers = playersState.filter(player => player.id !== playerId)
        setPlayersState(filteredPlayers)
    }

    const addPlayer = (lastname) => {
        // idéalement, vérifier que l'id n'est pas déjà pris
        const id = generateRandomId(10, 1000)
        let player = { id, lastname }

        // Copie du state pour modification d'un tableau
        // Approche 1
        // "vraie" copie (par valeur et non par référence)
        // du tableau playersState grâce à slice
        // let playersCopy = playersState.slice()
        // playersCopy.push(player)
        // setPlayersState(playersCopy)

        // Approche 2
        setPlayersState([...playersState, player])
        
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
            <PlayerForm onSave={addPlayer} />
        </View>
    )

}