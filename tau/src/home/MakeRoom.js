import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default function Template(props) {
  return (
    <View style={{flex: 1}}>
       <Text style={styles.text2}>방 만들기</Text>

      <ScrollView style={styles.Container}>
        <View style={styles.box}>
          <Text style={styles.text}> 출발지 : </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}> 도착지 : </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}> 출발시간 : </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={{backgroundColor: `#707070`, width: `100%`, height: 1}} />
        <View style={{width: '100%'}}>
          <Text style={{color: '#707070', fontSize: 18, marginTop: 20}}>
            방장정보
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}> 은행명 : </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}> 계좌번호 : </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}> 예금주 : </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
      </ScrollView>
      <View style={{padding: 12}}>
        <View
          style={{
            backgroundColor: '#FDC408',
            width: `100%`,
            height: 50,
            flexDirection: `row`,
            alignItems: `center`,
            justifyContent: `center`,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>완료</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
  },
  box: {
    backgroundColor: `rgb(240,240,240)`,
    width: `100%`,
    height: 40,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  text: {
    marginLeft: 16,
    color: '#707070',
  },
  input: {
    flex: 1,
  },
  text2: {
    marginTop:20,
    marginLeft: 150,

    color: '#707070',
    alignItems: 'center',
    fontSize: 25
  },

});
