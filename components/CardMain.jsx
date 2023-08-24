import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({navigation, card1, card2, card3, card4}) => {
  const cards = [
    {
      cardContainer: [
        {
          tittle: 'Demo tittle',
          para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, animi!',
          bgcolor: card1,
        },
        {
          tittle: 'Demo tittle',
          para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, animi!',
          bgcolor: card2,
        },
      ],
    },
    {
      cardContainer: [
        {
          tittle: 'Demo tittle',
          para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, animi!',
          bgcolor: card3,
        },
        {
          tittle: 'Demo tittle',
          para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, animi!',
          bgcolor: card4,
        },
      ],
    },
  ];
  return (
    <View style={styles.main_inner}>
      <View style={styles.notes_nav}>
        <Text style={styles.notes}>Notes</Text>
        <TouchableOpacity style={styles.button}>
          <Text
            onPress={() => navigation.navigate('Allnotes')}
            style={styles.buttonText}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cards}>
        {cards &&
          cards.map((card, index) => (
            <View key={index} style={styles.cardContainer}>
              {card.cardContainer &&
                card.cardContainer.map((card, index) => (
                  <View
                    key={index}
                    style={[styles.card, {backgroundColor: card.bgcolor}]}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.demo_tittle}>{card.tittle}</Text>
                      <Icon
                        style={styles.icon}
                        name="storefront-outline"
                        color="black"
                        size={26}
                      />
                    </View>
                    <Text style={styles.para}>{card.para}</Text>
                  </View>
                ))}
            </View>
          ))}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddNotes')}
        style={styles.add_memo_btn}>
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
    paddingBottom: 10,
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
    marginBottom: 5,
    // padding: 10,
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
  },

  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    padding: 7,
    height: 150,
    marginRight: 5,
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
