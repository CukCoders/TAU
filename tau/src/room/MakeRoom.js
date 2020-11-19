import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet,Switch} from 'react-native';

export default function MakeRoom(){
    
    const [switchValue, setSwitchValue]=useState(false);
    const toggleSwitch=(value)=>{
        setSwitchValue(value);
    }

        return(
            <View
            style={styles.container}>
                <View
                style={styles.roomSetting}>
                    <Text>방 설정</Text>
                </View>
                <View
                style={styles.textInputs}>
                    <TextInput
                    placeholder='출발지' />
                </View>
                <View
                style={styles.textInputs}>
                    <TextInput
                    placeholder='목적지' />
                </View>
                <View
                style={styles.textInputs}>
                    <TextInput
                    placeholder='출발 시간' />
                </View>
                <View
                style={styles.switchBtn}>
                    <Switch
                    trackColor={{
                        true:'#0F1738',
                        false:'#FFC500'
                    }}
                    thumbColor={
                        '#FFC500'
                    }
                    value={switchValue}
                    onValueChange={toggleSwitch}
                     />
                </View>
                <View
                style={styles.accountInfo}>
                    <Text>방장 정보</Text>
                </View>
                <View
                styles={style.edit}>
                    
                </View>
            </View>
        );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    roomSetting:{
        top:'20%',
        position:'absolute',
        marginLeft:'20%'
    },
    switchBtn:{
        alignItems:'center',
        position:'absolute',
        marginTop:'3%'
    },
    textInputs:{
        marginTop:'5%',
        position:'absolute',
        marginLeft:'20%'
    },
    accountInfo:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'5%'
    },
    editBtn:{
        marginLeft:'8%',
        position:'absolute',
        alignItems:'center',
        justifyContent:'center'
    }
});