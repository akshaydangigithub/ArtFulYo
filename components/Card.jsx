import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = (props) => {
  return (
    <View style={styles.main_inner}>
      <View style={styles.notes_nav}>
        <Text style={styles.notes}>Notes</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cards}>
        <View style={[styles.card, {backgroundColor: props.card1}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.demo_tittle}>Demo Tittle</Text>
            <Icon
              style={styles.icon}
              name="storefront-outline"
              color="black"
              size={26}
            />
          </View>
          <Text style={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            animi!
          </Text>
        </View>
        <View style={[styles.card, {backgroundColor: props.card2}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.demo_tittle}>Demo Tittle</Text>
            <Icon
              style={styles.icon}
              name="storefront-outline"
              color="black"
              size={26}
            />
          </View>
          <Text style={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            animi!
          </Text>
        </View>
      </View>
      <View style={styles.cards}>
        <View style={[styles.card, {backgroundColor: props.card3}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.demo_tittle}>Demo Tittle</Text>
            <Icon
              style={styles.icon}
              name="storefront-outline"
              color="black"
              size={26}
            />
          </View>
          <Text style={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            animi!
          </Text>
        </View>
        <View style={[styles.card, {backgroundColor: props.card4}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.demo_tittle}>Demo Tittle</Text>
            <Icon
              style={styles.icon}
              name="storefront-outline"
              color="black"
              size={26}
            />
          </View>
          <Text style={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            animi!
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.add_memo_btn}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main_inner: {
    backgroundColor: '#ededed',
    borderRadius: 10,
    marginBottom: 30,
    // height: '47%',
    paddingBottom:10
  },
  notes_nav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  notes: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'royalblue',
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add_memo_btn: {
    backgroundColor: 'royalblue',
    paddingVertical: 6,
    paddingHorizontal: 24,
    width: 80,
    alignSelf: 'center',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default Card;
