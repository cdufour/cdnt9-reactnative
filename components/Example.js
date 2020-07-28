import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native'
import { getPlayers } from '../services/Player'

export default function Example() {
  const [count, setCount] = useState(0);

  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    // document.title = `Vous avez cliqué ${count} fois`;
    console.log(`Vous avez cliqué ${count} fois`)

    getPlayers().then(res => res.json()).then(res => { setCount(res.players.length) })
  }, []);

  return (
    <View>
      <Text>Vous avez cliqué {count} fois</Text>
      <Button title="Cliquez ici" onPress={() => setCount(count + 1)} />
    </View>
  );
}