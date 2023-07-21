import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
    text:string,
    onPress:() => void
}

export const RounderButton = ({text, onPress}:Props) => {
  return (
    <TouchableOpacity
    style={styles.RounderButton}
    onPress={() =>onPress()}
    >
    <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    RounderButton:{
        width:'100%',
        height:50,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15
    },
    textButton:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }
})