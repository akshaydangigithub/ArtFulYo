import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from './Card';
import VoiceMemo from './VoiceMemo';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.main}>
        {/* <Card card1="#7fff9d" card2='#e9ff70' card3='#ffb496' card4='#ffb496' /> */}
        <Card card1="#fff" card2="#fff" card3="#fff" card4="#fff" />
        <VoiceMemo />
        <View style={styles.main_inner3}>
          <Text style={styles.performance}>Performance Mode</Text>
          <View style={styles.btm_btn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('demotittle')}
              style={styles.btm_btn1}>
              <Text style={styles.buttonText}>Host</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('timer')}
              style={styles.btm_btn1}>
              <Text style={styles.buttonText}>Artist</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  main_inner3: {
    backgroundColor: '#ededed',
    borderRadius: 10,
    padding: 10,
  },
  btm_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btm_btn1: {
    backgroundColor: 'royalblue',
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 10,
  },
  card: {
    height: 150,
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    padding: 10,
  },
  demo_tittle: {
    color: 'black',
    fontSize: 23,
    marginBottom: 8,
  },
  para: {
    color: 'black',
    fontSize: 15,
  },
  performance: {
    color: 'black',
    fontSize: 25,
    alignSelf: 'center',
  },
});

export default Home;
