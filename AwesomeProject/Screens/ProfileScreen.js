import { Text, StyleSheet, View, Image } from "react-native";

export default function ProfileScreen({email,name}){
return ( <>
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
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 16,
      paddingRight:16,
      display:"flex",
      flexDirection:"row",
      backgroundColor: "#FFFFFF",
    },
    cont:{
      display:"flex",
      flexDirection:"row",
    },
    textContainer:{
      display:"flex",
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
  