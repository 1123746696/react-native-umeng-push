/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NativeAppEventEmitter,
  NativeModules,
  DeviceEventEmitter,
} from 'react-native';

import UmengPush from 'react-native-umeng-push';

class InitProject extends Component {
  componentDidMount() {
    UmengPush.getDeviceToken(deviceToken => {
      console.log(deviceToken);
      // alert(deviceToken);
    });
    UmengPush.didReceiveMessage(message => {
      alert("didReceiveMessage");
      console.log("didReceiveMessage:", message);
    });
    UmengPush.didOpenMessage(message => {
      alert("didOpenMessage");
      console.log("didOpenMessage:", message);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          react-native-umeng-push Example
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestProject', () => InitProject);
