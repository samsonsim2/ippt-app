//Index.tsx
import { Redirect, useRootNavigation, useRootNavigationState } from 'expo-router'
import React, { useEffect } from 'react'
import {View,Text} from'react-native'
import { AppProvider } from './context/AppContext'
 
const index = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  return <Redirect href={'/home'} />
}

export default index