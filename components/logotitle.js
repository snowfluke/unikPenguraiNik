import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function LogoTitle(props) { 

    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer()
    }

    return (
        <View style = {styles.header}>
            <MaterialIcons name = 'menu' size = {26} color = "#dabfff" onPress = {() => toggleDrawer()} style = {styles.menu} />
            <View style = {styles.headerTitle}>
                <Image
                style={{ width: 35, height: 35}}
                source={require('../assets/icon.png')}
                />
                <Text style = {styles.headerText}>{props.title}</Text>
            </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    header: {
         width: '100%',
         height: '100%',
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#2c2a4a'
    },
    menu: {
         position: 'absolute',
         left: 5
    },
    headerTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dabfff',
    }
 })