import React,{useState} from 'react';
import {View, Platform,StyleSheet,Image, TouchableOpacity, PermissionsAndroid,TextInput,Switch} from "react-native";
import {Button} from 'react-native-elements';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default function Main(){

    const [switchValue, setSwitchValue]=useState(false);
    const toggleSwitch=(value)=>{
        setSwitchValue(value);
    }
    return(
        <View
        style={styles.container}>
             <View
            style={styles.topMenu} />
            <View
            style={styles.drawer}>
                <TouchableOpacity>
                    <Image
                    source={require('../../img/drawer.png')} />
                </TouchableOpacity>
                </View>
                <View
                style={styles.searchMark}>
                    <TouchableOpacity>
                        <Image
                        source={require('../../img/search.png')} />
                    </TouchableOpacity>
                </View>
                <View
                style={styles.search}>
                    <TextInput
                    underlineColorAndroid='#0F1738'
                    placeholder='                     출발지를 입력하세요                    ' />
                </View>
                <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 37.485089,
                    longitude: 126.811579,
                    latitudeDelta: 0.0010,
                    longitudeDelta: 0.0015,
                }}>
                </MapView>
                <View
                style={styles.addRoom}>
                <TouchableOpacity>
                    <Image
                    source={require('../../img/add_room.png')} />
                </TouchableOpacity>
                </View>
                <View
                style={styles.currentLocation}>
                    <TouchableOpacity>
                        <Image
                        source={require('../../img/current_location.png')} />
                    </TouchableOpacity>
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
            </View>
        );
}

const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%'
        },
    map:{
        flex:1
    },
    current:{
        width:100,
        height:100,
        borderRadius:100/2,
        bottom:50,
        right:50
    },
    addRoom:{
        position:'absolute',
        top:'65%',
        alignSelf:'flex-end',
        marginRight:'5%',
        resizeMode:'contain'
    },
    currentLocation:{
        position:'absolute',
        top:'75%',
        alignSelf:'flex-end',
        marginRight:'5%'
    },
    topMenu:{
        marginTop:'13%',
        backgroundColor:'white'
    },
    drawer:{
        position:'absolute',
        marginLeft:'3%',
        top:'1.8%'
    },
    searchMark:{
        position:'absolute',
        alignSelf:'flex-end',
        marginRight:'5%',
        top:'1.8%'
    },
    search:{
        position:'absolute',
        alignSelf:'center',
        top:'0%',
        alignItems:'center',
    },
    switchBtn:{
        position:'absolute',
        top:'10%',
        alignSelf:'flex-end',
        alignItems:'center',
        marginRight:'3%'
    }
});