import React, { useEffect, useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Animated, Image, Dimensions } from 'react-native';
import {
    useSafeAreaInsets,

} from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
//logo
import Logo from '../assets/image-removebg-preview.png'




export default function Splashscreen() {

    <StatusBar style="auto" />
    const [fontsLoaded] = useFonts({
        'VisbyExtrabold': require('../assets/fonts/VisbyExtrabold.otf'),
    });


    //Safearea value
    const edges = useSafeAreaInsets();

    //Animation 
    const startAnimation = useRef(new Animated.Value(0)).current;
    //scaling
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    //offset
    const movelogo = useRef(new Animated.ValueXY({x:0,y:0})).current;
    const movetitle = useRef(new Animated.ValueXY({x:0,y:0})).current;
    useEffect(() => {
        //starting animantion after 500sec
        setTimeout(() => {
            //sequence
            Animated.parallel([
                Animated.timing(startAnimation, {
                    toValue: -Dimensions.get('window').height + (edges.top + 65),

                    useNativeDriver: true
                }),
                Animated.timing(scaleTitle, {
                    //scale to 0.35
                    toValue: 0.35,

                    useNativeDriver: true
                }), Animated.timing(scaleLogo, {

                    //scale
                    toValue: 0.25,

                    useNativeDriver: true
                }), Animated.timing(movelogo, {

                    //scale
                    toValue: {
                        x: (Dimensions.get('window').width / 2) - 35,
                        y: (Dimensions.get('window').height/2) - 10
                    },

                    useNativeDriver: true
                }), Animated.timing(movetitle, {

                    //scale
                    toValue: {
                        x: (Dimensions.get('window').width / 2) - 35,
                        y: (Dimensions.get('window').height/2) - 10
                    },

                    useNativeDriver: true
                })

            ])

                .start();
        }, 500);

    }, [])


    return (


        <Animated.View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#F9FAFC',
            transform: [
                {
                    translateY: startAnimation,
                }
            ]

        }}>

            <Animated.View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Animated.Image source={Logo} style={{
                    width: 200,
                    height: 200,
                    marginBottom: 3,
                    transform: [
                        
                        {
                            translateX: movelogo.x,
                        },{
                            translateY: movelogo.y,
                        },{
                            scale: scaleLogo,
                        }
                    ]

                }}>
                </Animated.Image>
                <Animated.Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: '#182748',
                    transform: [
                        {
                            scale: scaleTitle,
                        },
                        {
                            translateX: movetitle.x,
                            
                        }
                        
                    ]

                }}>
                    DevKani
                </Animated.Text>
            </Animated.View>

        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'VisbyExtrabold',
        fontSize: 30,
    },
});