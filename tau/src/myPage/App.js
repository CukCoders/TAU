import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import Heading from './Heading';
import My_Profile from './My_Profile';
import My_profile_top from './My_profile_top';
import My_profile_bot from './My_profile_bot';

export default class App extends Component{
  render () {
    return (
      <View style={styles.container}>
      <My_Profile />
      <Heading />  
      <My_profile_top />
      <My_profile_bot />
      <View style = {styles.couponContainer}>
           <TouchableOpacity>
            <Image style={styles.mainPage_Coupon} source = {require('../../img/mainPage_Coupon.png')} />
          </TouchableOpacity>
          </View>
          <View style = {styles.historyContainer}>
           <TouchableOpacity>
            <Image style={styles.mainPage_History} source = {require('../../img/mainPage_History.png')} />
          </TouchableOpacity>
          </View>
          
            <Image style={styles.TAU_logo} source = {require('../../img/TAU_logo.png')} />
            
        <View style={styles.cardContainer}/>
        <View style = {styles.cardImageContainer}>
           <TouchableOpacity>
            <Image style={styles.cardImage} source = {require('../../img/mainPage_profile.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.on_off} source = {require('../../img/on_off.png')} />
          </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImageContainer:{
    alignItems: 'center',
    position: 'absolute',
    top: '8%',
    left: '10%',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#FBAE17',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15
  },
  cardImage:{
    width: 109,
    height: 90,
    borderRadius: 60,
  },

  couponContainer:{
    alignItems: 'center',
    position: 'absolute',
    top: '23%',
    right: '35%',
    backgroundColor: 'white',
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15
  },
  mainPage_Coupon:{
    width: 50,
    height: 50,
    borderRadius: 60,
  }, 
  historyContainer:{
    alignItems: 'center',
    position: 'absolute',
    top: '23%',
    right: '15%',
    backgroundColor: 'white',
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15
  },
  mainPage_History:{
    width: 50,
    height: 50,
    borderRadius: 60,
  },
  TAU_logo:{
    resizeMode: 'contain',
    width: 80,
    position: 'absolute',
    bottom: '0%',
    right: '7%',
  },
  on_off: {
    flexDirection: "column",
    resizeMode: 'contain',
    width: 40,
    top: '50%',
    left: '0%',
  }
});

