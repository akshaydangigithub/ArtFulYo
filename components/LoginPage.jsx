import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
const Login = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <View style={styles.main}>
        <View style={styles.top}>
          <Image style={styles.image} source={require('../images/logo.png')} />
        </View>

        <View style={styles.bottom}>
          <Text style={styles.Head}>Login</Text>
          <TextInput
            placeholderTextColor="#7c7b7b"
            style={styles.input}
            placeholder="Login as organizer"
          />
          <TextInput
            placeholderTextColor="#7c7b7b"
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            placeholderTextColor="#7c7b7b"
            style={styles.input}
            placeholder="Password"
          />
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={handleToggle}>
            <View style={[styles.checkbox, isChecked && styles.checked]}>
              {isChecked && <View style={styles.checkboxInner} />}
            </View>
            <Text style={styles.label}>Remember Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('home')}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  text: {
    color: 'black',
  },
  top: {
    height: '35%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: '65%',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    objectFit: 'cover',
    height: '60%',
    width: '50%',
  },
  input: {
    padding: 12,
    marginBottom: 30,
    backgroundColor: '#efefef',
    borderRadius: 10,
    width: 320,
    color: 'black',
  },
  Head: {
    color: 'black',
    fontSize: 30,
    marginBottom: 50,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 10,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 2,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
  checked: {
    backgroundColor: 'lightgreen',
  },
  button: {
    backgroundColor: 'royalblue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Login;
