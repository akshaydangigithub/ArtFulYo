import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TimerComponent from './Timer';
import FlashLight from './Flashlight';

const Timer = () => {
  return (
    <View style={styles.main}>
      <View style={styles.image_main}>
        <Image style={styles.image} source={require('../images/time.jpg')} />
      </View>
      <TimerComponent />
      <FlashLight />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image_main: {
    height: '45%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
});

export default Timer;
