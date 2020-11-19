import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button
} from 'react-native';

import { Auth } from 'aws-amplify';

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    email: ''
  }
  onChangeText(key, value) {
    this.setState({ [key]: value })
  }
  signUp = () => {
    const { username, password, email } = this.state
    Auth.signUp({
      username,
      password,
      attributes: {
        email
      }
    })
    .then(() => console.log('successful sign up!'))
    .catch(err => console.log('Sign up err: ', err))
  }
  confirmSignUp = () => {
    const { username } = this.state
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          placeholder='User Name'
          onChangeText={val => this.onChangeText('username', val)}
          style={styles.input}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <TextInput
          placeholder='Password'
          onChangeText={val => this.onChangeText('password', val)}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={val => this.onChangeText('email', val)}
          style={styles.input}
        />
        <Button
          title="Sign Up"
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#4CAF50',
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    borderBottomWidth: 2,
    height: 50,
    borderBottomColor: '#4CAF50',
    margin: 10
  }
})

export default SignUp;