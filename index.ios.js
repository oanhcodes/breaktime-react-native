/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */



// var TimeBlock = require('./views/timeBlock.ios')

var Main = require('./views/main.ios');
var Timer = require('./views/timer.ios')
var Stats = require('./views/stats.ios')
var Settings = require('./views/settingsPage.ios')
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

class BreakTime extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Main',
          component: Settings
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('BreakTime', () => BreakTime);
