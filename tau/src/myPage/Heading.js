import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Heading = () => (
    <View style={styles.header}>
        <TouchableOpacity>
            <Image style={styles.alert} source = {require('../../img/alert.png')} />
          </TouchableOpacity>
        <Text style={styles.headerText}>
            Welcome!
        </Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        flex:1,
        alignSelf: 'stretch', 
    },
    headerText: {
        position: 'absolute',
        top: '5%',
        width: '100%',
        textAlign: 'center',
        fontSize: 25,
        color: '#000000',
        fontWeight: '100',
    },
    alert: {
        alignSelf: 'flex-end',
        resizeMode: 'contain',
        right: '5%',
        width: 30,
    }
})

export default Heading