import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import foods from '../assets/data/Foods';

const {width} = Dimensions.get('window');

const foodCategories = [
  {name: 'BREAKFAST', icon:'food'},
  {name: 'LUNCH',  icon:'food-croissant'},
  {name: 'DINNER', icon:'food-variant'},
  {name: 'DRINKS', icon:'food-fork-drink'},
]

const Card = ({food, navigation}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.MainCard}>
        <Image source={food.image} style={styles.CardImage}/>
        <View style={styles.CardTitleCon}>
          <Text style={styles.CardTitle}>{food.title}</Text>
          <Text style={styles.CardText}>Lorem ipsum dolor idunt ut labore et dolore </Text>
          <Text style={styles.CardPrice}>$ {food.price}</Text>
          <View style={styles.CardButtonCon}>
            <Text style={styles.CardButtonText}>Place Order</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const MenuScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [filteredFoods, setFilteredFoods] = React.useState([]);

  const filterFood = index => {
    const currentFoods = foods.filter((item)=>item?.food?.toUpperCase() == foodCategories[index].name,
    )[0].foods;
    console.log(currentFoods)

    setFilteredFoods(currentFoods)
  };
  React.useEffect(()=> {
    filterFood(0)
  },[])



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


      {/* Menu */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.TopWrapper}>
          <Text style={styles.MenuText}>Our Menu</Text>
        </View>

        {/* Menu Array */}
        <View style={styles.MenuCon}>
          {foodCategories.map((item, index)=> (
            <View key={'food' + index} style={{alignItems:'center'}}>
              <TouchableOpacity 
                onPress={() => {
                  filterFood(index);
                  setSelectedCategoryIndex(index)
                }} 
                style={[styles.categoryBtn, {
                backgroundColor: selectedCategoryIndex == index ? '#293071' : '#ffffff'
              }]}>
                <Icon name={item.icon}  size={30} color={selectedCategoryIndex == index ? '#ffffff' : '#293071'}/>
              </TouchableOpacity>
              <Text style={styles.BtnText}>{item.name}</Text>
            </View>
          ))}
        </View>

        {/* Menu List */}
        <FlatList 
          data={filteredFoods}
          renderItem={({item}) => <Card food={item} navigation={navigation}/>}
        />



      </ScrollView>
    </View>
  )
}

export default MenuScreen

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
    marginTop:50,
    alignItems:'center',
    justifyContent:'center'
  },
  MenuText:{
    fontWeight:'bold',
    fontSize:23,
    color:'#33C7A3',
  },
  MenuCon:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
  },
  categoryBtn:{
    height:50,
    width:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:'#293071',
    marginHorizontal:20,
    borderWidth:2,
    borderColor:'#293071',
  },
  BtnText:{
    color:'#000000',
    fontSize:15,
    marginTop:5
  },
  MainCard:{
    height:370,
    width:width*0.55,
    backgroundColor:'#ffffff',
    marginLeft:'20%',
    marginBottom:30,
    marginTop:30,
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
  },
  CardButtonText:{
    color:'#ffffff',
    fontWeight:'bold'
  },
})