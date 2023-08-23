import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FlashLight = () => {
  return (
    <View style={styles.card_main}>
      <Text style={styles.timer_text}>Flash Light</Text>
      <View style={[styles.card, {backgroundColor: '#ededed'}]}>
        <View style={styles.card2_icon_div}>
          <View>
            <View style={styles.card2_icon_div1}>
              <Icon name="storefront-outline" color="black" size={26} />
            </View>
            <Text style={styles.flash_text}>Strobe</Text>
          </View>
          <View>
            <View style={styles.card2_icon_div2}>
              <Icon name="storefront-outline" color="black" size={26} />
            </View>
            <Text style={styles.flash_text}>Default</Text>
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
  card2_icon_div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 40,
    width: '100%',
    marginTop: 10,
  },
  card2_icon_div1: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card2_icon_div2: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flash_text: {
    color: 'black',
    marginTop: 10,
  },
});

export default FlashLight;
