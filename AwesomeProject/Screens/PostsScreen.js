import { View, StyleSheet, Text, Image } from "react-native";

export default function PostsScreen({email, name}) {
    // console.log(email, name);
    return <>
    <View style={styles.container}>
      <View style={styles.cont}>
      <Image source={require('../images/Rectangle.png')} style={styles.image}/>
      <View style={styles.textContainer}>
        {!name && <View style={styles.anotherContainer}><Text style={styles.nameText}>{email}</Text><Text>{email}</Text></View>}
        {name && <View style={styles.textContainer}><Text style={styles.nameText}>{name}</Text>
        <Text>{email}</Text></View>}
        </View>
        </View>
    </View>
    </>
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // height:"100%",
      paddingLeft: 16,
      paddingRight:16,
      display:"flex",
      flexDirection:"row",
      backgroundColor: "#FFFFFF",
    //   backgroundColor:"red",
      // backgroundColor: "#ffd1d1",
      // alignItems: 'star',
      // justifyContent: "",
      // paddingBottom: Platform.OS === 'ios' ? 0 : Keyboard.dismiss,
    },
    cont:{
      display:"flex",
      flexDirection:"row",
      // justifyContent:"flex-end"
    },
    textContainer:{
      display:"flex",
      // justifyContent:"center"
    },
    nameText:{
      fontFamily: 'Roboto Medium',
      fontWeight: 700,
      fontSize: 13,
      lineHeight: 15,
      display: "flex",
      alignItems: "center"
    },
    image:{
      width: 60,
      marginRight: 8,
    },
    anotherContainer:{
      display:"flex",
      justifyContent:"center"
    }
  });
  