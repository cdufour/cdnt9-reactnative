import React, { useState } from 'react';
import { Text, View, Button, TextInput, ImagePropTypes } from 'react-native';

export default function PlayerForm(props) {

    const [lastname, setLastname] = useState('')

    return (
        <View>
            <Text>Ajout d'un joueur</Text>
            <TextInput 
                onChangeText={text => setLastname(text)}
                value={lastname} />
            <Button 
                onPress={() => props.onSave(lastname)} 
                title="Enregistrer" />
        </View>
    )

}