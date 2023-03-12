import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')} activeOpacity={0.7} style={styles.main}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
            <Text style={styles.logoText}>Food Inc</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    logoText:{
        fontSize:27,
        paddingLeft:7,
        fontWeight:'bold',
        color:"#293071",
        marginLeft:5,
      },
    logo:{
        width:70,
        height:70,
    },
})