import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import {Ionicons} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../redux/auth/operations";
import { setUser } from "../redux/auth/selectors";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";
export default function Home({route}) {
    const email = route.params.params.email;
    const displayName =  route.params.params.displayName;
    console.log(route.params);
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const Tab = createBottomTabNavigator();
    return(
        <>
        <View style={styles.container}>
        <Tab.Navigator initialRouteName="PostsScreen" style={styles.tab} screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === "PostsScreen") {
            return <Ionicons name="grid" size={24} />;
          }else if(route.name === "Создать публикацию"){
            return <Entypo style={styles.icon} name="plus" size={13} color="black" />
          }else if (route.name === "ProfileScreen") {
            return <Feather name="user" size={24} color="black" />
          }
        },
    })} 
    tabBarOptions={{
      style: { paddingTop: 10, paddingBottom: 10 },
    }}
      >
        <Tab.Screen name="PostsScreen" component={() => <PostsScreen  email={email} name={displayName} />} options={{
            headerTitle: "PostsScreen",
            headerTitleContainerStyle: {
              marginLeft: 100,
            },
            headerRight: () => (
                <TouchableOpacity
                onPress={() => {navigation.goBack(); dispatch(signOutUser())}}
                title="Info"
                color="#000"
                style={{ marginRight: 10}}
                ><AntDesign name="rightcircleo" size={24} color="black" /></TouchableOpacity>
            ),
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center"
            },
            }} >
            </Tab.Screen>
        <Tab.Screen name="Создать публикацию" component={CreatePostsScreen} options={{headerLeft: () => (
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                title="Info"
                color="#000"
                style={{ marginRight: 10}}
                ><AntDesign name="left" size={24} color="black" style={{marginLeft:16}}/></TouchableOpacity>
            ), headerTitleContainerStyle: { 
              marginRight: 16
            },
          }}
        />
        <Tab.Screen name="ProfileScreen" component={() => <ProfileScreen email={email} name={displayName} />} />
        </Tab.Navigator>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: "#FFFFFF",
},
btn:{
    marginRight: 10
},
icon:{
    backgroundColor:"#FF6C00",
    paddingTop:13,
    paddingBottom:13,
    paddingLeft:28.5,
    paddingRight:28.5,
    borderRadius: 50
},
tab:{
    paddingBottom:9,
    paddingTop:9,
}
})