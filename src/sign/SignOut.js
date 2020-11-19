import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';

import { Auth } from 'aws-amplify'

export default function SignOut(){
  Auth.signOut()
      .then(() => {
        this.props.navigation.navigate('Tabs')
      })
      .catch(err => {
        console.log('err: ', err)
      });
}
