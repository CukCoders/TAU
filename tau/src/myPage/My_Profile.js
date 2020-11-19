import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

const My_Profile = () => (
    <View style={styles.InfoContainer}>
        <Text style = {styles.info_MyInfo}> 내 정보 </Text>
        <TouchableOpacity>
        <Text style = {styles.info_input_major}> 전공입력 </Text>
        </TouchableOpacity>
         <TouchableOpacity>
         <Text style = {styles.info_input_StuNum}> 학번입력 </Text>
         </TouchableOpacity>
          <Text style = {styles.info_account_name}> 예금주: 쿠코더스 </Text>
          <Text style = {styles.info_bank_name}> 은행명: 국민은행 </Text>
          <Text style = {styles.info_account_num}> 계좌번호: 937702-00-001398 </Text>
    </View>
)

const styles = StyleSheet.create({
    InfoContainer: {
        borderTopWidth: 1,
        alignItems: 'flex-start',
        position: 'absolute',
        paddingTop: 25,
        top: '38%',
        left: '10%'
    },
    info_MyInfo:{
        right: '5%',
        fontWeight: 'bold',
        fontSize: 20,
    },
    info_account_name: {
        marginTop: 30,
        fontSize: 15,
    },
    info_account_num:{
        marginTop: 10,
        fontSize: 15,
    },
    info_bank_name:{
        marginTop: 10,
        fontSize: 15,
    },
    info_input_StuNum:{
        marginTop: 10,
        fontSize: 15,
        color: '#B0B0AE'
    },
    info_input_major:{
        marginTop: 20,
        fontSize: 15,
        color: '#B0B0AE'
    },
})

export default My_Profile