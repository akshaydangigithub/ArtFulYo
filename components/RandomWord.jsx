import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RandomWord = () => {
  return (
    <>
      <View style={styles.memo_main}>
        <Text style={styles.heading}>Random Word</Text>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Genrate</Text>
          </TouchableOpacity>
          <View style={styles.fox}>
            <Text style={styles.fox_text}>FOX</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  memo_main: {
    backgroundColor: '#ededed',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop:20
  },
  heading: {
    color: 'black',
    fontSize: 20,
  },
  btns: {
    width:"100%",
    marginTop: 20,
    alignItems: 'center',
    justifyContent: "space-around",
    flexDirection: 'row',

  },
  button: {
    backgroundColor: 'royalblue',
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  fox: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  fox_text: {
    color: 'black',
    fontSize: 25,
  },
});

export default RandomWord;
