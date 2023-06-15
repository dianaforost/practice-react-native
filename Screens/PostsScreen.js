import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';
import { EvilIcons } from '@expo/vector-icons'; 

export default function PostsScreen({ email, name }) {
  const navigation = useNavigation();
  const route = useRoute();
  let posts = [];
  let location;

  // console.log(route);
  // useEffect(() =>{
  //   (async () =>{
    if (route.params !== undefined) {
        const newPost = {
          title: route.params.params.title,
          location: route.params.params.location,
          photo: route.params.params.photo,
          loc:route.params.params.loc
        } 
        
        posts.push(newPost);
        // console.log(posts);
              // console.log(posts.photo);
            }
            const handleIconPress = () => {
              navigation.navigate('MapScreen', {
                screen : 'PostsScreen',
            params :{
              location: route.params.params.location
            }
          })
        };
        const onComment = () =>{
          navigation.navigate('CommentsScreen', {
            screen : 'PostsScreen',
            params :{
              photo: route.params.params.photo
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
        <View style={styles.postsContainer}>
            {route.params === undefined ? (
              <Text>There are no posts</Text>
              ) : (
              <>
                {posts.map((post, index) => (
                  <View key={index}>
                    <Image source={{uri : post.photo}} style={{width: 343, height: 240}}/>
                    <Text style={{fontWeight: 500,fontSize: 16}}>{post.title}</Text>
                    <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={{display:"flex", flexDirection:"row", width:"50%"}}>
                    <TouchableOpacity onPress={onComment} style={{display:"flex", flexDirection:"row"}}>
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
            )}

        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:"100%",
    paddingLeft: 16,
    paddingRight:16,
    display:"flex",
    flexDirection:"column",
    backgroundColor: "#FFFFFF",
    //   backgroundColor:"red",
    // backgroundColor: "#ffd1d1",
    // alignItems: 'start',
    // justifyContent: "",
    // paddingBottom: Platform.OS === 'ios' ? 0 : Keyboard.dismiss,
  },
  mapContainer: {
    width: "100%",
      height: 500, // Задайте желаемую высоту карты
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
    },
    postImage:{
      width:100
    },
    postsContainer:{
      // backgroundColor:"black"
    }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //   })();
  // },[])
  // if (route.params !== undefined) {
  //   const newPost = {
  //     title: route.params.params.title,
  //     location: route.params.params.location,
  //     photo: route.params.params.photo
  //   } 
    
  //   posts.push(newPost)
  //         // console.log(posts.photo);
  //       }
















  // export default function PostsScreen({email, name}) {
  //   const route = useRoute()
  // let posts = [];
  // console.log(route);
  // if(route.params !== undefined){
  //   posts = [{
  //     title : route.params.params.title,
  //     location : route.params.params.location
  //   },
  // {
  //   title: "Hailine",
  //   location:"NewYork"
  // }]
  //   console.log(posts);
  //   }
  //   // console.log(title, location);
  //     // console.log(email, name);
  //     return <>
  //     <View style={styles.container}>
  //       <View style={styles.cont}>
  //       <Image source={require('../images/Rectangle.png')} style={styles.image}/>
  //       <View style={styles.textContainer}>
  //         {!name && <View style={styles.anotherContainer}><Text style={styles.nameText}>{email}</Text><Text>{email}</Text></View>}
  //         {name && <View style={styles.textContainer}><Text style={styles.nameText}>{name}</Text>
  //         <Text>{email}</Text></View>}
  //         {route.params === undefined ? <Text>There is no posts</Text> : (
  //           {posts.map(post => {
  //             return (
  //               <View key={post.title}>
  //                 <Text>{post.title}</Text>
  //                 <Text>{post.location}</Text>
  //               </View>
  //             );
  //           })}
  //           )}
  //         </View>
  //         </View>
  //     </View>
  //     </>
  // }
  
  
  
  // <View>
    // {posts.map(post =>{ return <View><Text>{post.title}</Text>
    // <Text>{post.location}</Text></View>})}
  // </View>