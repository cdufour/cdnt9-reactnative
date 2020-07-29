import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Demo from './components/Demo'
import Demo2 from './components/Demo2'
import Counter from './components/Counter'
import PlayerList from './components/PlayerList'
import PlayerFetch from './components/PlayerFetch'
import Example from './components/Example'
import { LangProvider } from './contexts/LangContext'
import ContactsDemo from './components/ContactsDemo'
import LocationDemo from './components/LocationDemo'

// function hello {console.log('hello')}

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

  let contacts = null;
  if (Platform.OS === 'android') {
    contacts = <ContactsDemo />
  }

  return (
    <View style={styles.container}>
      <LangProvider>
        <Text>Formation React Native ()</Text>
        {/* <Demo />
        <Button 
          onPress={changeAuth} 
          title={ authenticated ? 'Déconnexion' : 'Connexion' } 
          color={btnColorHexa} />
        <Demo2 authenticated={authenticated} />
        <Demo2 authenticated={authenticated} />
        <Counter /> 
        <PlayerList  />
        <PlayerFetch api="http://google.com" />
        <Example />
        <PlayerList  />*/}

        { contacts }
        <LocationDemo />

      </LangProvider>
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
