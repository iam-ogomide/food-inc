import { Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


const ContactScreen = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <View style={styles.logoCon}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
            <Text style={styles.logoText}>Food Inc</Text>
          </View>
          <Icon name='menu' size={33} onPress={navigation.toggleDrawer}/>
        </View>
      </SafeAreaView>


      <KeyboardAvoidingView style={styles.BodyCon} behavior='padding'>
      <View style={styles.inputContainer}>
        <Text style={styles.ContactText}>Your Name</Text>
        <TextInput 
          placeholder='Name'
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input} 
        />
        <Text style={styles.ContactText}>Email</Text>
        <TextInput 
          placeholder='Email'
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input} 
        />
        <Text style={styles.ContactText}>Message</Text>
        <TextInput
          multiline={true}
          // numberOfLines={4}
          style={styles.textInputie}
          placeholder='Leave us a review'
          />

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {alert=('Your Message has been Submitted')}} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',
  },
  headerWrapper:{
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:20,
    borderBottomWidth:1,
    borderBottomColor:'#d0d8dc',
    height:80,
  },
  logoCon:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:9
  },
  logoText:{
    fontSize:20,
    paddingLeft:7,
    fontWeight:'bold',
    color:"#293071"
  },
  TopWrapper:{
    marginTop:50,
    alignItems:'center',
    justifyContent:'center'
  },
  MenuText:{
    fontWeight:'bold',
    fontSize:23,
    color:'#33C7A3',
  },
  BodyCon:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:40,
  },
  inputContainer:{
    width:'80%',
  },
  input:{
    backgroundColor:'#ffffff',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:7,
    borderWidth:1,
    borderColor:"#293071",
  },
  textInputie:{
    paddingHorizontal:15,
    paddingVertical:20,
    backgroundColor:'#ffffff',
    borderRadius:10,
    marginTop:7,
    borderWidth:1,
    borderColor:"#293071",
  },
  ContactText:{
    fontSize:16,
    fontWeight:'bold',
    color:'#293071',
    marginTop:10,
  },
  buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
  },
  button:{
    backgroundColor:"#293071",
    width:'100%',
    padding:15,
    borderRadius:10,
    alignItems:'center',
  },
  buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16,
  },
  buttonOutline:{
    backgroundColor:'white',
    marginTop:7,
    borderColor:'#0782f9',
    borderWidth:2,
  },
  buttonOutlineText:{
    color:'#0782f9',
    fontWeight:'700',
    fontSize:16
  },
})