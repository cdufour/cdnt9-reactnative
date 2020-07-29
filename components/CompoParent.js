import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import CompoChild from './CompoChild'

export default function CompoParent() {

    const parentReaction = () => {
        console.log('Le parent réagit')
    }

    return(
        <View>
            <Text>Composant Parent</Text>
            <CompoChild data="Ulysse" onCry={parentReaction} />
        </View>
    )
}

