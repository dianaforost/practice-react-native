import { Dimensions,Image, View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { useState, useEffect, useRef } from 'react';
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useNavigation } from '@react-navigation/native';
import { db } from "../config";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";


export default function CreatePostsScreen(){
    const [title, setTitle] = useState("");
    const [loc, setLoc] = useState ("")
  const [location, setLocation] = useState("");

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState(null); 
  const [postId, setPostId] = useState(null); 
  const navigation = useNavigation();

  useEffect(() =>{
    (async () =>{
      const { status } = await Camera.requestCameraPermissionsAsync();
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

      function writeUserData(title, location, photo, loc, postId) {
        try{
          const docRef = addDoc(collection(db, 'users'), {
            title: title,
            location: location,
            photo : photo,
            loc:loc
          });
          const postId = docRef.id; 
          console.log(docRef);
          setPostId(postId)
        }
        catch(e){
          console.error('Error adding document: ', e);
            throw e;
        }
      }
      writeUserData(title, location, capturedImage, loc, postId)
      
      navigation.navigate('PostsScreen', {
        screen: 'PostsScreen',
        params: {
          title: title,
          location: location,
          loc: loc,
          photo: capturedImage,
          postId: postId,
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
              }
            }}
            ><View style={styles.imageCont}><Entypo name="camera" size={24} color="#fff" /></View>
          </TouchableOpacity>
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
        </TouchableWithoutFeedback>
    )
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      display:"flex",
      paddingLeft:16,
      paddingRight:16,
      backgroundColor: "#FFFFFF",
    },
    downloadText:{
      textAlign:"left"
    },
    imageCont:{
      padding: 18,
      backgroundColor:"#FFFFFF30",
      borderRadius: 50,
      top:20
    },
    input:{
      paddingTop: 16,
      paddingBottom: 15,
      paddingLeft: 16,
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
        backgroundColor: "#CCC",
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
