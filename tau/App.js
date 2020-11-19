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
import Drawer from 'react-native-drawer';
import DrawerPanel from './src/components/DrawerPanel';

 Amplify.configure(awsconfig);

const client=new AWSAppSyncClient({ // graphql end point 및 JWT 획득
  url:awsconfig.aws_appsync_graphqlEndpoint,
  region:awsconfig.aws_appsync_region,
  auth:{
    type:AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken:async()=>(await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});

class App extends React.Component {
  state = {
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this._drawer.close();
  };
  openDrawer = () => {
    this._drawer.open();
  };
  render() {
    return (
      <Drawer
        ref={(ref) => (this._drawer = ref)}
        type="static"
        content={<DrawerPanel closeDrawer={this.closeDrawer} />}
        acceptDoubleTap
        styles={{
          main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15},
        }}
        onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        captureGestures={false}
        tweenDuration={100}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={(viewport) => 100}
        negotiatePan>
        <View styles={styles.container}>
          <Main openDrawer={this.openDrawer} />
        </View>
      </Drawer>
    );
  }
}

export default withAuthenticator(App, {
  usernameAttributes: 'email',
  defaultCountryCode:'82',
  signUpConfig: {
     hiddenDefaults: ["phone_number",'password'],
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
  }
});