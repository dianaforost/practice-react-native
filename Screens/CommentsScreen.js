import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useRoute, useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { db } from "../config";
import { collection, addDoc } from "firebase/firestore";

export default function CommentsScreen(){
    const navigation = useNavigation();
    const route = useRoute();
    const [text, setText] = useState('');
    const [comment, setComment] = useState('');
    const photo = route.params.params.photo;
    const postId = route.params.params.postId;



    const onComment= async () =>{
        const docRef = await addDoc(collection(db, 'users', postId, 'comments'),{comment: text});
        console.log(docRef);
          console.log('Document written with ID: ', docRef.id);
          setComment([...comment, text]);
    }

    return ( 
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <AntDesign
                            name="arrowleft"
                            size={24}
                            color="black"
                            onPress={() => {
                                navigation.goBack()
                            }}
                        />
                        <Text style={styles.title}>CommentsScreen</Text>
                    </View>

                    <View style={styles.imageContainer}>
                        <Image source={{uri : photo}} style={{width: 343, height: 240}} />
                    </View>

                    <ScrollView>

                        {comment !== '' && comment.map((com) => <View><Text>{com}</Text></View>)}
                    </ScrollView>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Комментировать..."
                            value={text}
                            onChangeText={setText}
                        />
                        <AntDesign name="arrowup" size={24} color="white" style={styles.icon} onPress={onComment} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      alignItems: 'center',
    
},

    header: {
        flexDirection: 'row',
        top:40,
       
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
    },
      imageContainer:{
          paddingTop:82,
    },
    input:{
      
        width:300,
    },
      inputContainer:{
          display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "#F6F6F6",
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 15,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderStyle: "solid",
       
    },
    icon:{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor:"#FF6C00",
        borderRadius:50
    }
});
