import React from 'react';
import { Text } from 'react-native';

export default function Demo2(props) {
    if (props.authenticated === true) {
      return (<Text>Connecté</Text>)
    } else {
      return (<Text>Déconnecté</Text>)
    }
  }