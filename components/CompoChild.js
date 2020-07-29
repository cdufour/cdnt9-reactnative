import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function CompoChild(props) {
    return(
        <View>
            <Text>Composant Enfant ({props.data})</Text>
            <Button 
                title="Cry" 
                onPress={() => props.onCry()} />
        </View>
    )
}

