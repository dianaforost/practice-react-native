import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Icon from './add.png';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '../redux/auth/selectors';
import { registerDB } from '../redux/auth/operations';
export default function RegistrationScreen() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch()
  const status = useSelector(setStatus);
  const userId = route.params?.userId;
  useEffect(() => {
    console.log(status);
    if(status === "isRegistered"){
      navigation.navigate('Home', {
      screen: 'Register',
      params: {
        email: email,
        password: password,
        // displayName: login
      }
    });
    }
  }, [status]);

  const onLogin = () => {
    if(login === "" || email === "" || password === ""){
      return Alert.alert("Please enter info")
    }
    dispatch(registerDB({login, email, password}))
    .then((response) => {
      const { user } = response.payload;
      if (status === 'isRegistered') {
        navigation.navigate('Home', {
          screen: 'Register',
          params: { email: email,
          password: password,
          // displayName: user.displayName 
        },
       });
      }
    }).catch((error) => {
      console.log(error);
      return Alert.alert("Your login, email or password is wrong or already exists")
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
              value={login}
              onChangeText={setLogin}
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
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={styles.show} onPress={() => setShowPassword(!showPassword)}>
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