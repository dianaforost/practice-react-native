import { View, Text, StyleSheet } from "react-native";
import { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Location from "expo-location";
import MapView, { Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons'; 

export default function MapScreen(){
    const navigation = useNavigation();
    const route = useRoute();


    return (<>
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
        <Text style={styles.title}>MapScreen</Text>
      </View>
        <View style={styles.mapContainer}>
          <MapView style={styles.map} region={{
  latitude: route.params.params.location.latitude,
  longitude: route.params.params.location.longitude,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}}>
            <Marker title="Here" 
            coordinate={{ latitude: 37.4220936, longitude: -122.083922 }}  
            description="Hello"/>
          </MapView>
        </View>
      {/* )} */}
    </View>
    </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    header: {
        flexDirection: 'row',
        top:70,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
      },
    mapContainer: {
      height: 800,
      width:"100%",
      top: 90,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });