import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';



import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import DrawerNavigatorItems  from 'react-navigation-drawer'



export default function DrawerPanel({ closeDrawer }) {
  return (
    <View style={styles.container}>
      <View style={styles.closeLayout}>
        <TouchableOpacity onPress={closeDrawer}>
          <Text>x</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: '#ffffff',
        
     
        height: 220
        
      }}
      

  >
     
      
        
          <Image source={require('../../img/user_location.png')}
          style={{
          marginTop:30,
          marginLeft:30,
            width:50,
            height: 50

          }}/>
          
          
          <Text style={{ 
            paddingTop: 10,
            marginLeft:30,
            fontSize: 20,
           }
        }>
            박성연
          </Text>
        

 
        
          <Text style={{ 
            paddingTop: 10,
            marginLeft:30,
            fontSize: 15,
           }
        }>
          가톨릭대학교
          </Text>
          <Text style={{ 
           
            marginLeft:30,
            fontSize: 15,
           }
        }>
          컴퓨터정보공학부 18
          </Text>
          <Text style={{ 
           
           marginLeft:30,
           fontSize: 15,
          }
       }>
         우리은행 1002-058-275700
         </Text>
      
    </View>
    <View style={{
      backgroundColor:'#0F1738',
      height: 3

    }}/>   

    <View style={{
        backgroundColor: '#ffffff',
        flexDirection:'row',
        height: 90
        
      }}
      >
        <View>
          <Image source={require('../../img/history.png')}
        style={{
          marginLeft:35,
          marginTop:10,
          marginBottom:5,
          width:50 ,
          height:50,

        }}/>
        <Text  style={{
          marginLeft:30,}}>
          히스토리
        </Text>
        </View>
        <View>
          <Image source={require('../../img/coupon.png')}
        style={{
          marginTop:10,
          marginBottom:5,
          marginLeft:35,
          width:50 ,
          height:50,

        }}/>
        <Text style={{
          marginLeft:40,}} >쿠폰함</Text>
        </View>
        <View>
          <Image source={require('../../img/customer_center.png')}
        style={{
          marginTop:10,
          marginBottom:5,

          marginLeft:35,
          width:50 ,
          height:50,

        }}/>
        <Text style={{
          marginLeft:30,}}>고객센터</Text>
        </View>
        


    </View>
    <View style={{
      backgroundColor:'#0F1738',
      height: 3

    }}/>   
            <View style={{ flexDirection:'row', paddingTop:20,paddingBottom:10
     
    }}> 
    <Image source={require('../../img/history.png')}
        style={{
       marginLeft:30,
          width:25 ,
          height:25,

        }}/>

      <Text style={{paddingLeft:30, fontSize:15}}
      
      >
         
        신고내역</Text>
    </View>
      <View style={{ flexDirection:'row', paddingTop:10,paddingBottom:10
     
      }}> 
      <Image source={require('../../img/customer_center.png')}
          style={{
         marginLeft:30,
            width:25 ,
            height:25,

          }}/>

        <Text style={{paddingLeft:30, fontSize:15}}
        
        >
           
          이용방법</Text>
      </View>
      <View style={{ flexDirection:'row', paddingTop:10,paddingBottom:10
     
    }}> 
    <Image source={require('../../img/notification.png')}
        style={{
       marginLeft:30,
          width:20 ,
          height:20,

        }}/>

      <Text style={{paddingLeft:30, fontSize:15}}
      
      >
         
        공지사항</Text>
    </View>
    <View style={{ flexDirection:'row', paddingTop:10,paddingBottom:10
     
    }}> 
    <Image source={require('../../img/settings.png')}
        style={{
       marginLeft:30,
          width:22 ,
          height:22,

        }}/>

      <Text style={{paddingLeft:30, fontSize:15}}
      
      >
         
        설정</Text>
    </View>

    
 
    </View>

   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  closeLayout: {
    alignItems: 'flex-end',
  },
  

});
