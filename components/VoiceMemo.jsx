import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VoiceMemo = () => {
  return (
    <View style={styles.main_inner2}>
      <View style={styles.notes_nav}>
        <Text style={styles.notes}>Voice Memos</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card2}>
        <View style={styles.strip}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="storefront-outline" color="black" size={26} />
            <View style={styles.voice_memo_main}>
              <Text style={styles.voice_memo}>VoiceMemo1</Text>
              <Text style={styles.date}>10 jun 2023, 10:15am</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.date2}>10:15</Text>
            <Icon name="storefront-outline" color="black" size={26} />
          </View>
        </View>
        <View style={styles.strip}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="storefront-outline" color="black" size={26} />
            <View style={styles.voice_memo_main}>
              <Text style={styles.voice_memo}>VoiceMemo2</Text>
              <Text style={styles.date}>10 jun 2023, 10:15am</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.date2}>10:15</Text>
            <Icon name="storefront-outline" color="black" size={26} />
          </View>
        </View>
        <View style={styles.strip}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="storefront-outline" color="black" size={26} />
            <View style={styles.voice_memo_main}>
              <Text style={styles.voice_memo}>VoiceMemo3</Text>
              <Text style={styles.date}>10 jun 2023, 10:15am</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.date2}>10:15</Text>
            <Icon name="storefront-outline" color="black" size={26} />
          </View>
        </View>
        <View style={styles.strip}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="storefront-outline" color="black" size={26} />
            <View style={styles.voice_memo_main}>
              <Text style={styles.voice_memo}>VoiceMemo4</Text>
              <Text style={styles.date}>10 jun 2023, 10:15am</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.date2}>10:15</Text>
            <Icon name="storefront-outline" color="black" size={26} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_inner2: {
    backgroundColor: '#ededed',
    borderRadius: 10,
    marginBottom: 20,
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
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  card2: {
    padding: 10,
  },
  strip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1 / 5,
    borderBottomColor: 'black',
    paddingBottom: 10,
    marginBottom: 10,
  },
  voice_memo_main: {
    marginLeft: 10,
  },
  voice_memo: {
    color: 'black',
    fontSize: 16,
  },
  date: {
    color: '#7a7a7a',
  },
  date2: {
    color: '#7a7a7a',
    marginRight: 10,
  },
});

export default VoiceMemo;
