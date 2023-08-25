import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Card from './CardMain';
import Timer from './Timer';
import RandomWord from './RandomWord';

const DemoTittle = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={styles.main}>
          <Card
            card1="#ffb496"
            card2="#e9ff70"
            card3="#7fff9d"
            card4="#ffb496"
            navigation={navigation}
          />
          <RandomWord />
          <Timer name="Voice Memos" time="04:20:32" />
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
  },
});

export default DemoTittle;
