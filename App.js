import React, { useEffect } from 'react';
import {Text, View, StyleSheet, Platform, Alert, NetInfo} from 'react-native';
import Amplify,{Auth, API} from 'aws-amplify'; // amplify와 연결
import * as mutations from './graphql/mutations'; // schema mutation import
import * as queries from './graphql/queries'; // schema query import
import * as subscriptions from './graphql/subscriptions'; //schema subscriptions import
import SplashScreen from 'react-native-splash-screen';
import {withAuthenticator} from 'aws-amplify-react-native';
import AWSAppSyncClient,{AUTH_TYPE} from 'aws-appsync';
import Appsync from './AppSync';

// local js files
import Main from './src/home/Main';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

/*const client=new AWSAppSyncClient({ // graphql end point 및 JWT 획득
  url:awsconfig.aws_appsync_graphqlEndpoint,
  region:awsconfig.aws_appsync_region,
  auth:{
    type:AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken:async()=>(await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});*/

function App(){

  return(
    <View 
    styles={styles.container}>
      <Main />
    </View>
      );
}

export default withAuthenticator(App, {
  usernameAttributes: 'email',
  defaultCountryCode:'82',
  signUpConfig: {
     hiddenDefaults: ["phone_number"],
     signUpFields: [
       { key: 'custom:school', 
       label: '학교',
       required: true },
       {
         key:'custom:major',
         label:'전공',
         required:false
       }
      ]
}
});

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  logoutbtn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:10
  }
});