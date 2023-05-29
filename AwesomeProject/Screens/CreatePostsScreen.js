import { Dimensions,Image, View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { useState, useEffect, useRef } from 'react';
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useNavigation } from '@react-navigation/native';


export default function CreatePostsScreen(){
    const [title, setTitle] = useState("");
    const [loc, setLoc] = useState ("")
  const [location, setLocation] = useState("");
  // console.log(location);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState(null); 
  const navigation = useNavigation();
  // console.log(capturedImage);
  useEffect(() =>{
    (async () =>{
      const { status } = await Camera.requestPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  },[])
  const onPublish = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    } else {
      const { coords } = await Location.getCurrentPositionAsync({});
      const location = {
        latitude: coords.latitude,
        longitude: coords.longitude,
      };
      setLocation(location);
      // console.log(location);
  
      navigation.navigate('PostsScreen', {
        screen: 'PostsScreen',
        params: {
          title: title,
          location: location,
          loc: loc,
          photo: capturedImage
        }
      });
    }
  };
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  //   const Main = createBottomTabNavigator();
  const onChangeLocation = (text) =>{
      setLoc(text);
    }
    const onChangeText = (text) =>{
      setTitle(text);
    }
    const isButtonDisabled = title === "" || loc === "";
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <View style={styles.cont}>
      <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
        >
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
                setCapturedImage(uri);
                // console.log(capturedImage);
              }
            }}
            ><View style={styles.imageCont}><Entypo name="camera" size={24} color="#fff" /></View>
          </TouchableOpacity>
            {/* <View style={styles.imageCont}><Entypo name="camera" size={24} color="#BDBDBD" /></View> */}
            {/* <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View> */}
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
                );
              }}
              >
            <Text style={{ fontSize: 18, color: "white"}}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
            <Text style={styles.downloadText}>Загрузите фото</Text>
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
      <TouchableOpacity onPress={onPublish} style={[styles.btn, isButtonDisabled && styles.disabledBtn]} disabled={isButtonDisabled}>
            <Text style={styles.btnText}>Опубликовать</Text>
          </TouchableOpacity>
          </ScrollView>
          <Image source={{ uri: capturedImage }}></Image>
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
    downloadText:{
      textAlign:"left"
    },
    imageCont:{
      padding: 18,
      // borderRadius:"50",
      backgroundColor:"#FFFFFF30",
      borderRadius: 50,
      top:20
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
      cont: { flex: 2 },
      camera: { 
        flex: 2, display:"flex",
        alignItems:"center", 
        justifyContent:"center",
        flexDirection:"row"
      },
      photoView: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems:"center"
      },
      
      flipContainer: {
        flex: 0.1,
        alignSelf: "flex-end",
      },
      
      button: { 
        alignSelf: "center",
        paddingBottom:10,
      },
      
      takePhotoOut: {
        borderWidth: 2,
        borderColor: "white",
        height: 50,
        width: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
      },
      
      takePhotoInner: {
        borderWidth: 2,
        borderColor: "white",
        height: 40,
        width: 40,
        backgroundColor: "white",
        borderRadius: 50,
      },
})
        // const onPublish = async () => {
          //   navigation.navigate('PostsScreen', {
            //     screen: 'PostsScreen',
        //     params: {
          //       title: title,
          //       location: location
          //     }
          //   });
          
          //   const { status } = await Location.requestForegroundPermissionsAsync();
          //   if (status !== "granted") {
            //     console.log("Permission to access location was denied");
        //   } else {
          //     let location = await Location.getCurrentPositionAsync({});
          //     const coords = {
            //       latitude: location.coords.latitude,
        //       longitude: location.coords.longitude,
        //     };
        //     setLocation(coords);
        //     console.log(location);
        //   }
        // };



        
        // const onPublish = () =>{
        //   (async () =>{
        //     const { status } =  Location.requestForegroundPermissionsAsync();
        //     if (status !== "granted") {
        //       console.log("Permission to access location was denied");
        //     }
        //     let location = Location.getCurrentPositionAsync({});
        //     const coords = {
        //       latitude: location.coords.latitude,
        //       longitude: location.coords.longitude,
        //     };
        //     setLocation(coords);
        //     console.log(location);
        //     console.log(coords);
        //   })
        //   ();
        //   navigation.navigate('PostsScreen', {
        //     screen: 'PostsScreen',
        //     params: {
        //       title: title,
        //       location: location,
        //       loc: loc,
        //       photo: capturedImage
        //     }
        //   });
        // }