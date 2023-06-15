import { Alert, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setStatus } from '../redux/auth/selectors';
import { loginDB } from '../redux/auth/operations';
export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch()
    const status = useSelector(setStatus)
const userId = route.params?.userId;
// console.log(userId);
useEffect(() => {
  console.log(status);
  if(status === "isLoggedIn"){
    navigation.navigate('Home', {
    screen: 'Login',
    params: {
      email: email,
      password: password,
    }
  });
  }
}, [status]);
    const onLogin = () =>{
      if( email === "" || password === ""){
        return Alert.alert("Please enter info")
      }
        console.log(email, password);
        dispatch(loginDB({email, password}))

    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Text style={styles.title}>Войти</Text>
        <ScrollView>
            <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
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
          <Text style={styles.btnText}>Войти</Text>
        </TouchableOpacity>
    <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.linkText}>Нет аккаунта? Зарегистрироваться</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
    </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container:{
      flex:3,
  backgroundColor: "#FFFFFF",
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 32,
        // display:"flex",
        width: "100%",
        height: "100%",
        // backgroundColor:"#FFFFFF",
        // borderTopLeftRadius: 25,
        // borderTopRightRadius: 25,
        // paddingLeft: 16,
        // paddingRight:16,
        // paddingTop: 32,
    },
    imageContainer:{
        // flex: 1,
        left:"35%",
        top: -60,
        width:120,
        height:120,
        backgroundColor:"#F6F6F6",
        borderRadius : 16,

    },
    title:{
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 35,
        textAlign: 'center',
        paddingBottom: 33,
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
















// import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
// import { useState } from 'react';
// export default function LoginScreen() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const onLogin = () =>{
//         console.log(email, password)
//     }
//     return (
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.container}>
//             <Text style={styles.title}>Войти</Text>
//         <ScrollView>
//             <View style={styles.container}>
//             <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
//       <TextInput
//         style={[styles.input, styles.notLastInput]}
//         placeholder="Адрес электронной почты"
//         value={email}
//         onChangeText={setEmail}

//       />
//       <View style={styles.passwordContainer}>
//       <TextInput
//         style={[styles.input, styles.lastInput]}
//         placeholder="Пароль"
//         secureTextEntry={true}
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TouchableOpacity style={styles.show}>
//         <Text style={styles.showText}>Показать</Text>
//           </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//       <TouchableOpacity style={styles.btn} onPress={onLogin}>
//           <Text style={styles.btnText}>Войти</Text>
//         </TouchableOpacity>
//     <TouchableOpacity style={styles.link} onPress={() => console.log('Button pressed')}>
//           <Text style={styles.linkText}>Нет аккаунта? Зарегистрироваться</Text>
//         </TouchableOpacity>
//     </View>
//     </ScrollView>
//     </View>
//     </TouchableWithoutFeedback>
//     )
// }
// const styles = StyleSheet.create({
//     container:{
//       flex: 2,
//         display:"flex",
//         width: "100%",
//         height: "80%",
//         backgroundColor:"#FFFFFF",
//         borderTopLeftRadius: 25,
//         borderTopRightRadius: 25,
//         paddingLeft: 16,
//         paddingRight:16,
//         paddingTop: 32,
//     },
//     imageContainer:{
//         // flex: 1,
//         left:"35%",
//         top: -60,
//         width:120,
//         height:120,
//         backgroundColor:"#F6F6F6",
//         borderRadius : 16,

//     },
//     title:{
//         fontSize: 30,
//         fontWeight: 500,
//         lineHeight: 35,
//         textAlign: 'center',
//         paddingBottom: 33,
//         fontFamily: 'Roboto Medium'
//     },
//     icon: {
//         width: 25,
//         height: 25,
//         alignSelf: 'flex-end',
//         right: -10,
//         bottom: -80,
//       },
//       input:{
//         paddingTop: 16,
//         paddingBottom: 15,
//         paddingLeft: 16,
//         backgroundColor: "#F6F6F6",
//       },
//       notLastInput :{
//         marginBottom: 16,
//       },
//       lastInput:{
//         marginBottom: 43,
//       },
//       btn:{
//         paddingTop: 16,
//         paddingBottom: 16,
//         paddingLeft: 15,
//         backgroundColor: "#FF6C00",
//         marginBottom:30,
//         borderRadius: 100,
//       },
//       btnText:{
//         fontSize:16,
//         textAlign:"center",
//         color:"#fff",
//         lineHeight: 19,
//         fontFamily: 'Roboto Regular'
//       },
//       link:{
//         paddingBottom:45
//     },
//     linkText:{
//           color:"#1B4371",
//           fontSize:16,
//         textAlign:"center",
//         lineHeight: 19,
//         fontFamily: 'Roboto Regular'
//       },
//       passwordContainer: {
//         position: 'relative',
//       },
//       show:{
//         position:"absolute",
//         top: '20%',
//         right: 16,
//       },
//       showText:{
//         color:"#1B4371",
//         fontSize: 16,
//         lineHeight: 19,
//         fontFamily: 'Roboto Regular'
//       }
// })