import React,{Component} from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import {ListItem, Button, FormInput} from 'react-native-elements';
import {listRooms as ListRooms} from '../../queries/ListRooms';
import {createRoom as CreateRoom} from '../../mutations/CreateRoom';

export default class AddRoom extends Component{
    state={rooms:[], roomGenderFilter:'',when:''}
    createRoom=async()=>{
        const room={
            when:this.state.when,
            roomGenderFilter:this.state.roomGenderFilter
        }
        const rooms=[...this.state.rooms, room]
        this.setState({rooms,roomGenderFilter,when:''})
        try{
            await API.graphql(graphqlOperation(CreateRoom,{input:room}));
            console.log('a room is successfully created!');
            console.log('room: ',room);
        }catch(e){
            console.log('error: ',e);
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <FormInput
                onChangeText={v=> this.onChange('when',v)}
                placeholder='출발 시각'
                value={this.state.when}
                />
                <FormInput
                onChangeText={v=>this.onChange('roomGenderFilter',v)}
                placeholder='성별 필터'
                value={this.state.roomGenderFilter} />
                <Button
                style={{margin:20}}
                onPress={this.createRoom}
                title='방 만들기'
                backgroundcolor='#FFA100' />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F5FCFF'
    }
});