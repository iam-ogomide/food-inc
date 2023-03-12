import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import ContactScreen from '../screens/ContactScreen';
import BlogScreen from '../screens/BlogScreen';

const Drawer = createDrawerNavigator();


const CustomDrawerContent = props => {
    return (
        <DrawerContentScrollView style={{paddingVertical:30, marginHorizontal:10}}>
            <View style={{marginLeft:20, marginVertical:40}}>
                <Text style={{color:'#ffffff',fontWeight:'bold',fontSize:13,marginTop:10}}>MIDE SAM</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
        screenOptions={{
            headerShown:false,
            drawerType:'slide',
            drawerStyle:{
                width:300,
                backgroundColor:'#293071',
            },
            overlayColor:null,
            drawerActiveTintColor:'white',
            drawerInactiveTintColor:'#88b3b5',
            drawerItemStyle:{backgroundColor:null},
            drawerLabelStyle:{
                fontWeight:'bold',
            },
        }}
        drawerContent={props =><CustomDrawerContent {...props}/>}
     >
      <Drawer.Screen name="Home" options={{title:'Home', drawerIcon:({color})=> <Icon name='home' size={25} color={color} style={{marginRight:-20}}/>}}>
        {props => <HomeScreen {...props}/>}
      </Drawer.Screen>
      <Drawer.Screen name="Menu" options={{ drawerIcon:({color})=> <Icon name='menu' size={25} color={color} style={{marginRight:-20}}/>}} component={MenuScreen}>
        
      </Drawer.Screen>
      <Drawer.Screen name="Contact" options={{ drawerIcon:({color})=> <Icon name='contacts' size={25} color={color} style={{marginRight:-20}}/>}} component={ContactScreen}>
        
      </Drawer.Screen>
      <Drawer.Screen name="Favourites" options={{ drawerIcon:({color})=> <Icon name='heart' size={25} color={color} style={{marginRight:-20}}/>}} component={BlogScreen}>
      </Drawer.Screen>
      
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})