import {Text, View, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from './Card';
import Timer from './TimePage';
import FlashLight from './Flashlight';

const DemoTittle = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.main}>
          <Card
            card1="#7fff9d"
            card2="#e9ff70"
            card3="#ffb496"
            card4="#ffb496"
          />
        </View>
        <FlashLight />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    padding: 10,
    flex:1,
    backgroundColor: 'white',
  },
});

export default DemoTittle;
