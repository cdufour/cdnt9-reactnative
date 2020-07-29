import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import LangContext from '../contexts/LangContext'

export default function PlayerDetail(props) {
    const langCtx = React.useContext(LangContext)
    const { id, lastname } = props.data

    //if (lastname.includes('do')) return <View><Text>Fais dodo !</Text></View>

    return (
        <View>
            <Text>{lastname} ({ langCtx.lang })</Text>
            <Button onPress={() => {
                props.onDelete(id)
                // if (langCtx.lang === 'fr') {
                //     langCtx.setLang('it')
                // } else {
                //     langCtx.setLang('fr')
                // }
                
            }} title="Suppr" />
        </View>
    )
}