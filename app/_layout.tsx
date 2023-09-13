import {Slot, Stack} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {View, Switch, StyleSheet} from 'react-native';
import { useFonts } from "expo-font";
 
import { useCallback } from "react"
import * as SplashScreen from 'expo-splash-screen'
import { AppProvider } from './context/AppContext';

SplashScreen.preventAutoHideAsync()
const StackLayout = () => {
    const [fontsLoaded]=useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })


    const onLayoutRootView = useCallback(async ()=>{
        if(fontsLoaded){
            await SplashScreen.hideAsync()
        }
    },[fontsLoaded])

    if(!fontsLoaded) return null;

  return (
   <AppProvider>
    <Stack  screenOptions={{
        headerShown: false
      }} >
        
        <Stack.Screen  name="(tabs)" />
    </Stack>
    </AppProvider>
     
  )
}

export default StackLayout