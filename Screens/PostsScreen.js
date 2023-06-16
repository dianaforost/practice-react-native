import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';
import { EvilIcons } from '@expo/vector-icons'; 
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";

export default function PostsScreen({ email, name, pos }) {
  const navigation = useNavigation();
  const route = useRoute();
  const [posts, setPost] = useState([])
  const [postId, setPostId] = useState();

  let location;

  const getDataFromFirestore = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'users'));
      const dts = snapshot.forEach((doc) =>{ 
        const ds = doc.data()
        setPostId(doc.id)
        const locaion = ds.location
        const title = ds.title;
        const photo = ds.photo
        setPost((prevPosts) => [...prevPosts, { locaion, title, photo }]);
      })
      return dts
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  useEffect(() => {
    getDataFromFirestore()
  }, []);

            const handleIconPress = () => {
              navigation.navigate('MapScreen', {
                screen : 'PostsScreen',
            params :{
              location: route.params.params.location
            }
          })
        };
        const onComment = (photo) =>{
          navigation.navigate('CommentsScreen', {
            screen : 'PostsScreen',
            params :{
              photo: photo,
              postId: postId
            }
          })
        }
        return (
          <>
      <View style={styles.container}>
        <View style={styles.cont}>
          <Image source={require('../images/Rectangle.png')} style={styles.image} />
          <View style={styles.textContainer}>
            {!name && (
              <View style={styles.anotherContainer}>
                <Text style={styles.nameText}>{email}</Text>
                <Text>{email}</Text>
              </View>
            )}
            {name && (
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text>{email}</Text>
              </View>
            )}
          </View>
        </View>
              <ScrollView>
        <View style={styles.postsContainer}>
              <>
                {posts.map((post, index) => (
                  <View key={index}>
                    <Image source={{uri : post.photo}} style={{width: 343, height: 240}}/>
                    <Text style={{fontWeight: 500,fontSize: 16}}>{post.title}</Text>
                    <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={{display:"flex", flexDirection:"row", width:"50%"}}>
                    <TouchableOpacity onPress={() => onComment(post.photo)} style={{display:"flex", flexDirection:"row"}}>
                    <EvilIcons name="comment" size={24} color="black" />
                    <Text>0</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleIconPress}>
                      <View style={{display:"flex", flexDirection:"row"}}>
                      <EvilIcons name="location" size={24} color="black" />
                        <Text>{post.loc}</Text>
                      </View>
                    </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </>
            

        </View>
                </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight:16,
    display:"flex",
    flexDirection:"column",
    backgroundColor: "#FFFFFF",
  },
  mapContainer: {
    width: "100%",
      height: 500,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    imageBackground: {
      flex: 1,
      position: 'relative',
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
    },
    postImage:{
      width:100
    },
    postsContainer:{
    }
  });
  
  
