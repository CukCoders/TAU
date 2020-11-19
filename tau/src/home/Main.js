
import React, { useState, Component } from 'react';
import {
    View,
    Platform,
    PropTypes,
    StyleSheet,
    Image,
    TouchableOpacity,
    PermissionsAndroid,
    TextInput,
    Switch,
} from 'react-native';
import { Button, Text } from 'react-native-elements';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, CalloutSubview } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';





export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            region: null,
            switchValue: false
        };

        this._getLocationAsync();

    }

    toggleSwitch = value => {
        this.setState = ({
            switchValue: value
        });
    }



    _getLocationAsync = async () => {

        Geolocation.getCurrentPosition(({ coords }) => {
            const region = {
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.0045,
                longitudeDelta: 0.0045,
            };

            this.map.animateToRegion({
                latitude: region.latitude,
                longitude: region.longitude,
                latitudeDelta: region.latitudeDelta,
                longitudeDelta: region.longitudeDelta,
            });

            this.setState({ region });
        });
    }



    render() {
        const { openDrawer } = this.props;

        return (

            <View
                style={styles.container}>
                <View
                    style={styles.topMenu} />
                <View
                    style={styles.drawer}>
                    <TouchableOpacity onPress={openDrawer}>
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

                    initialRegion={this.state.region}
                    showsUserLocation={true}
                    //showsCompass={true}
                    rotateEnabled={false}
                    ref={(map) => { this.map = map }}
                    style={{ flex: 1, zIndex: 0 }}
                >

                    <Marker
                        coordinate={{ latitude: 37.4220, longitude: -122.0840 }}>
                        <Callout tooltip>
                            <View style={{

                                flexDirection: 'row',
                               // alignSelf: 'flex-start',
                                backgroundColor: '#fff',
                                borderRadius: 6,
                                borderColor: '#ccc',
                                borderWidth:3,
                                padding: 15,
                            }}>
                            <View style={{width:170}}>
                                    
                                    <Text>출발   : 역곡역</Text>
                                    <Text>도착   : 가톨릭대학교 다솔관</Text>
                                    <Text>출발시각: 9시 50분</Text>
                                </View>
                          
                          
                          <View style={{flexDirection:'column'}}>
                            <View style={{width:150,backgroundColor: '#0F1738', marginLeft:30
                        ,width:80, height:30, marginBottom:5,justifyContent: 'center',
                        alignItems:'center', }} >
                            <Text style={{alignItems:'center', color:'#FDC408'}}
                        >타유?</Text>
                          
                                </View>

                                <View style={{width:150,backgroundColor: '#0F1738', marginLeft:30
                        ,width:80, height:30, marginTop:5,justifyContent: 'center',
                        alignItems:'center', }}>

<Text style={{alignItems:'center', color:'#FDC408'}}
                        >방정보</Text>



                                </View>
                                </View>
                              
                               
                            </View>

                        </Callout>

                    </Marker>



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
                    <TouchableOpacity onPress={() => { this._getLocationAsync() }}>
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
                        value={this.state.switchValue}
                        onValueChange={(value) => toggleSwitch(value)}
                     />


                 
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    map: {
        flex: 1
    },
    current: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        bottom: 50,
        right: 50
    },
    addRoom: {
        position: 'absolute',
        top: '65%',
        alignSelf: 'flex-end',
        marginRight: '5%',
        resizeMode: 'contain'
    },
    currentLocation: {
        position: 'absolute',
        top: '75%',
        alignSelf: 'flex-end',
        marginRight: '5%'
    },
    topMenu: {
        marginTop: '13%',
        backgroundColor: 'white'
    },
    drawer: {
        position: 'absolute',
        marginLeft: '3%',
        top: '1.8%'
    },
    searchMark: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginRight: '5%',
        top: '1.8%'
    },
    search: {
        position: 'absolute',
        alignSelf: 'center',
        top: '0%',
        alignItems: 'center',
    },
    switchBtn: {
        position: 'absolute',
        top: '10%',
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginRight: '3%'
    },

    bubble: {

        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        padding: 15,
    },
    arrow: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderTopColor: '#fff',
        borderColor: 'transparent',
        marginTop: -32,
    },

    arrowBorder: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderTopColor: '#007a87',
        borderColor: 'transparent',
        marginTop: -0.5,
    },
    name: {
        fontSize: 16,
        marginBottom: 5
    },

    image: {
        width: 120,
        height: 50
    }

});