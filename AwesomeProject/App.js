import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import {Platform} from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen'
import LoginScreen from './Screens/LoginScreen';
import PostsScreen from './Screens/PostsScreen';
import Home from './Screens/Home';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto Regular': require('./fonts/Roboto-Regular.ttf'),
    'Roboto Medium' : require('./fonts/Roboto-Medium.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }
  const MainStack = createStackNavigator();
  return ( <>
  <View style={styles.container}>
    {/* <View style={styles.container}> */}
             <ImageBackground resizeMode="cover" source={require('./Screens/BG.png')} style={styles.backgroundImage}>
     {/* </View> */}
         <NavigationContainer >
      <MainStack.Navigator 
      initialRouteName="Register" 
      screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name='Register' component={RegistrationScreen} style={styles.register}/>
        <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
    </NavigationContainer>
        </ImageBackground>     
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  register:{
    flex: 0.7
  },
  // nav:{
    //   backgroundColor: "red"
    // },
    home:{
      // flex:1
    },
    cont :{
      flex: 1,
      height:"70%", 
      justifyContent:"flex-end"
    },
  container: {
    flex: 1,
    // height: "0%",
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: "flex-end",
    position: "relative"
    // paddingBottom: Platform.OS === 'ios' ? 0 : Keyboard.dismiss,
  },
  backgroundImage:{
    flex: 1,
    position: 'absolute',
    width:"100%",
    height:"100%"
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
  }, 
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   halfScreen: {
//     flex: 1,
//     height: '50%',
//   },
//   fullScreen: {
//     flex: 1,
//   },
// });