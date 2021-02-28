import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default function Header({ title, navigation }){

    const menuDrawer = () => navigation.toggleDrawer();

    return (
        <View style = {styles.header}>
            <MaterialIcons name = 'menu' size = {26} onPress = {menuDrawer} style = {styles.menu} />
            <View style = {styles.headerTitle}>
                <Image source = {require('../assets/icon.png')} style = {styles.headerImage} />
                <Text style = {styles.headerText}>{title}</Text>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
   header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
   },
   menu: {
        position: 'absolute',
        left: 15
   },
   headerTitle: {
       flexDirection: 'row'
   },
   headerText: {
       fontSize: 21,
       fontWeight: bold,
       color: '#907AD6',
       letterSpacing: 1
   },
   headerImage: {
       width: 25,
       height: 25,
       marginHorizontal: 10
   }
})