import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

import Main from '../assets/data/Main';
import Review from '../assets/data/Review';

const {width} = Dimensions.get('window')

const Card = ({data, navigation}) => {
  return (
    <TouchableOpacity style={styles.MainCard} activeOpacity={0.7}>
      <Image source={data.image} style={styles.CardImage}/>
      <View style={styles.CardTitleCon}>
        <Text style={styles.CardTitle}>{data.title}</Text>
        <Text style={styles.CardText}>Lorem ipsum dolor idunt ut labore et dolore </Text>
        <Text style={styles.CardPrice}>$ {data.price}</Text>
        <View style={styles.CardButtonCon}>
          <Text style={styles.CardButtonText}>Place Order</Text>
        </View>
      </View>
      
    </TouchableOpacity>
  )
}
const ReviewCard = ({data, navigation}) => {
  return (
    <TouchableOpacity style={styles.MainReviewCard} activeOpacity={0.7}>
      <View style={styles.ReviewWrapper}>
        <Text style={styles.ReviewText}>Lorem ipsum dolor sit amet, t dolore mgiat nulla pariatur. Excepteur sin deserunt mollit anim id est laborum.</Text>
        <Image source={data.image} style={styles.ReviewImage} />
        <Text style={styles.ReviewName}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <View style={styles.logoCon}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
            <Text style={styles.logoText}>Food Inc</Text>
          </View>
          <Icon name='menu' size={33} onPress={navigation.toggleDrawer}/>
        </View>
      </SafeAreaView>

      {/* Top Body */}
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.TopWrapper}>
        <Text style={styles.TopFirst}>Food is symbolic of love when</Text>
        <Text style={styles.TopSecond}>words are inadequate</Text>
      </View>
      <View style={styles.TopLorem}>
        <Text style={styles.Lorem}>Lorem ipsum dolor sit amet, coiusmod tempor incididunt ut labore et dolore mgiat nulla pariatur. Excepteur sin deserunt mollit anim id est laborum.</Text>
      </View>
      <View style={styles.TopButton}>
        <Text style={styles.TopButtonText}>Get Started</Text>
      </View>

      <View style={styles.topImageWrapper}>
        <Image source={require('../assets/images/image3.png')} style={styles.topImage}/>
      </View>

      {/* Popular Dishes */}
      <View style={styles.popularWrapper}>
        <Text style={styles.popularText1}>Popular</Text>
        <Text style={styles.popularText2}>Dishes</Text>
      </View>

      {/* Popular List */}
      <FlatList 
        data={Main}
        renderItem={({item}) => <Card data={item} navigation={navigation}/>}
        showsVerticalScrollIndicator={false}
      />

      {/* Promo Conatiner */}
      <View style={styles.PromoWrapper}>
        <View style={styles.TopPromo}>
          <Text style={styles.TopPromoText}>PROMO !</Text>
          <Text style={styles.TopPromoText}>PROMO !!</Text>
        </View>
        <Text style={styles.TopPromoText1}>We Give You Nothing But The Best</Text>
        <Text style={styles.TopPromoText2}>Lorem ipsum dolor sit amet, coiusmod tempor incididunt ut labore et dolore mgiat nulla </Text>
        <Text style={styles.TopPromoText3}>Time Left</Text>
        <Text style={styles.TopPromoText4}>10 Days : 12 Hours: 19 Mins: 50 Secs</Text>
      </View>


      {/* Reviews */}
      <View style={styles.popularWrapper}>
        <Text style={styles.popularText1}>Our</Text>
        <Text style={styles.popularText2}>Reviews</Text>
      </View>

      {/* Review List */}
      <FlatList 
      data={Review}
      renderItem={({item}) => <ReviewCard data={item} navigation={navigation} />}
      />

      


      </ScrollView>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff'
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
  logo:{},
  logoText:{
    fontSize:20,
    paddingLeft:7,
    fontWeight:'bold',
    color:"#293071"
  },
  TopWrapper:{
    marginTop:60,
    alignItems:'center',
    justifyContent:'center'
  },
  TopFirst:{
    fontWeight:'bold',
    fontSize:23,
    color:'#33C7A3',
  },
  TopSecond:{
    fontWeight:"bold",
    fontSize:23,
    color:'#293071'
  },
  TopLorem:{
    marginTop:15,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:20,
  },
  Lorem:{
    fontSize:16,
    lineHeight:19,
    fontFamily:'sans-serif',
    color:'#555'
  },
  TopButton:{
    marginTop:20,
    height:45,
    width:150,
    backgroundColor:'#293071',
    alignItems:"center",
    justifyContent:'center',
    marginLeft:'30%',
    borderRadius:30,
  },
  TopButtonText:{
    color:"#ffffff",
    fontSize:17,
  },
  topImageWrapper:{
    marginTop:40,
    height:270,
    width:270,
    backgroundColor:'#f5f5f5',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:200,
    marginLeft:'15%',
  },
  topImage:{
    width:250,
    height:250
  },
  popularWrapper:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'center',
    marginTop:60,
    marginBottom:30,
  },
  popularText1:{
    fontWeight:'bold',
    fontSize:23,
    color:'#33C7A3',
  },
  popularText2:{
    fontWeight:"bold",
    fontSize:23,
    color:'#293071',
    marginLeft:8
  },
  MainCard:{
    height:370,
    width:width*0.55,
    backgroundColor:'#ffffff',
    marginLeft:'20%',
    marginBottom:35,
    shadowColor:'#A8A8A8',
    shadowRadius:10,
    shadowOpacity:0.3,
    shadowOffset:{height:10},
    elevation:10,
    borderRadius:20,
    borderWidth:7,
    borderColor:'#ffffff',
  },
  CardImage:{
    height:200,
    width:200
  },
  CardTitleCon:{
    alignItems:'center',
    justifyContent:'center'
  },
  CardTitle:{
    fontSize:18,
    color:'#000000',
    marginTop:10,
    fontWeight:'bold',
  },
  CardText:{
    textAlign:'center',
    marginTop:5,
  },
  CardPrice:{
    fontSize:16,
    fontWeight:'bold',
    marginTop:7,
  },
  CardButtonCon:{
    height:35,
    width:100,
    backgroundColor:'#293071',
    alignItems:"center",
    justifyContent:'center',
    borderRadius:20,
    marginTop:10,
    // borderWidth:2,
    // borderColor:'#293071',
  },
  CardButtonText:{
    color:'#ffffff',
    fontWeight:'bold'
  },
  PromoWrapper:{
    width:'90%',
    marginHorizontal:20,
    backgroundColor:'#33C7A3',
    marginTop:30,
    borderRadius:10,
    alignItems:'center',
    justifyContent:"center",
  },
  TopPromo:{
    flexDirection:"row",
    marginTop:15,
    
  },
  TopPromoText:{
    fontSize:16,
    fontWeight:"bold",
    letterSpacing:2,
    color:'#333',
  },
  TopPromoText1:{
    color:"#ffffff",
    fontSize:20,
    fontWeight:"bold",
    marginTop:7,
  },
  TopPromoText2:{
    color:'#ffffff',
    textAlign:'center',
    fontSize:16,
    marginTop:10,
  },
  TopPromoText3:{
    color:"#ffffff",
    fontSize:19,
    fontWeight:"bold",
    marginTop:10,
  },
  TopPromoText4:{
    color:'#333',
    fontSize:20,
    fontWeight:"bold",
    marginTop:7,
    marginBottom:30,
  },
  MainReviewCard:{
    height:250,
    width:width*0.80,
    backgroundColor:'#ffffff',
    marginLeft:'10%',
    marginBottom:35,
    shadowColor:'#A8A8A8',
    shadowRadius:10,
    shadowOpacity:0.3,
    shadowOffset:{height:10},
    elevation:10,
    borderRadius:20,
    borderWidth:7,
    borderColor:'#ffffff',
  },
  ReviewWrapper:{
    marginTop:25,
    alignItems:'center',
    justifyContent:'center',
  },
  ReviewText:{
    textAlign:"center",
    fontSize:16,
    marginHorizontal:10
  },
  ReviewImage:{
    marginTop:10,
    width:100,
    height:100,
    borderRadius:50
  },
  ReviewName:{
    marginTop:5,
    fontSize:19,
    fontWeight:'bold',
    color:'#293071',
  },

})