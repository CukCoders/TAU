import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const My_profile_bot = () => (
        <View style = {styles.cardProfile}>
          <TouchableOpacity> 
            <Text style = {styles.change_PW}> 비밀번호 변경 </Text>
             </TouchableOpacity>
          <TouchableOpacity>
             <Text style = {styles.logout}> 로그아웃 </Text>
              </TouchableOpacity>
          <TouchableOpacity> 
            <Text style = {styles.unSubscriber}> 회원탈퇴 </Text> 
            </TouchableOpacity>
        </View>  
)

const styles = StyleSheet.create({
    cardProfile: {
        borderTopWidth: 1,
        alignItems: 'flex-start',
        position: 'absolute',
        paddingTop: 10,
        bottom: '13%',
        left: '10%'
      },
      logout: {
        marginTop: 10,
        fontSize: 15,
        color: '#B0B0AE'
      },
      change_PW: {
        marginTop: 10,
        fontSize: 15,
        color: '#B0B0AE'
      },
      unSubscriber: {
        marginTop: 10,
        fontSize: 15,
        color: '#B0B0AE'
      },
})

export default My_profile_bot