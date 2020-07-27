import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function PlayerDetail(props) {

    const { id, lastname } = props.data

    //if (lastname.includes('do')) return <View><Text>Fais dodo !</Text></View>

    return (
        <View>
            <Text>{lastname}</Text>
            <Button onPress={() => props.onDelete(id)} title="Suppr" />
        </View>
    )
}