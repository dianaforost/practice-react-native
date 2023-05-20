import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Войти</Text>
        <ScrollView>
            <View style={styles.container}>
      <TextInput
        style={[styles.input, styles.notLastInput]}
        placeholder="Адрес электронной почты"

      />
      <View style={styles.passwordContainer}>
      <TextInput
        style={[styles.input, styles.lastInput]}
        placeholder="Пароль"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.show}>
        <Text style={styles.showText}>Показать</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => console.log('Button pressed')}>
          <Text style={styles.btnText}>Войти</Text>
        </TouchableOpacity>
    <TouchableOpacity style={styles.link} onPress={() => console.log('Button pressed')}>
          <Text style={styles.btnText}>Нет аккаунта? Зарегистрироваться</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:"flex",
        width: "100%",
        height: "60%",
        backgroundColor:"#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingLeft: 16,
        paddingRight:16,
        paddingTop: 32,
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
        marginBottom:30
      },
      btnText:{
        fontSize:16,
        textAlign:"center",
        color:"#000",
        lineHeight: 19,
        fontFamily: 'Roboto Regular'
      },
      link:{
        paddingBottom:45
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