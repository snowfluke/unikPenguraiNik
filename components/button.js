import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function CustomButton({ name, onPress }){
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.button}>
                <Text style = {styles.buttonText}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        margin:10,
        width: '50%',
        borderRadius: 6,
        backgroundColor: '#2c2a4a',
        paddingVertical: 12,
        paddingHorizontal: 30
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    }
})