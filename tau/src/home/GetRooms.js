import React,{Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {listRooms as ListRooms} from '../../queries/ListRooms';
import {ListItem} from 'react-native-elements';


export default class GetRooms extends Component{
    state={rooms:[], roomGenderFilter:'',when:''};
    async componentDidMount(){
        try{
            const {data:{listRooms:{items}}}=await API.graphql(graphqlOperation(ListRooms));
            this.setState({rooms:items});
        }catch(e){
            console.log('error fetching data: ',e);
        }
    }
    onChange=(key, value)=>{
        this.setState({[key]:value});
    }
    render(){
        return(
            <View>
                {
                    this.state.rooms.map((item, i)=>(
                        <ListItem
                        key={i}
                        title={item.when}
                        subtitle={item.roomGenderFilter} />
                    ))
                }
            </View>
        );
    }
}
