import React from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddNotes = () => {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.inner_main}>
          <Text style={styles.heading}>Notes</Text>
          <View style={styles.inner}>
            <View style={styles.navbar}>
              <View style={styles.nav_top}>
                <View style={styles.nav_top_left}>
                  <Icon name="storefront-outline" color="black" size={26} />
                  <Icon name="storefront-outline" color="black" size={26} />
                  <View style={styles.circle}></View>
                </View>
                <View style={styles.nav_top_right}>
                  <Icon name="storefront-outline" color="black" size={26} />
                  <Text style={styles.date}>10 Jun 2023, 10:50 AM</Text>
                </View>
              </View>
              <View style={styles.nav_btm}>
                <TextInput
                  placeholderTextColor="gray"
                  style={styles.input}
                  placeholder="Your tittle.."
                />
              </View>
            </View>
            <TextInput
              placeholderTextColor="gray"
              multiline
              numberOfLines={17}
              placeholder="Add your notes..."
              style={styles.textInput}
              textAlignVertical="top"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  inner_main: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  heading: {
    color: 'black',
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 10,
  },
  inner: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  navbar: {
    borderBottomColor: 'black',
    borderBottomWidth: 1 / 2,
  },
  nav_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav_top_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  circle: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: 'yellow',
  },
  nav_top_right: {
    alignItems: 'flex-end',
  },
  date: {
    color: '#636363',
    fontSize: 12,
  },
  input: {
    marginTop: 10,
    color: 'black',
    fontSize: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    minHeight: 100,
    marginTop: 20,
    color: 'black',
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    overflow:"hidden"
  },
  button: {
    backgroundColor: 'royalblue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    width:110
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign:"center"
  },
});

export default AddNotes;
