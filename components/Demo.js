import React from 'react';
import { Text } from 'react-native';

export default function Demo() {
    const login = true
    let title = ""
  
    //title = login ? "Connecté" : "Déconnecté"
    //return (<Text>{ title }</Text>)
  
    if (login) {
      return (<Text>Connecté</Text>)
    } else {
      return (<Text>Déconnecté</Text>)
    }
  }