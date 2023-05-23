import { View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";

export default function CreatePostsScreen(){
    const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
//   const Main = createBottomTabNavigator();
    const onChangeLocation = (text) =>{
        setLocation(text);
    }
    const onChangeText = (text) =>{
        setTitle(text);
    }
    const isButtonDisabled = title === "" || location === "";
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={styles.imageDownloadCont}>
            <View style={styles.photoCont}>
            <View style={styles.imageCont}><Entypo name="camera" size={24} color="#BDBDBD" /></View>
            </View>
            <Text style={styles.downloadText}>Загрузите фото</Text>
            </View>
            <ScrollView>
            <View>
                <TextInput
                style={styles.input}
                placeholder="Название..."
                onChangeText={onChangeText}
                >
                </TextInput>
            </View>
            <View style={styles.inputContainer}>
        <EvilIcons name="location" size={24} color="black" />
        <TextInput
          style={styles.inputs}
          placeholder="Местность..."
          onChangeText={onChangeLocation}
        />
      </View>
      <TouchableOpacity style={[styles.btn, isButtonDisabled && styles.disabledBtn]} disabled={isButtonDisabled}>
            <Text style={styles.btnText}>Опубликовать</Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
        {/* <Main.Navigator>
            <Main.Screen name="ProfileScreen" component={PostsScreen}></Main.Screen>
        </Main.Navigator> */}
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        display:"flex",
        // alignItems:"center",
        paddingLeft:16,
        paddingRight:16,
        backgroundColor: "#FFFFFF",
    },
    photoCont:{
        width:"100%",
        height:240,
        backgroundColor:"#E8E8E8",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom: 8
    },
    imageCont:{
        padding: 18,
        // borderRadius:"50",
        backgroundColor:"#FFFFFF",
        borderRadius: 50,
    },
    imageDownloadCont:{
        marginBottom: 32
    },
    downloadText:{
        textAlign:"left"
    },
    input:{
        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 16,
        // backgroundColor: "#F6F6F6",
        borderBottomColor:"#E8E8E8",
        borderBottomWidth:1,
        marginBottom: 16
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
      },
      inputs: {
        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 16,
        flex: 1,
        // backgroundColor: "#F6F6F6",
        // marginBottom: 32
      },
      btn: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 15,
        backgroundColor: "#FF6C00",
        marginBottom: 30,
        borderRadius: 100,
        marginTop:32
      },
      btnText: {
        fontSize: 16,
        textAlign: "center",
        color: "#fff",
        lineHeight: 19,
        fontFamily: 'Roboto Regular'
      },
      disabledBtn: {
        backgroundColor: "#CCC", // Цвет кнопки при отключенном состоянии
      },
})