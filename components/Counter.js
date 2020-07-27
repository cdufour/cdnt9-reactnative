import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter() {
    // le compteur à 0 pour valeur initiale
    const [counter, setCounter] = React.useState(0)

    let basta = null;
    if (counter > 10) basta = <Text>ça suffit !</Text>

    const onIncr = () => {
        if (counter > 10) {
            setCounter(0)
        } else {
            setCounter(counter + 1)
        }
    }
    
    return (
        <View>
            <Button 
                onPress={onIncr} 
                title={counter} />
            {/* <Text>{counter}</Text> */}
            { basta }
        </View>
    )
}