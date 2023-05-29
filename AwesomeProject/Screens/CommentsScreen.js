import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useRoute, useNavigation } from '@react-navigation/native';
import { useState } from "react";

export default function CommentsScreen(){
    const navigation = useNavigation();
    const route = useRoute();
    const [text, setText] = useState('');
    const [comment, setComment] = useState('');
    // console.log(route);
    const onComment= (e) =>{
        // console.log(e.currentTarget);
        setComment(text)
        // console.log(comment);
        // console.log(text);
        // setComment(text);
        // console.log(comment);
    }
    // const padding = style={{padding:100}}
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
                        <Image source={{uri : route.params.params.photo}} style={{width: 343, height: 240}} />
                    </View>

                    <ScrollView>
                        {/* Ваши комментарии */}
                        {comment !== '' && 
                        <View><Text>{comment.toString()}</Text></View>
                        }
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
    //   paddingBottom: 30,
    //   justifyContent: 'center',
},
// icon: {
    //   width: 50,
    //   height: 50,
    // },
    header: {
        flexDirection: 'row',
        top:40,
        // alignItems: 'center',
        // paddingHorizontal: 10,
        // paddingTop: 10,
        // flex:3
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
        // paddingTop:16,
        // paddingLeft:16,
        // paddingBottom:15,
        // paddingRight:10,
        // borderRadius:20,
        // backgroundColor:"#F6F6F6",
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
        // display:"flex", 
        // flexDirection:"row",
        //  alignItems:"center",
        //  borderRadius: 100,
        // backgroundColor:"#F6F6F6",
        // paddingTop:16,
        // paddingLeft:16,
        // paddingBottom:15,
        // paddingRight:10,
        // borderWidth: 1,
        // borderColor:"#E8E8E8",
        // borderStyle:"solid",
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








// <KeyboardAvoidingView
//     behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}
//   >
// <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//     {/* <View style={styles.container}> */}
//         <View style={styles.header}>
//     <AntDesign
//       name="arrowleft"
//       size={24}
//       color="black"
//       onPress={() => {
//         navigation.goBack()
//       }}
//     />
//     <Text style={styles.title}>CommentsScreen</Text>
//   </View>
//   {/* <ScrollView> */}
//   <View style={styles.imageContainer}>
//     <Image source={{uri : route.params.params.photo}} style={{width: 343, height: 240}}></Image>
//   </View>
//   <View>
//     {/* <View></View> */}
//   </View>
//   <View style={styles.inputContainer}>
//     <TextInput
//     style={styles.input}
//     placeholder="Комментировать..."
//     value={comment}
//     onChangeText={setComment}
//     >
//     </TextInput>
//         <AntDesign name="arrowup" size={24} color="white" style={styles.icon} onPress={onComment}/>
//   </View>
//     {/* </ScrollView> */}
//     {/* </View> */}
//     </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>