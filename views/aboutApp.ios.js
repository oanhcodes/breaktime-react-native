import React, {
  ScrollView,
	AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

var Swiper = require('react-native-swiper');

class AboutApp extends Component {
	render() {
		return (
      <View style={styles.container}>
      <ScrollView style={styles.wrapper} bounces={true} horizontal={false} autoplay={false}>
				<View style={styles.body}>
          <Text style={styles.title}>
            Welcome to Break Time!
          </Text>
					<Text styles={styles.content}>
						Porgy stoneroller minnow white marlin; unicorn fish platy snook ghoul, suckermouth armored catfish, deepwater cardinalfish zebra shark. Sixgill ray labyrinth fish, barramundi tilefish ribbonbearer Reef triggerfish whitefish piranha ghoul, goosefish butterflyfish pike.

						Buffalofish barb nibbler candlefish electric stargazer tompot blenny whalefish sabertooth fish sand tiger Pacific saury. Northern Stargazer river stingray Mexican blind cavefish channel bass luminous hake spookfish anchovy, Sacramento splittail spiny basslet slipmouth burbot threadfin bream rock cod. Soldierfish northern pike pufferfish kahawai temperate perch yellowtail snapper. Old World rivuline loweye catfish bonefish pirate perch; anemonefish electric eel, thorny catfish trout cuskfish. Peacock flounder pupfish slimy mackerel brook trout freshwater hatchetfish, false trevally fire bar danio. Smelt-whiting; bluntnose minnow flying gurnard merluccid hake!

            Porgy stoneroller minnow white marlin; unicorn fish platy snook ghoul, suckermouth armored catfish, deepwater cardinalfish zebra shark. Sixgill ray labyrinth fish, barramundi tilefish ribbonbearer Reef triggerfish whitefish piranha ghoul, goosefish butterflyfish pike.

					</Text>
				</View>
        <View style={styles.timeboxing}>
          <Text styles={styles.content}>
          What is time boxing?
          </Text>
          <Text styles={styles.content}>
          Porgy stoneroller minnow white marlin; unicorn fish platy snook ghoul, suckermouth armored catfish, deepwater cardinalfish zebra shark. Sixgill ray labyrinth fish, barramundi tilefish ribbonbearer Reef triggerfish whitefish piranha ghoul, goosefish butterflyfish pike.
          </Text>
        </View>
        <View style={styles.team}>
          <Text styles={styles.content}>
          Meet our Team
          </Text>
          <View style={styles.teamPhoto}>
             <Image source={require('../imgs/Linda.jpeg')} style={styles.image}>
            </Image>
             <Image source={require('../imgs/Kathryn.jpeg')} style={styles.image}>
            </Image>
             <Image source={require('../imgs/Leanne.jpeg')} style={styles.image}>
            </Image>
             <Image source={require('../imgs/Aaron.jpeg')} style={styles.image}>
            </Image>
             <Image source={require('../imgs/Tim.jpeg')} style={styles.image}>
            </Image>
          </View>
        </View>
      </ScrollView>
			</View>
		);
  
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#F5FCFF',
  },
  body: {
    padding: 50,
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 25,
    fontSize: 20
  }, 
  timeboxing: {
    flex: 1,
    padding: 50,
    backgroundColor: '#BDF271',
  },
  team: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  teamPhoto: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  image: {
    height: 75,
    width: 75,
    padding: 10,
    resizeMode: 'contain',
  },
});

module.exports = AboutApp;