import {useNavigation} from '@react-navigation/native';
import { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  ActivityIndicator,
} from 'react-native';

const Loader = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.loader_main}>
      <View style={styles.top}>
        <Image style={styles.image} source={require('../images/logo.png')} />
      </View>
      <ActivityIndicator size={50} color="#ad0000" />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  top: {
    height: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    objectFit: 'cover',
    height: '60%',
    width: '70%',
  },
});

export default Loader;
