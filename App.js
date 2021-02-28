import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Nav } from './routes/menu';

export default function App() {
  const [fontStatus] = useFonts({
    'oxy': require('./assets/fonts/Oxygen-Regular.ttf'),
    'oxyb': require('./assets/fonts/Oxygen-Bold.ttf'),
    'oxyl': require('./assets/fonts/Oxygen-Light.ttf')
  });

  if (!fontStatus){
    return (
      <AppLoading />
    )
  }else{
    return ( <Nav /> )
  }
  
}