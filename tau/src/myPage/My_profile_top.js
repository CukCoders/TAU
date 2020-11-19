import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const My_Profile_top = () => (
        <View style = {styles.cardProfile}>
          <Text style = {styles.cP_Name}> 쿠코더스 님 </Text>
          <Text style = {styles.cP_ID}> cukcoders </Text>
          <Text style = {styles.cP_Email}> cukcoders@catholic.ac.kr </Text>
          <Text style = {styles.cP_School}> 가톨릭대학교 </Text>
        </View>  
)

const styles = StyleSheet.create({
    cardProfile: {
        alignItems: 'flex-start',
        position: 'absolute',
        top: '13%',
        right: '12%',
      },
      cP_Name: {
        fontSize: 25,
        fontWeight: 'bold'
      },
      cP_ID: {
        marginTop: 10,
      },
})

export default My_Profile_top