import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TimerComponent = () => {
  return (
    <View style={styles.card_main}>
      <Text style={styles.timer_text}>Timer</Text>
      <View style={styles.card}>
        <Text style={styles.timer}>00:00:00</Text>
        <View style={styles.icon_div}>
          <View style={styles.icon_div1}>
            <Icon name="storefront-outline" color="black" size={26} />
          </View>
          <View style={styles.icon_div2}>
            <Icon name="storefront-outline" color="black" size={26} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card_main: {
    padding: 10,
    backgroundColor: '#ededed',
    marginTop: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  timer_text: {
    color: 'black',
    fontSize: 20,
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    marginTop: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  timer: {
    color: 'black',
    fontSize: 50,
  },
  icon_div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 10,
  },
  icon_div1: {
    height: 50,
    width: 50,
    backgroundColor: '#0083ff',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_div2: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TimerComponent;
