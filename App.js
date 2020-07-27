import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Demo from './components/Demo'
import Demo2 from './components/Demo2'

// function hello {
//   console.log('hello')

// }

export default function App() {

  //let authenticated = false

  // utilisation du hook useState
  const [authenticated, setAuthenticated] = useState(false)
  

  const btnColorHexa = "#841584"
  const hello = () => console.log('hello')
  const changeAuth = () => {
    // authenticated = true
    setAuthenticated(!authenticated)
  }

  return (
    <View style={styles.container}>
      <Text>Formation React Native</Text>
      <Demo />

      <Button 
        onPress={changeAuth} 
        title={ authenticated ? 'Déconnexion' : 'Connexion' } 
        color={btnColorHexa} />
      <Demo2 authenticated={authenticated} />
      <Demo2 authenticated={authenticated} />
    </View>
  );
}

const styles = StyleSheet.create({ 
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
