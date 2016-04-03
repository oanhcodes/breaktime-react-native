/**
 * Created by guguyanhua on 12/11/15.
 */
import React, {
    Alert,
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';

var TimerMixin = require('react-timer-mixin');
var AudioPlayer = require('react-native-audioplayer');

var alertBreakMessage = 'BREAK TIME !';
var alertWorkMessage = 'get to work!!!!';
var onBreak = false;

var CountDown = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      time: this.props.workTime,
    };
  },
  componentDidMount(){
    this._countdown();
  },
  render(){
    return (
      <View>
        <Text style={styles.text}>{this.props.text}: </Text>
        <View style={[styles.wrapper,styles.buttonStyle]}>
          <Text style={styles.textStyle}>{Math.floor(this.state.time/60)} minutes </Text>
          <Text style={styles.textStyle}>{this.state.time%60} seconds</Text>
        </View>
      </View>
    )
  },

  _countdown(){
    var timer = function () {
      var time = this.state.time - 1;
      this.setState({time: time});
      if (time > 0) {
        this.setTimeout(timer, 1000);
      } else {
        if (onBreak) {
          // on break going to work time
          this.setState({time: this.props.workTime});
          onBreak = false;
          Alert.alert(
            'worktitle',
            alertWorkMessage,
            [
              {text: 'back to work', onPress: () => this._countdown()}
            ]
          );
        } else {
          // working, time for a break!
          // kit kats
          // meow
          this.setState({time: this.props.breakTime});
          onBreak = true;
          Alert.alert(
            'breaktitle',
            alertBreakMessage,
            [
              {text: 'Take break', onPress: () => this._countdown()},
              {text: 'uh, ..crabhorn?', onPress: () => AudioPlayer.play('crabhorn.mp3')}
            ]
          );
        }
      }
    };
    this.setTimeout(timer, 1000);
  }
});

var styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 24,
    paddingBottom: 5
  },
  textStyle: {
    color:'white',
    fontSize: 55
  },
  wrapper: {
    padding: 10,
    marginRight:10,
    width: 350,
    backgroundColor: '#e5e5e5',
  },
  buttonStyle: {
    padding:20,
    backgroundColor: '#05B3DD',
    borderRadius: 8
  }
});

module.exports = CountDown;