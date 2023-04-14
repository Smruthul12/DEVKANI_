import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Animated, Image} from 'react-native';
import {
    useSafeAreaInsets,

  } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
//logo
import Logo from '../assets/image-removebg-preview.png'
export default function Splashscreen(){
    
<StatusBar style="auto" />
    const [fontsLoaded] = useFonts({
        'VisbyExtrabold': require('../assets/fonts/VisbyExtrabold.otf'),
      });
    
    
        //Safearea value
    const edges=useSafeAreaInsets();

    //Animation 
    // const startAnimation =
    return(


        <View style={{
            position: 'absolute',
            top: 0,
            bottom:0,
            left:0,
            right:0,
            backgroundColor:'#F9FAFC'

        }}>
        
        <Animated.View style={{
            flex: 1,
            alignItems:'center',
            justifyContent:'center'

        }}>
            <Image source={Logo} style={{
                width: 200,
                height: 200,
                marginBottom:3,
            }}>
            </Image>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#182748',
             
            }}>
                DevKani
            </Text>
        </Animated.View>
         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'VisbyExtrabold',
       fontSize: 30 ,
    },
  });