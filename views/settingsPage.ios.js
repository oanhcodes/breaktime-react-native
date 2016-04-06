import React, {
  AppRegistry,
  AsyncStorage,
  Component,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Image,
  View,
  ListView,
  NavigatorIOS,
  TextInput,
  ScrollView,
} from 'react-native';

var store = require('react-native-simple-store');
var Swipeout = require('react-native-swipeout');

var Settings = React.createClass ({

	componentDidMount() {
    store.get('activities').then((data) => {
      this.setState({activities: data})
    })
  },

	getInitialState() {
		return {
			activities: [],
			text: "Enter an activity here"
		};
	},

	saveData(value) {
		this.state.activities.push(value);
		this.setState({activities: this.state.activities});
		store.save('activities', this.state.activities)
	},

	deleteData(index) {
		this.state.activities.splice(index, 1);
		store.save('activities', this.state.activities);
		this.setState({activities: this.state.activities});
	},

	clearText() {
		this.setState({text: ''})
	},

	render(){
		var that = this;
		var activities = this.state.activities.map(function(activity, i){
      {var swipeoutBtns = [
      {
        backgroundColor: 'red',
        underlayColor: 'orange',
        text: 'Delete',
        onPress: ()=>that.deleteData(i),
      }
    ]};
		return(
			<View key={i} style={styles.liContainer} >
        <Swipeout right={swipeoutBtns} height={50} autoClose={true}>
          <View style={styles.li}>
				   <Text style={styles.liText}>{activity}</Text>
          </View>
        </Swipeout>
			</View>
		)
		});
		return(
			<View style={styles.container}>
        <ScrollView style={styles.wrapper} bounces={true} horizontal={false}>
          <View style={styles.header}>
    				<Text style={styles.title}>
    					Customize Your Breaks
    				</Text>
          </View>
  				<View style={styles.activityListWrapper}>
  					{activities}
				</View>
        </ScrollView>

				<View style={styles.textInputWrapper}>
					<TextInput
						clearButtonMode='always'
						onFocus= {() => this.setState({text : ''})} 
						style={styles.textInput} 
						onChangeText={(text) => this.setState({text})} 
						placeholder={this.state.text}/>
				</View>
			  <TouchableHighlight 
          style={styles.button} 
          underlayColor={'#9BE8FF'} 
          onPress={() => this.saveData(this.state.text)}>
		      <Text style={styles.buttonText}>
		        Add Activity
		      </Text>
		    </TouchableHighlight>
			</View>
		  )
  	}
  });

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F2F2F2'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    color: 'white',
	},
  wrapper: {
    alignSelf: 'stretch',
    backgroundColor: '#29D9C2'
  },
  activityListWrapper: {
    alignSelf: 'stretch',
    flex: 1,
  },
	textInputWrapper: {
		backgroundColor: '#2E6BFF',
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginBottom: 10
	},
	textInput: {
		backgroundColor: 'white',
		height: 50,
		width: 335,
		marginLeft: 30,
		paddingLeft: 10
	},
	button: {
    backgroundColor: '#05B3DD',
    margin: 15,
    borderRadius: 8.150,
    width: 300,
    height: 45,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 2
  },
  buttonText: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
})

module.exports = Settings;