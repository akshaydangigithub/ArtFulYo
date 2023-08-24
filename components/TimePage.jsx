import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import TimerComponent from './Timer';
import FlashLight from './Flashlight';

const Timer = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.main}>
        <View style={styles.image_main}>
          <Image style={styles.image} source={require('../images/time.jpg')} />
        </View>
        <TimerComponent name="Timer" time="04:00:59" />
        <FlashLight />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    minHeight: '100%',
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
