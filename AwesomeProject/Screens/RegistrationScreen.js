import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Icon from './add.png';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route.params?.userId;

  const onLogin = () => {
    if(name === "" || email === "" || password === ""){
      return Alert.alert("Please enter info")
    }
    console.log(name, email, password);
    navigation.navigate('Home', {
      screen: 'Register',
      params: {
        email: email,
        password: password,
        name: name
      }
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image source={Icon} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={styles.title}>Регистрация</Text>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TextInput
              style={[styles.input, styles.notLastInput]}
              placeholder="Логин"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={[styles.input, styles.notLastInput]}
              placeholder="Адрес электронной почты"
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, styles.lastInput]}
                placeholder="Пароль"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={styles.show}>
                <Text style={styles.showText}>Показать</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.btn} onPress={onLogin}>
            <Text style={styles.btnText}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageContainer: {
    left: "35%",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: 33,
    lineHeight: 35,
    fontFamily: 'Roboto Medium'
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
    right: -10,
    bottom: -80,
  },
  input: {
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
  },
  notLastInput: {
    marginBottom: 16,
  },
  lastInput: {
    marginBottom: 43,
  },
  btn: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 15,
    backgroundColor: "#FF6C00",
    marginBottom: 30,
    borderRadius: 100,
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    lineHeight: 19,
    fontFamily: 'Roboto Regular'
  },
  link: {
    paddingBottom: 45
  },
  linkText: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 19,
    fontFamily: 'Roboto Regular'
  },
  passwordContainer: {
    position: 'relative',
  },
  show: {
    position: "absolute",
    top: '20%',
    right: 16,
  },
  showText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto Regular'
  }
});













export function RegistrationScree() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
const userId = route.params?.userId;
const onLogin = () =>{
  console.log(email, password);
  navigation.navigate('Home', {
    screen: 'Register',
    params: { email: email,
    password: password,
  name:name },
  
 })

;
}
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* <View style={styles.contentWrapper}> */}
        <View style={styles.container}>
             <View style={styles.imageContainer}>
            <TouchableOpacity >
                <Image source={Icon} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
            <Text style={styles.title}>Регистрация</Text>
            <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
      <TextInput
        style={[styles.input, styles.notLastInput]}
        placeholder="Логин"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, styles.notLastInput]}
        placeholder="Адрес электронной почты"
        value={email}
        onChangeText={setEmail}

      />
      <View  style={styles.passwordContainer}>
      <TextInput
        style={[styles.input, styles.lastInput]}
        placeholder="Пароль"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.show}><Text style={styles.showText}>Показать</Text></TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
       <TouchableOpacity style={styles.btn} onPress={onLogin}>
          <Text style={styles.btnText}>Зарегистрироваться</Text>
        </TouchableOpacity>
    <TouchableOpacity style={styles.link} 
    onPress={() => navigation.navigate("Login")}
    >
          <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
        </TouchableOpacity>
    </View>
    </ScrollView> 
        </View>
        {/* </View> */}
        </TouchableWithoutFeedback>
    )
}
const style = StyleSheet.create({
    container:{
      // display:"flex",
      // flex: 0.7,
      height: "70%",
      width: "100%",
      // height: "100%",
      backgroundColor:"#FFFFFF",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingLeft: 16,
      paddingRight:16,
    },
    // contentWrapper: {
    //   flex: 0,
    //   // width: '100%',
    //   // alignItems: 'center',
    //   // paddingTop: 100,
    // },
    imageContainer:{
      // position: "absolute",
      left: "35%",
      top: -60,
      width:120,
      height:120,
      backgroundColor:"#F6F6F6",
      borderRadius : 16,
      // flex: 1,
      // left:"35%",
      // top: -60,
        
      },
      title:{
        fontSize: 30,
        fontWeight: 500,
        textAlign: 'center',
        paddingBottom: 33,
        lineHeight: 35,
        fontFamily: 'Roboto Medium'
      },
      icon: {
        width: 25,
        height: 25,
        alignSelf: 'flex-end',
        right: -10,
        bottom: -80,
      },
      input:{
        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 16,
        backgroundColor: "#F6F6F6",
      },
      notLastInput :{
        marginBottom: 16,
      },
      lastInput:{
        marginBottom: 43,
      },
      btn:{
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 15,
        backgroundColor: "#FF6C00",
        marginBottom:30,
        borderRadius: 100,
      },
      btnText:{
        fontSize:16,
        textAlign:"center",
        color:"#fff",
        lineHeight: 19,
        fontFamily: 'Roboto Regular'
      },
      link:{
        paddingBottom:45
      },
      linkText:{
        color:"#1B4371",
        fontSize:16,
        textAlign:"center",
        lineHeight: 19,
        fontFamily: 'Roboto Regular'
      },
      passwordContainer: {
        position: 'relative',
      },
      show:{
        position:"absolute",
        top: '20%',
        right: 16,
      },
      showText:{
        color:"#1B4371",
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Roboto Regular'
      }
    })


    //     flex: 1,
    // backgroundColor: "#FFFFFF",
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // paddingLeft: 16,
    // paddingRight: 16,
    // paddingTop: 32,
  
    // flex: 1,
    //   backgroundColor: '#ffd1d1',
    //   alignItems: 'center',
    //   justifyContent: 'flex-end',
    //   paddingBottom: 16,
    //   overflow: 'hidden',
    //   borderTopLeftRadius: 25,
    //   borderTopRightRadius: 25,