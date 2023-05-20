import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import {Platform} from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen'
import LoginScreen from './Screens/LoginScreen';
import { useFonts } from 'expo-font';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto Regular': require('./fonts/Roboto-Regular.ttf'),
    'Roboto Medium' : require('./fonts/Roboto-Medium.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
            <Image source={require('./Screens/BG.png')} style={{position: 'absolute', width:450, height:900}}/>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow:"scroll",
    flex: 1,
    backgroundColor: "#ffd1d1",
    alignItems: 'center',
    justifyContent: "flex-end",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }, input: {
    width: 100,
    height: 100,
    backgroundColor: "red"
  }
});
