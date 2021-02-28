import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'

import { 
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack'

import {
  NavigationContainer,
  DefaultTheme
} from '@react-navigation/native'

import React from 'react'
import LogoTitle from '../components/logotitle'

import {
  Home,
  Result,
  About,
  Saved,
  Developer
} from '../screens/screen'

import {
  Image,
  View,
  Text
} from 'react-native'

const HStack = createStackNavigator()
const AStack = createStackNavigator()
const DStack = createStackNavigator()
const SStack = createStackNavigator()
const HDrawer = createDrawerNavigator()
  
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2c2a4a',
  },
};

const HomeStack = ({navigation }) => {
  return (
        <HStack.Navigator
          screenOptions = {{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS
          }}
        >
          <HStack.Screen
            name = "Home"
            component = {Home} 
            options = {{
              headerTitle: () => <LogoTitle title = 'NIK' navigationProps = { navigation } />,
              headerStyle: {
                backgroundColor: '#2c2a4a'
              } 
            }}
          />
          <HStack.Screen 
            name = "Hasil"
            component = {Result}
            options = {{
              headerTintColor: '#dabfff',
              headerStyle: {
                backgroundColor: '#2c2a4a',
              }
            }}
          />
        </HStack.Navigator>
    );
}

const AboutStack = ( { navigation } ) => (
        <AStack.Navigator>
          <AStack.Screen 
          name = "Tentang" 
          component = {About} 
          options = {{
            headerTitle: () => <LogoTitle title = 'Tentang' navigationProps = { navigation } />,
              headerStyle: {
                backgroundColor: '#2c2a4a'
              } 
          }}/>
        </AStack.Navigator>
    );

  const DeveloperStack = ( { navigation } ) => (
    <DStack.Navigator>
      <DStack.Screen 
      name = "Pengembang" 
      component = {Developer} 
      options = {{
        headerTitle: () => <LogoTitle title = 'Pengembang' navigationProps = { navigation } />,
          headerStyle: {
            backgroundColor: '#2c2a4a'
          } 
      }}/>
    </DStack.Navigator>
);

const SavedStack = ( { navigation } ) => (
  <SStack.Navigator
    screenOptions = {{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      ...TransitionPresets.SlideFromRightIOS
    }}
  >
    <SStack.Screen 
    name = "Tersimpan" 
    component = {Saved} 
    options = {{
      headerTitle: () => <LogoTitle title = 'Tersimpan' navigationProps = { navigation } />,
        headerStyle: {
          backgroundColor: '#2c2a4a'
        } 
    }}/>
    <SStack.Screen 
            name = "Hasil"
            component = {Result}
            options = {{
              headerTintColor: '#dabfff',
              headerStyle: {
                backgroundColor: '#2c2a4a',
              }
            }}
          />
  </SStack.Navigator>
);

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView 
      {...props}
      contentContainerStyle={{
        paddingTop: 0,
      }
   }>
      <View style = {{backgroundColor: '#2c2a4a', justifyContent: 'center', height: 200, width: '100%'}}>
        <Image
          style = {{ width: '100%', height: 100}}
          source = {require('../assets/icon.png')}
          resizeMode = 'contain'
            />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export const Nav = () => (
      <NavigationContainer theme = { MyTheme }>
        <HDrawer.Navigator
          backBehavior='none'
          drawerContent={props => <CustomDrawer {...props} />}  
        >
            <HDrawer.Screen name = "Beranda" component = {HomeStack} />
            <HDrawer.Screen name = "Tersimpan" component = {SavedStack} />
            <HDrawer.Screen name = "Tentang" component = {AboutStack} />
            <HDrawer.Screen name = "Pengembang" component = {DeveloperStack} />
        </HDrawer.Navigator>
      </NavigationContainer>
    );